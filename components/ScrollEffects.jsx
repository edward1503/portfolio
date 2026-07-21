'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    const sections = [...document.querySelectorAll('.content-column section[id]')];
    const navItems = [...document.querySelectorAll('[data-nav-target]')];

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });

    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navItems.forEach((item) => item.classList.toggle('active', item.dataset.navTarget === visible.target.id));
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.3, 0.6] });

    sections.forEach((section) => { revealObserver.observe(section); navObserver.observe(section); });
    return () => { revealObserver.disconnect(); navObserver.disconnect(); };
  }, []);

  return null;
}
