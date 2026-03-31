"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Services() {
  const { t } = useTranslation();
  return (
    <main>
      {/* PAGE HERO */}
      <PageHero
        label={t("servicesPage.heroLabel")}
        titleLight={t("servicesPage.heroTitleLight")}
        titleBold={t("servicesPage.heroTitleBold")}
        description={t("servicesPage.heroDesc")}
      />

      {/* SERVICE DETAIL: GRILL GATES */}
      <section className="section service-detail" id="grill-gates">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-img">
              <div className="detail-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/grill-gate.png" alt="Grill Gate" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="service-badge">01</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 01</span>
              <h2>{t("servicesPage.grillTitle")}</h2>
              <p className="service-lead">{t("servicesPage.grillLead")}</p>
              <p>{t("servicesPage.grillDesc")}</p>
              <ul className="service-features">
                <li>{t("servicesPage.grillF1")}</li>
                <li>{t("servicesPage.grillF2")}</li>
                <li>{t("servicesPage.grillF3")}</li>
                <li>{t("servicesPage.grillF4")}</li>
                <li>{t("servicesPage.grillF5")}</li>
                <li>{t("servicesPage.grillF6")}</li>
              </ul>
              <Link href="/contact" className="btn-primary">{t("servicesPage.getQuote")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL: HOUSE GATES */}
      <section className="section service-detail service-detail--alt" id="house-gates">
        <div className="container">
          <div className="service-detail-grid service-detail-grid--reverse">
            <div className="service-detail-img">
              <div className="detail-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/house-gate.png" alt="House Gate" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="service-badge">02</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 02</span>
              <h2>{t("servicesPage.houseTitle")}</h2>
              <p className="service-lead">{t("servicesPage.houseLead")}</p>
              <p>{t("servicesPage.houseDesc")}</p>
              <ul className="service-features">
                <li>{t("servicesPage.houseF1")}</li>
                <li>{t("servicesPage.houseF2")}</li>
                <li>{t("servicesPage.houseF3")}</li>
                <li>{t("servicesPage.houseF4")}</li>
                <li>{t("servicesPage.houseF5")}</li>
                <li>{t("servicesPage.houseF6")}</li>
              </ul>
              <Link href="/contact" className="btn-primary">{t("servicesPage.getQuote")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL: LADDERS */}
      <section className="section service-detail" id="ladders">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-img">
              <div className="detail-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/ladder.png" alt="Steel Ladders" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="service-badge">03</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 03</span>
              <h2>{t("servicesPage.ladderTitle")}</h2>
              <p className="service-lead">{t("servicesPage.ladderLead")}</p>
              <p>{t("servicesPage.ladderDesc")}</p>
              <ul className="service-features">
                <li>{t("servicesPage.ladderF1")}</li>
                <li>{t("servicesPage.ladderF2")}</li>
                <li>{t("servicesPage.ladderF3")}</li>
                <li>{t("servicesPage.ladderF4")}</li>
                <li>{t("servicesPage.ladderF5")}</li>
                <li>{t("servicesPage.ladderF6")}</li>
              </ul>
              <Link href="/contact" className="btn-primary">{t("servicesPage.getQuote")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL: RAILINGS */}
      <section className="section service-detail service-detail--alt" id="railings">
        <div className="container">
          <div className="service-detail-grid service-detail-grid--reverse">
            <div className="service-detail-img">
              <div className="detail-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/railings.png" alt="Railings" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="service-badge">04</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 04</span>
              <h2>{t("servicesPage.railingTitle")}</h2>
              <p className="service-lead">{t("servicesPage.railingLead")}</p>
              <p>{t("servicesPage.railingDesc")}</p>
              <ul className="service-features">
                <li>{t("servicesPage.railingF1")}</li>
                <li>{t("servicesPage.railingF2")}</li>
                <li>{t("servicesPage.railingF3")}</li>
                <li>{t("servicesPage.railingF4")}</li>
                <li>{t("servicesPage.railingF5")}</li>
                <li>{t("servicesPage.railingF6")}</li>
              </ul>
              <Link href="/contact" className="btn-primary">{t("servicesPage.getQuote")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL: CUSTOM WORKS */}
      <section className="section service-detail" id="custom">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-img">
              <div className="detail-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/custom.png" alt="Custom Metal Works" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="service-badge">05</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 05</span>
              <h2>{t("servicesPage.customTitle")}</h2>
              <p className="service-lead">{t("servicesPage.customLead")}</p>
              <p>{t("servicesPage.customDesc")}</p>
              <ul className="service-features">
                <li>{t("servicesPage.customF1")}</li>
                <li>{t("servicesPage.customF2")}</li>
                <li>{t("servicesPage.customF3")}</li>
                <li>{t("servicesPage.customF4")}</li>
                <li>{t("servicesPage.customF5")}</li>
                <li>{t("servicesPage.customF6")}</li>
              </ul>
              <Link href="/contact" className="btn-primary">{t("servicesPage.getQuote")}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="container">
          <SectionHeader
            label={t("servicesPage.processLabel")}
            titleStart={t("servicesPage.processTitleStart")}
            titleEm={t("servicesPage.processTitleEm")}
          />
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-icon">📞</div>
              <h3>{t("servicesPage.step1Title")}</h3>
              <p>{t("servicesPage.step1Desc")}</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-icon">📐</div>
              <h3>{t("servicesPage.step2Title")}</h3>
              <p>{t("servicesPage.step2Desc")}</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-icon">⚙️</div>
              <h3>{t("servicesPage.step3Title")}</h3>
              <p>{t("servicesPage.step3Desc")}</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-icon">🏠</div>
              <h3>{t("servicesPage.step4Title")}</h3>
              <p>{t("servicesPage.step4Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner
        titleKey="servicesPage.ctaTitle"
        descKey="servicesPage.ctaDesc"
        primaryButtonTextKey="servicesPage.ctaBtn"
      />
    </main>
  );
}
