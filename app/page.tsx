"use client";

import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import HeroScrollAnimation from "@/components/HeroScrollAnimation";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main>
      {/* HERO SCROLL ANIMATION */}
      <HeroScrollAnimation frameCount={240}>
        <div className="hero-overlay"></div>
        <div className="hero" style={{ height: '100%', width: '100%', pointerEvents: 'none', background: 'transparent' }}>
          <div className="hero-content" style={{ pointerEvents: 'auto' }}>
            <div className="hero-badge">{t("hero.badge")}</div>
            <h1 className="hero-title">
              <span className="line1">{t("hero.line1")}</span>
              <span className="line2">{t("hero.line2")}</span>
              <span className="line3">{t("hero.line3")}</span>
            </h1>
            <p className="hero-desc">{t("hero.desc")}</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                {t("hero.btnQuote")}
              </Link>
              <Link href="/services" className="btn-outline">
                {t("hero.btnServices")}
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">500+</span>
                <span className="stat-label">{t("hero.statProjects")}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">10+</span>
                <span className="stat-label">{t("hero.statExperience")}</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">{t("hero.statSatisfaction")}</span>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>{t("hero.scroll")}</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </HeroScrollAnimation>

      {/* MARQUEE STRIP */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[0, 1].map((_, idx) => (
            <span key={idx}>
              <span>{t("marquee.grillGates")}</span><span className="dot">◆</span>
              <span>{t("marquee.houseGates")}</span><span className="dot">◆</span>
              <span>{t("marquee.steelLadders")}</span><span className="dot">◆</span>
              <span>{t("marquee.railings")}</span><span className="dot">◆</span>
              <span>{t("marquee.customMetalWork")}</span><span className="dot">◆</span>
              <span>{t("marquee.windowGrills")}</span><span className="dot">◆</span>
              <span>{t("marquee.compoundGates")}</span><span className="dot">◆</span>
              <span>{t("marquee.staircaseRailings")}</span><span className="dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="section services-preview">
        <div className="container">
          <SectionHeader
            label={t("servicesPreview.label")}
            titleStart={t("servicesPreview.titleStart")}
            titleEm={t("servicesPreview.titleEm")}
            titleEnd={t("servicesPreview.titleEnd")}
            description={t("servicesPreview.desc")}
          />
          <div className="services-grid">
            <Link href="/services#grill-gates" className="service-card">
              <div className="service-img-wrap">
                <div className="service-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                  <Image src="/images/grill-gate.png" alt="Grill Gate Service" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className="service-body">
                <span className="service-num">01</span>
                <h3>{t("servicesPreview.grillGates")}</h3>
                <p>{t("servicesPreview.grillGatesDesc")}</p>
                <span className="service-link">{t("servicesPreview.viewDetails")}</span>
              </div>
            </Link>

            <Link href="/services#house-gates" className="service-card">
              <div className="service-img-wrap">
                <div className="service-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                  <Image src="/images/house-gate.png" alt="House Gate Service" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className="service-body">
                <span className="service-num">02</span>
                <h3>{t("servicesPreview.houseGates")}</h3>
                <p>{t("servicesPreview.houseGatesDesc")}</p>
                <span className="service-link">{t("servicesPreview.viewDetails")}</span>
              </div>
            </Link>

            <Link href="/services#ladders" className="service-card">
              <div className="service-img-wrap">
                <div className="service-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                  <Image src="/images/ladder.png" alt="Ladder Service" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className="service-body">
                <span className="service-num">03</span>
                <h3>{t("servicesPreview.steelLadders")}</h3>
                <p>{t("servicesPreview.steelLaddersDesc")}</p>
                <span className="service-link">{t("servicesPreview.viewDetails")}</span>
              </div>
            </Link>

            <Link href="/services#railings" className="service-card">
              <div className="service-img-wrap">
                <div className="service-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                  <Image src="/images/railings.png" alt="Railing Service" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className="service-body">
                <span className="service-num">04</span>
                <h3>{t("servicesPreview.railings")}</h3>
                <p>{t("servicesPreview.railingsDesc")}</p>
                <span className="service-link">{t("servicesPreview.viewDetails")}</span>
              </div>
            </Link>

            <Link href="/services#custom" className="service-card">
              <div className="service-img-wrap">
                <div className="service-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                  <Image src="/images/custom.png" alt="Custom Metal Service" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div className="service-body">
                <span className="service-num">05</span>
                <h3>{t("servicesPreview.customMetalWorks")}</h3>
                <p>{t("servicesPreview.customMetalWorksDesc")}</p>
                <span className="service-link">{t("servicesPreview.viewDetails")}</span>
              </div>
            </Link>

            <Link href="/services" className="service-card service-card--cta">
              <div className="service-cta-inner">
                <span className="cta-big-icon">→</span>
                <h3>{t("servicesPreview.seeAll")}</h3>
                <p>{t("servicesPreview.seeAllDesc")}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-us">
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <span className="section-label">{t("whyUs.label")}</span>
              <h2 className="section-title">
                {t("whyUs.titleLine1")}<br />
                <em>{t("whyUs.titleLine2")}</em>
              </h2>
              <p>{t("whyUs.desc")}</p>
              <Link href="/about" className="btn-primary" style={{ marginTop: "2rem" }}>
                {t("whyUs.btnLearn")}
              </Link>
            </div>
            <div className="why-right">
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>{t("whyUs.skilledTitle")}</h4>
                  <p>{t("whyUs.skilledDesc")}</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>{t("whyUs.affordableTitle")}</h4>
                  <p>{t("whyUs.affordableDesc")}</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>{t("whyUs.customTitle")}</h4>
                  <p>{t("whyUs.customDesc")}</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>{t("whyUs.onsiteTitle")}</h4>
                  <p>{t("whyUs.onsiteDesc")}</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>{t("whyUs.localTitle")}</h4>
                  <p>{t("whyUs.localDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section gallery-preview">
        <div className="container">
          <SectionHeader label={t("galleryPreview.label")} titleStart={t("galleryPreview.titleStart")} titleEm={t("galleryPreview.titleEm")} />
          <div className="gallery-grid">
            <div className="gallery-item gi-large">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/house-gate.png" alt="House Gate" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>{t("galleryPreview.houseGate")}</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/grill-gate.png" alt="Window Grill" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>{t("galleryPreview.windowGrill")}</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/railings.png" alt="Staircase Railing" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>{t("galleryPreview.staircaseRailing")}</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/ladder.png" alt="Steel Ladder" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>{t("galleryPreview.steelLadder")}</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/custom.png" alt="Compound Gate" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>{t("galleryPreview.compoundGate")}</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/gallery" className="btn-outline">
              {t("galleryPreview.viewFull")}
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials">
        <div className="container">
          <SectionHeader label={t("testimonials.label")} titleStart={t("testimonials.titleStart")} titleEm={t("testimonials.titleEm")} />
          <div className="testimonials-grid">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>{t("testimonials.t1")}</p>
              <div className="testi-author">
                <div className="testi-avatar">M</div>
                <div>
                  <strong>{t("testimonials.t1Name")}</strong>
                  <span>{t("testimonials.t1Location")}</span>
                </div>
              </div>
            </div>
            <div className="testi-card testi-card--featured">
              <div className="testi-stars">★★★★★</div>
              <p>{t("testimonials.t2")}</p>
              <div className="testi-author">
                <div className="testi-avatar">P</div>
                <div>
                  <strong>{t("testimonials.t2Name")}</strong>
                  <span>{t("testimonials.t2Location")}</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>{t("testimonials.t3")}</p>
              <div className="testi-author">
                <div className="testi-avatar">R</div>
                <div>
                  <strong>{t("testimonials.t3Name")}</strong>
                  <span>{t("testimonials.t3Location")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
