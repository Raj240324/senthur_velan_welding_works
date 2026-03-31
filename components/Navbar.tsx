"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">⚙</span>
          <div className="logo-text">
            <span className="logo-main">Sri Senthur Velan</span>
            <span className="logo-sub">Welding Works</span>
          </div>
        </Link>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={{
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "",
            transition: "all 0.25s"
          }}></span>
          <span style={{
            opacity: menuOpen ? "0" : "1",
            transition: "all 0.25s"
          }}></span>
          <span style={{
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "",
            transition: "all 0.25s"
          }}></span>
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "active" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : ""}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={pathname === "/gallery" ? "active" : ""}
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-cta" onClick={closeMenu}>
              Get Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
