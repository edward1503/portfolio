"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header({ caseStudy = false, homeHref = "/" }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const onKey = (event) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current.focus(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className={`site-header ${caseStudy ? "case-header" : ""}`}>
      <a className="wordmark" href={homeHref} aria-label="Edward, home">edward<span>®</span></a>
      <button ref={toggle} className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>
      <nav id="primary-navigation" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {[["Work", "projects"], ["About", "about"], ["Experience", "experience"]].map(([label, id]) => (
          <a href={homeHref + "#" + id} key={label} onClick={() => setOpen(false)}>{label}<span className="nav-dot" /></a>
        ))}
        <a href={homeHref + "#contact"} className="nav-contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={17} /></a>
      </nav>
    </header>
  );
}
