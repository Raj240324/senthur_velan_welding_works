"use client";

import PageHero from "@/components/PageHero";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import { useTranslation } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useTranslation();
  return (
    <main>
      <PageHero
        label={t("aboutPage.heroLabel")}
        titleLight={t("aboutPage.heroTitleLight")}
        titleBold={t("aboutPage.heroTitleBold")}
        description={t("aboutPage.heroDesc")}
      />

      <section className="section about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-img">
              <div className="detail-img-placeholder big" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/hero.png" alt="Sri Senthur Velan Workshop" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="about-intro-content">
              <span className="section-label">{t("aboutPage.whoWeAre")}</span>
              <h2>
                Sri Senthur Velan<br />
                <em>Welding Works</em>
              </h2>
              <p className="lead-text">{t("aboutPage.introLead")}</p>
              <p>{t("aboutPage.introP1")}</p>
              <p>{t("aboutPage.introP2")}</p>
              <div className="about-highlights">
                <div className="highlight">
                  <span className="hl-num">500+</span>
                  <span className="hl-label">{t("aboutPage.projectsCompleted")}</span>
                </div>
                <div className="highlight">
                  <span className="hl-num">10+</span>
                  <span className="hl-label">{t("aboutPage.yearsInBusiness")}</span>
                </div>
                <div className="highlight">
                  <span className="hl-num">2</span>
                  <span className="hl-label">{t("aboutPage.townsServed")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeader label={t("aboutPage.valuesLabel")} titleStart={t("aboutPage.valuesTitleStart")} titleEm={t("aboutPage.valuesTitleEm")} />
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔩</div>
              <h3>{t("aboutPage.v1Title")}</h3>
              <p>{t("aboutPage.v1Desc")}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>{t("aboutPage.v2Title")}</h3>
              <p>{t("aboutPage.v2Desc")}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>{t("aboutPage.v3Title")}</h3>
              <p>{t("aboutPage.v3Desc")}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏰</div>
              <h3>{t("aboutPage.v4Title")}</h3>
              <p>{t("aboutPage.v4Desc")}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏘️</div>
              <h3>{t("aboutPage.v5Title")}</h3>
              <p>{t("aboutPage.v5Desc")}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✏️</div>
              <h3>{t("aboutPage.v6Title")}</h3>
              <p>{t("aboutPage.v6Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section owner-section">
        <div className="container">
          <div className="owner-grid">
            <div className="owner-img">
              <div className="detail-img-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/hero.png" alt="Workshop Owner" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="owner-content">
              <span className="section-label">{t("aboutPage.ownerLabel")}</span>
              <h2>
                {t("aboutPage.ownerTitle")} <em>{t("aboutPage.ownerTitleEm")}</em>
              </h2>
              <p className="lead-text">{t("aboutPage.ownerQuote")}</p>
              <p>{t("aboutPage.ownerBio")}</p>
              <p>{t("aboutPage.ownerReputation")}</p>
              <div className="owner-name">
                <strong>{t("aboutPage.ownerName")}</strong>
                <span>Sri Senthur Velan Welding Works</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section workshop-section">
        <div className="container">
          <SectionHeader label={t("aboutPage.workshopLabel")} titleStart={t("aboutPage.workshopTitleStart")} titleEm={t("aboutPage.workshopTitleEm")} />
          <div className="workshop-grid">
            <div className="ws-item ws-large">
              <div className="ws-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/custom.png" alt="Workshop Overview" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="ws-item">
              <div className="ws-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/hero.png" alt="Welding in Progress" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="ws-item">
              <div className="ws-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/custom.png" alt="Workshop Equipment" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="ws-item">
              <div className="ws-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/ladder.png" alt="Our Team" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-area">
        <div className="container">
          <SectionHeader
            label={t("aboutPage.areaLabel")}
            titleStart={t("aboutPage.areaTitleStart")}
            titleEm={t("aboutPage.areaTitleEm")}
            description={t("aboutPage.areaDesc")}
          />
          <div className="area-cards">
            <div className="area-card area-primary">
              <div className="area-icon">📍</div>
              <h3>{t("aboutPage.areaSernthamaram")}</h3>
              <p>{t("aboutPage.areaSernthamaramDesc")}</p>
            </div>
            <div className="area-card area-primary">
              <div className="area-icon">📍</div>
              <h3>{t("aboutPage.areaSurandai")}</h3>
              <p>{t("aboutPage.areaSurandaiDesc")}</p>
            </div>
            <div className="area-card">
              <div className="area-icon">📍</div>
              <h3>{t("aboutPage.areaNearby")}</h3>
              <p>{t("aboutPage.areaNearbyDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        titleKey="aboutPage.ctaTitle"
        descKey="aboutPage.ctaDesc"
        primaryButtonTextKey="aboutPage.ctaBtn"
      />
    </main>
  );
}
