"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <span className="logo-icon">⚙</span>
              <div className="logo-text">
                <span className="logo-main">Sri Senthur Velan</span>
                <span className="logo-sub">Welding Works</span>
              </div>
            </Link>
            <p>{t("footer.desc")}</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="WhatsApp">
                W
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{t("footer.services")}</h4>
            <ul>
              <li>
                <Link href="/services#grill-gates">{t("marquee.grillGates")}</Link>
              </li>
              <li>
                <Link href="/services#house-gates">{t("marquee.houseGates")}</Link>
              </li>
              <li>
                <Link href="/services#ladders">{t("marquee.steelLadders")}</Link>
              </li>
              <li>
                <Link href="/services#railings">{t("marquee.railings")}</Link>
              </li>
              <li>
                <Link href="/services#custom">{t("marquee.customMetalWork")}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("footer.quickLinks")}</h4>
            <ul>
              <li>
                <Link href="/">{t("nav.home")}</Link>
              </li>
              <li>
                <Link href="/services">{t("nav.services")}</Link>
              </li>
              <li>
                <Link href="/gallery">{t("nav.gallery")}</Link>
              </li>
              <li>
                <Link href="/about">{t("footer.aboutUs")}</Link>
              </li>
              <li>
                <Link href="/contact">{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("footer.contactUs")}</h4>
            <ul className="footer-contact">
              <li>📍 {t("footer.location")}</li>
              <li>
                📞 <a href="tel:+919999999999">+91 99999 99999</a>
              </li>
              <li>
                ✉ <a href="mailto:info@senthurvelan.com">info@senthurvelan.com</a>
              </li>
              <li>🕐 {t("footer.hours")}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
