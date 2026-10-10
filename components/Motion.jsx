"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 900px)");
    const compact = window.matchMedia("(max-width: 700px), (pointer: coarse)");
    const seen = new WeakSet();
    const animations = new Set();
    let observer;
    let pointerCleanup = [];

    const clear = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      pointerCleanup.forEach((cleanup) => cleanup());
      pointerCleanup = [];
    };

    // No idle frame loop: pointer work runs only while a desktop control is hovered.
    const trackPointer = (element, tilt) => {
      let bounds;
      let frame = 0;
      let x = 0;
      let y = 0;
      const properties = tilt ? ["--tilt-x", "--tilt-y"] : ["--magnetic-x", "--magnetic-y"];
      const reset = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        bounds = null;
        properties.forEach((property) => element.style.removeProperty(property));
      };
      const enter = () => { bounds = element.getBoundingClientRect(); };
      const move = (event) => {
        if (event.pointerType !== "mouse" || !bounds) return;
        x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
        y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          element.style.setProperty(properties[0], (tilt ? -y * 2.4 : x * 7) + (tilt ? "deg" : "px"));
          element.style.setProperty(properties[1], (tilt ? x * 2.4 : y * 5) + (tilt ? "deg" : "px"));
        });
      };
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointermove", move, { passive: true });
      element.addEventListener("pointerleave", reset);
      element.addEventListener("pointercancel", reset);
      element.addEventListener("blur", reset);
      return () => {
        reset();
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
        element.removeEventListener("pointercancel", reset);
        element.removeEventListener("blur", reset);
      };
    };

    const start = () => {
      clear();
      if (reduced.matches) return;
      observer = new IntersectionObserver((entries) => {
        if (reduced.matches || document.hidden) return;
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting || seen.has(target)) return;
          seen.add(target);
          observer.unobserve(target);
          // A keyboard user should never have to wait for an entering control.
          if (target.contains(document.activeElement)) return;
          const line = target.dataset.reveal === "line";
          const mobile = compact.matches;
          const original = getComputedStyle(target).transform;
          const base = original === "none" ? "" : original;
          const from = line ? "translateY(105%)" : "translateY(" + (mobile ? 14 : 28) + "px) " + base;
          const animation = target.animate([
            { opacity: line ? 1 : .35, transform: from },
            { opacity: 1, transform: original },
          ], {
            duration: mobile ? 420 : (line ? 760 : 650),
            delay: Math.min(Number(target.dataset.delay) || 0, mobile ? 60 : 180),
            easing: "cubic-bezier(.22, 1, .36, 1)",
            fill: "backwards",
          });
          animation.id = "portfolio-reveal";
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
        });
      }, { threshold: .12, rootMargin: "0px 0px -24px 0px" });
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        if (!seen.has(element)) observer.observe(element);
      });
      if (fine.matches) {
        document.querySelectorAll("[data-magnetic]").forEach((element) => pointerCleanup.push(trackPointer(element, false)));
        document.querySelectorAll("[data-tilt]").forEach((element) => pointerCleanup.push(trackPointer(element, true)));
      }
    };

    start();
    const onVisibility = () => { if (document.hidden) clear(); else start(); };
    const onFocus = (event) => {
      animations.forEach((animation) => {
        if (animation.effect?.target.contains(event.target)) animation.cancel();
      });
    };
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("focusin", onFocus);
    [reduced, fine, compact].forEach((query) => query.addEventListener("change", start));
    return () => {
      clear();
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("focusin", onFocus);
      [reduced, fine, compact].forEach((query) => query.removeEventListener("change", start));
    };
  }, [pathname]);

  return null;
}
