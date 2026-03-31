import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import HeroScrollAnimation from "@/components/HeroScrollAnimation";

export default function Home() {
  return (
    <main>
      {/* HERO SCROLL ANIMATION */}
      <HeroScrollAnimation frameCount={240}>
        <div className="hero-overlay"></div>
        <div className="hero" style={{ height: '100%', width: '100%', pointerEvents: 'none', background: 'transparent' }}>
          <div className="hero-content" style={{ pointerEvents: 'auto' }}>
            <div className="hero-badge">Est. — Sernthamaram & Surandai</div>
            <h1 className="hero-title">
              <span className="line1">CRAFTED IN</span>
              <span className="line2">STEEL.</span>
              <span className="line3">BUILT TO LAST.</span>
            </h1>
            <p className="hero-desc">
              Expert welding & fabrication for gates, railings, ladders and custom metalwork — quality workmanship at prices that make sense.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link href="/services" className="btn-outline">
                Our Services
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">500+</span>
                <span className="stat-label">Projects Done</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </HeroScrollAnimation>

      {/* MARQUEE STRIP */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>Grill Gates</span>
          <span className="dot">◆</span>
          <span>House Gates</span>
          <span className="dot">◆</span>
          <span>Steel Ladders</span>
          <span className="dot">◆</span>
          <span>Railings</span>
          <span className="dot">◆</span>
          <span>Custom Metal Work</span>
          <span className="dot">◆</span>
          <span>Window Grills</span>
          <span className="dot">◆</span>
          <span>Compound Gates</span>
          <span className="dot">◆</span>
          <span>Staircase Railings</span>
          <span className="dot">◆</span>
          <span>Grill Gates</span>
          <span className="dot">◆</span>
          <span>House Gates</span>
          <span className="dot">◆</span>
          <span>Steel Ladders</span>
          <span className="dot">◆</span>
          <span>Railings</span>
          <span className="dot">◆</span>
          <span>Custom Metal Work</span>
          <span className="dot">◆</span>
          <span>Window Grills</span>
          <span className="dot">◆</span>
          <span>Compound Gates</span>
          <span className="dot">◆</span>
          <span>Staircase Railings</span>
          <span className="dot">◆</span>
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="section services-preview">
        <div className="container">
          <SectionHeader
            label="What We Do"
            titleStart="Our"
            titleEm="Fabrication"
            titleEnd="Services"
            description="From decorative grillwork to heavy-duty gates — we fabricate and install with precision."
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
                <h3>Grill Gates</h3>
                <p>Decorative and security grill gates for homes and commercial spaces. Custom designs available.</p>
                <span className="service-link">View Details →</span>
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
                <h3>House Gates</h3>
                <p>Strong, stylish entrance gates for houses and compounds. Both sliding and swinging styles.</p>
                <span className="service-link">View Details →</span>
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
                <h3>Steel Ladders</h3>
                <p>Fixed and folding steel ladders for rooftop access, lofts, and industrial use.</p>
                <span className="service-link">View Details →</span>
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
                <h3>Railings</h3>
                <p>Safety and decorative railings for stairs, balconies, terraces, and corridors.</p>
                <span className="service-link">View Details →</span>
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
                <h3>Custom Metal Works</h3>
                <p>Any custom fabrication project — shelves, stands, frames, window grills, or unique structures.</p>
                <span className="service-link">View Details →</span>
              </div>
            </Link>

            <Link href="/services" className="service-card service-card--cta">
              <div className="service-cta-inner">
                <span className="cta-big-icon">→</span>
                <h3>See All Services</h3>
                <p>Explore our full range of metal fabrication offerings.</p>
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
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">
                Quality Work.<br />
                <em>Honest Prices.</em>
              </h2>
              <p>
                Sri Senthur Velan Welding Works has built a strong reputation across Sernthamaram, Surandai and nearby villages for delivering durable metalwork that combines craftsmanship with affordability.
              </p>
              <Link href="/about" className="btn-primary" style={{ marginTop: "2rem" }}>
                Learn About Us
              </Link>
            </div>
            <div className="why-right">
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>Skilled Craftsmanship</h4>
                  <p>Every weld and cut is done with care and experience — no shortcuts, no compromise on strength.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>Affordable Pricing</h4>
                  <p>We believe quality metalwork shouldn&apos;t break your budget. Transparent quotes with no hidden charges.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>Custom Designs</h4>
                  <p>Have a design in mind? We bring your ideas to life with custom fabrication tailored to your space.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>On-Site Installation</h4>
                  <p>We don&apos;t just fabricate — we deliver and install, ensuring a perfect fit every time.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">✦</div>
                <div>
                  <h4>Local & Trusted</h4>
                  <p>Proudly serving Sernthamaram, Surandai and surrounding areas with a name you can trust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section gallery-preview">
        <div className="container">
          <SectionHeader label="Our Work" titleStart="Recent" titleEm="Projects" />
          <div className="gallery-grid">
            <div className="gallery-item gi-large">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/house-gate.png" alt="House Gate" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>House Gate — Surandai</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/grill-gate.png" alt="Window Grill" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>Window Grill</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/railings.png" alt="Staircase Railing" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>Staircase Railing</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/ladder.png" alt="Steel Ladder" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>Steel Ladder</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder" style={{ position: "relative", width: "100%", height: "100%", background: "none" }}>
                <Image src="/images/custom.png" alt="Compound Gate" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="gallery-overlay">
                <span>Compound Gate</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials">
        <div className="container">
          <SectionHeader label="Client Words" titleStart="What People" titleEm="Say" />
          <div className="testimonials-grid">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>&quot;Excellent work! The house gate they made for us is very strong and looks beautiful. The price was very reasonable compared to others.&quot;</p>
              <div className="testi-author">
                <div className="testi-avatar">M</div>
                <div>
                  <strong>Murugesan</strong>
                  <span>Surandai</span>
                </div>
              </div>
            </div>
            <div className="testi-card testi-card--featured">
              <div className="testi-stars">★★★★★</div>
              <p>&quot;I got my staircase railings and window grills done. Very neat finish, on-time delivery and they installed everything perfectly. Highly recommended!&quot;</p>
              <div className="testi-author">
                <div className="testi-avatar">P</div>
                <div>
                  <strong>Priya</strong>
                  <span>Sernthamaram</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>&quot;Got a custom metal shelf and ladder for my shop. Good quality steel, solid welding. Will come back for more work.&quot;</p>
              <div className="testi-author">
                <div className="testi-avatar">R</div>
                <div>
                  <strong>Rajendran</strong>
                  <span>Nearby Village</span>
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
