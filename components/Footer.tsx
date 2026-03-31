import Link from "next/link";

export default function Footer() {
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
            <p>
              Expert welding and fabrication services serving Sernthamaram,
              Surandai and nearby areas. Quality work at affordable prices.
            </p>
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
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/services#grill-gates">Grill Gates</Link>
              </li>
              <li>
                <Link href="/services#house-gates">House Gates</Link>
              </li>
              <li>
                <Link href="/services#ladders">Steel Ladders</Link>
              </li>
              <li>
                <Link href="/services#railings">Railings</Link>
              </li>
              <li>
                <Link href="/services#custom">Custom Metal Work</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>📍 Sernthamaram / Surandai Area</li>
              <li>
                📞 <a href="tel:+919999999999">+91 99999 99999</a>
              </li>
              <li>
                ✉ <a href="mailto:info@senthurvelan.com">info@senthurvelan.com</a>
              </li>
              <li>🕐 Mon–Sat: 8AM – 7PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Sri Senthur Velan Welding Works. All rights reserved.</p>
          <p>Designed with ❤ for quality craftsmen.</p>
        </div>
      </div>
    </footer>
  );
}
