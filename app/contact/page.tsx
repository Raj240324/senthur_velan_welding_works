"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name_field.value.trim();
    const phone = form.phone_field.value.trim();
    const service = form.service_field.value.trim();

    let valid = true;
    if (!name) {
      form.name_field.style.borderColor = "#c04020";
      valid = false;
    } else {
      form.name_field.style.borderColor = "";
    }
    
    if (!phone) {
      form.phone_field.style.borderColor = "#c04020";
      valid = false;
    } else {
      form.phone_field.style.borderColor = "";
    }
    
    if (!service) {
      form.service_field.style.borderColor = "#c04020";
      valid = false;
    } else {
      form.service_field.style.borderColor = "";
    }

    if (valid) {
      setIsSuccess(true);
      // Backend submission would happen here
    }
  };

  return (
    <main>
      <PageHero
        label="Reach Out"
        titleLight="Contact"
        titleBold="Us"
        description="Get a free quote or ask us anything. We're always happy to help."
      />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* CONTACT INFO */}
            <div className="contact-info">
              <span className="section-label">Get In Touch</span>
              <h2>
                Let&apos;s Talk About<br />
                <em>Your Project</em>
              </h2>
              <p>
                Have a project in mind? Call us, WhatsApp us, or fill in the form and we&apos;ll get back to you with a free estimate. No obligations, no pressure.
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="cc-icon">📞</div>
                  <div className="cc-content">
                    <h4>Phone / WhatsApp</h4>
                    <a href="tel:+919999999999">+91 99999 99999</a>
                    <span>Call or WhatsApp us anytime (Mon–Sat)</span>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="cc-icon">✉</div>
                  <div className="cc-content">
                    <h4>Email</h4>
                    <a href="mailto:info@senthurvelan.com">info@senthurvelan.com</a>
                    <span>We&apos;ll reply within 24 hours</span>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="cc-icon">📍</div>
                  <div className="cc-content">
                    <h4>Location</h4>
                    <span>Sernthamaram & Surandai Area</span>
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="cc-icon">🕐</div>
                  <div className="cc-content">
                    <h4>Working Hours</h4>
                    <span>Monday – Saturday: 8:00 AM – 7:00 PM</span>
                    <span>Sunday: Closed</span>
                  </div>
                </div>
              </div>

              <div className="whatsapp-cta">
                <a
                  href="https://wa.me/919999999999?text=Hello%20Sri%20Senthur%20Velan%20Welding%20Works%2C%20I%20need%20a%20quote%20for..."
                  className="btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* QUOTE FORM */}
            <div className="contact-form-wrap">
              <div className="form-card">
                {!isSuccess ? (
                  <>
                    <h3>Get a Free Quote</h3>
                    <p>Fill in the details below and we&apos;ll contact you with a free estimate.</p>
                    <form className="quote-form" id="quoteForm" noValidate onSubmit={handleFormSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name_field">Your Name *</label>
                          <input type="text" id="name_field" name="name_field" placeholder="e.g. Murugesan" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone_field">Phone Number *</label>
                          <input type="tel" id="phone_field" name="phone_field" placeholder="+91 98765 43210" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="location_field">Your Location</label>
                        <input type="text" id="location_field" name="location_field" placeholder="e.g. Surandai, Sernthamaram" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="service_field">Service Required *</label>
                        <select id="service_field" name="service_field" required defaultValue="">
                          <option value="" disabled>Select a service</option>
                          <option value="grill-gates">Grill Gates</option>
                          <option value="house-gates">House Gates / Compound Gates</option>
                          <option value="ladders">Steel Ladders</option>
                          <option value="railings">Railings (Staircase / Balcony)</option>
                          <option value="window-grills">Window Grills</option>
                          <option value="custom">Custom Metal Work</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="message_field">Tell Us More</label>
                        <textarea id="message_field" name="message_field" rows={4} placeholder="Describe your project — size, design preference, timeline, any special requirements..."></textarea>
                      </div>
                      <button type="submit" className="btn-primary btn-full">
                        Send Quote Request
                      </button>
                      <p className="form-note">We&apos;ll call you back within 24 hours. No spam, promise.</p>
                    </form>
                  </>
                ) : (
                  <div className="form-success" id="formSuccess">
                    <div className="success-icon">✓</div>
                    <h3>Message Sent!</h3>
                    <p>Thank you! We&apos;ve received your request and will call you back soon.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="section map-section">
        <div className="container">
          <SectionHeader label="Find Us" titleStart="Our" titleEm="Location" />
          <div className="map-wrap">
            <div className="map-placeholder">
              <div>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📍</div>
                <h3>Sernthamaram & Surandai Area</h3>
                <p>Tamil Nadu, India</p>
                <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>
                  Replace this section with an embedded Google Map of your workshop location.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="btn-outline"
                  rel="noopener noreferrer"
                  style={{ marginTop: "1.5rem", display: "inline-block" }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <SectionHeader label="Common Questions" titleStart="Frequently Asked" titleEm="Questions" />
          <div className="faq-list">
            {[
              { q: "Do you offer free estimates?", a: "Yes! We offer free site visits and estimates. Just call or WhatsApp us with your requirements and we'll arrange a convenient time to visit and measure." },
              { q: "How long does fabrication take?", a: "Depending on the job, most standard items like gates and grills are ready within 3–7 working days after measurement and confirmation. Larger or more complex projects may take longer — we'll give you a clear timeline upfront." },
              { q: "Do you do on-site installation?", a: "Yes! We handle complete delivery and installation. Our team will ensure everything is properly fitted and secure at your location." },
              { q: "Can I provide my own design?", a: "Absolutely! If you have a design in mind — whether it's a sketch, a photo reference, or a specific idea — we'll work with you to bring it to life. Custom designs are welcome." },
              { q: "What areas do you serve?", a: "We primarily serve Sernthamaram, Surandai, and the nearby villages and towns. Call us with your location and we'll confirm whether we can reach you." },
              { q: "What types of metal do you use?", a: "We primarily work with mild steel (MS) for most standard fabrication. We also work with square hollow section (SHS), round pipe, flat bar, and can accommodate stainless steel (SS) options for premium requirements." },
            ].map((item, i) => (
              <div key={i} className={`faq-item ${openFaqIndex === i ? "open" : ""}`}>
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  {item.q} <span className="faq-arrow">+</span>
                </button>
                <div
                  className="faq-answer"
                  style={{ maxHeight: openFaqIndex === i ? "500px" : "0" }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
