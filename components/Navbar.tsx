"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useTranslation();

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

  const toggleLang = () => {
    setLocale(locale === "en" ? "ta" : "en");
  };

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
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : ""}
              onClick={closeMenu}
            >
              {t("nav.services")}
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={pathname === "/gallery" ? "active" : ""}
              onClick={closeMenu}
            >
              {t("nav.gallery")}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
              onClick={closeMenu}
            >
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
              onClick={closeMenu}
            >
              {t("nav.contact")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-cta" onClick={closeMenu}>
              {t("nav.getQuote")}
            </Link>
          </li>
          <li>
            <button
              className="lang-toggle"
              onClick={toggleLang}
              aria-label="Toggle Language"
              style={{
                background: "rgba(232,160,32,0.12)",
                border: "1px solid rgba(232,160,32,0.35)",
                color: "#e8a020",
                padding: "0.35em 0.8em",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "var(--font-cond)",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              {locale === "en" ? "தமிழ்" : "English"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
