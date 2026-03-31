"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { useTranslation } from "@/i18n/LanguageContext";

const galleryItems = [
  // GATES
  { id: 1, category: "gates", title: "House Gate", location: "Surandai", imageType: "House gate", classes: "", image: "/images/house-gate.png" },
  { id: 2, category: "gates", title: "Compound Gate", location: "Sernthamaram", imageType: "Compound gate", classes: "", image: "/images/house-gate.png" },
  { id: 3, category: "gates", title: "Double Door Gate", location: "Nearby Village", imageType: "Double door gate", classes: "gal-wide", image: "/images/house-gate.png" },
  { id: 4, category: "gates", title: "Sliding Gate", location: "Surandai", imageType: "Sliding gate", classes: "", image: "/images/house-gate.png" },
  // GRILLS
  { id: 5, category: "grills", title: "Window Grill", location: "Sernthamaram", imageType: "Window grill", classes: "", image: "/images/grill-gate.png" },
  { id: 6, category: "grills", title: "Door Grill", location: "Surandai", imageType: "Door grill", classes: "gal-tall", image: "/images/grill-gate.png" },
  { id: 7, category: "grills", title: "Decorative Grill", location: "Nearby Area", imageType: "Decorative grill", classes: "", image: "/images/grill-gate.png" },
  // RAILINGS
  { id: 8, category: "railings", title: "Staircase Railing", location: "Surandai", imageType: "Staircase railing", classes: "", image: "/images/railings.png" },
  { id: 9, category: "railings", title: "Balcony Railing", location: "Sernthamaram", imageType: "Balcony railing", classes: "gal-wide", image: "/images/railings.png" },
  { id: 10, category: "railings", title: "Terrace Railing", location: "Nearby Area", imageType: "Terrace railing", classes: "", image: "/images/railings.png" },
  // LADDERS
  { id: 11, category: "ladders", title: "Rooftop Ladder", location: "Surandai", imageType: "Rooftop ladder", classes: "", image: "/images/ladder.png" },
  { id: 12, category: "ladders", title: "Loft Access Ladder", location: "Sernthamaram", imageType: "Loft ladder", classes: "", image: "/images/ladder.png" },
  // CUSTOM
  { id: 13, category: "custom", title: "Metal Shelving", location: "Shop, Surandai", imageType: "Metal shelf", classes: "", image: "/images/custom.png" },
  { id: 14, category: "custom", title: "Display Stand", location: "Nearby Town", imageType: "Custom stand", classes: "gal-tall", image: "/images/custom.png" },
  { id: 15, category: "custom", title: "Steel Frame Structure", location: "Sernthamaram", imageType: "Custom frame", classes: "", image: "/images/custom.png" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const { t } = useTranslation();

  return (
    <main>
      <PageHero
        label={t("galleryPage.heroLabel")}
        titleLight={t("galleryPage.heroTitleLight")}
        titleBold={t("galleryPage.heroTitleBold")}
        description={t("galleryPage.heroDesc")}
      />

      <section className="section gallery-full">
        <div className="container">
          <div className="gallery-filters">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              {t("galleryPage.filterAll")}
            </button>
            <button
              className={`filter-btn ${filter === "gates" ? "active" : ""}`}
              onClick={() => setFilter("gates")}
            >
              {t("galleryPage.filterGates")}
            </button>
            <button
              className={`filter-btn ${filter === "grills" ? "active" : ""}`}
              onClick={() => setFilter("grills")}
            >
              {t("galleryPage.filterGrills")}
            </button>
            <button
              className={`filter-btn ${filter === "railings" ? "active" : ""}`}
              onClick={() => setFilter("railings")}
            >
              {t("galleryPage.filterRailings")}
            </button>
            <button
              className={`filter-btn ${filter === "ladders" ? "active" : ""}`}
              onClick={() => setFilter("ladders")}
            >
              {t("galleryPage.filterLadders")}
            </button>
            <button
              className={`filter-btn ${filter === "custom" ? "active" : ""}`}
              onClick={() => setFilter("custom")}
            >
              {t("galleryPage.filterCustom")}
            </button>
          </div>

          <div className="gallery-masonry" id="galleryGrid">
            {galleryItems.map((item) => {
              const isVisible = filter === "all" || item.category === filter;

              return (
                <div
                  key={item.id}
                  className={`gal-item ${item.classes} ${!isVisible ? "hidden" : ""}`}
                  data-cat={item.category}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.96)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <div className="gal-img-wrap">
                    <div className="gal-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                      <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                  <div className="gal-info">
                    <h4>{item.title}</h4>
                    <span>{item.location}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="gallery-note">
            <div className="note-icon">📸</div>
            <p>
              <strong>Note:</strong> Replace the placeholder boxes above with your actual project photos. Each box is ready to receive your image — just swap the placeholder div with an <code>&lt;img&gt;</code> tag.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
