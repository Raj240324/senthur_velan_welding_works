"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Wait for a short time to let the DOM settle before querying
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll(
        ".service-card, .why-item, .testi-card, .value-card, .process-step, .gal-item, .contact-card, .area-card, .service-detail-grid, .about-intro-grid, .owner-grid"
      );

      revealElements.forEach((el) => {
        el.classList.add("reveal");
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, 80);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
