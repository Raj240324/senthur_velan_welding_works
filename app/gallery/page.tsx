"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

const galleryItems = [
  // GATES
  { id: 1, category: "gates", title: "House Gate", location: "Surandai", imageType: "House gate", classes: "" },
  { id: 2, category: "gates", title: "Compound Gate", location: "Sernthamaram", imageType: "Compound gate", classes: "" },
  { id: 3, category: "gates", title: "Double Door Gate", location: "Nearby Village", imageType: "Double door gate", classes: "gal-wide" },
  { id: 4, category: "gates", title: "Sliding Gate", location: "Surandai", imageType: "Sliding gate", classes: "" },
  // GRILLS
  { id: 5, category: "grills", title: "Window Grill", location: "Sernthamaram", imageType: "Window grill", classes: "" },
  { id: 6, category: "grills", title: "Door Grill", location: "Surandai", imageType: "Door grill", classes: "gal-tall" },
  { id: 7, category: "grills", title: "Decorative Grill", location: "Nearby Area", imageType: "Decorative grill", classes: "" },
  // RAILINGS
  { id: 8, category: "railings", title: "Staircase Railing", location: "Surandai", imageType: "Staircase railing", classes: "" },
  { id: 9, category: "railings", title: "Balcony Railing", location: "Sernthamaram", imageType: "Balcony railing", classes: "gal-wide" },
  { id: 10, category: "railings", title: "Terrace Railing", location: "Nearby Area", imageType: "Terrace railing", classes: "" },
  // LADDERS
  { id: 11, category: "ladders", title: "Rooftop Ladder", location: "Surandai", imageType: "Rooftop ladder", classes: "" },
  { id: 12, category: "ladders", title: "Loft Access Ladder", location: "Sernthamaram", imageType: "Loft ladder", classes: "" },
  // CUSTOM
  { id: 13, category: "custom", title: "Metal Shelving", location: "Shop, Surandai", imageType: "Metal shelf", classes: "" },
  { id: 14, category: "custom", title: "Display Stand", location: "Nearby Town", imageType: "Custom stand", classes: "gal-tall" },
  { id: 15, category: "custom", title: "Steel Frame Structure", location: "Sernthamaram", imageType: "Custom frame", classes: "" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  return (
    <main>
      <PageHero
        label="Our Work in Photos"
        titleLight="Project"
        titleBold="Gallery"
        description="Browse completed projects — gates, railings, grills, ladders & custom metalwork."
      />

      <section className="section gallery-full">
        <div className="container">
          <div className="gallery-filters">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${filter === "gates" ? "active" : ""}`}
              onClick={() => setFilter("gates")}
            >
              House Gates
            </button>
            <button
              className={`filter-btn ${filter === "grills" ? "active" : ""}`}
              onClick={() => setFilter("grills")}
            >
              Grill Gates
            </button>
            <button
              className={`filter-btn ${filter === "railings" ? "active" : ""}`}
              onClick={() => setFilter("railings")}
            >
              Railings
            </button>
            <button
              className={`filter-btn ${filter === "ladders" ? "active" : ""}`}
              onClick={() => setFilter("ladders")}
            >
              Ladders
            </button>
            <button
              className={`filter-btn ${filter === "custom" ? "active" : ""}`}
              onClick={() => setFilter("custom")}
            >
              Custom Work
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
                    <div className="gal-placeholder">
                      <span>📷</span>
                      <small>{item.imageType} photo</small>
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

      <CtaBanner
        title="Like What You See?"
        description="Let us build something like this for your home or business."
      />
    </main>
  );
}
