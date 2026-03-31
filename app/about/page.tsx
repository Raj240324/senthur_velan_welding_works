import PageHero from "@/components/PageHero";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sri Senthur Velan Welding Works",
  description: "Learn about Sri Senthur Velan Welding Works — our story, values, and commitment to quality metal fabrication in Sernthamaram and Surandai.",
};

export default function About() {
  return (
    <main>
      <PageHero
        label="Our Story"
        titleLight="About"
        titleBold="Us"
        description="A local welding workshop built on skill, honesty, and community trust."
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
              <span className="section-label">Who We Are</span>
              <h2>
                Sri Senthur Velan<br />
                <em>Welding Works</em>
              </h2>
              <p className="lead-text">
                We are a local fabrication workshop proudly serving the communities of Sernthamaram, Surandai, and the surrounding villages with expert metalwork at fair prices.
              </p>
              <p>
                Sri Senthur Velan Welding Works was founded with one simple goal: to provide high-quality metal fabrication to local families and businesses without overcharging them. Over the years, we have grown into one of the most trusted welding shops in this area — known for our clean welds, accurate measurements, timely delivery, and honest dealings.
              </p>
              <p>
                We handle every project personally, from taking the first measurement to completing the final installation. Whether it&apos;s a simple window grill or a large compound gate, we give every job the same level of attention and craftsmanship.
              </p>
              <div className="about-highlights">
                <div className="highlight">
                  <span className="hl-num">500+</span>
                  <span className="hl-label">Projects Completed</span>
                </div>
                <div className="highlight">
                  <span className="hl-num">10+</span>
                  <span className="hl-label">Years in Business</span>
                </div>
                <div className="highlight">
                  <span className="hl-num">2</span>
                  <span className="hl-label">Towns Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeader label="What We Stand For" titleStart="Our" titleEm="Values" />
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔩</div>
              <h3>Quality First</h3>
              <p>We never compromise on the quality of materials or workmanship. Every joint is welded strong and every surface is finished with care.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>Fair Pricing</h3>
              <p>Our prices are transparent and affordable. We believe everyone deserves good metalwork, not just those who can overpay for it.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Honest Dealing</h3>
              <p>No hidden charges. No false promises. We quote what we charge and deliver what we promise — every single time.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏰</div>
              <h3>On-Time Delivery</h3>
              <p>We respect your time and commitments. We work to complete and install on the schedule we&apos;ve agreed upon.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏘️</div>
              <h3>Community Focused</h3>
              <p>We are part of this community. We serve our neighbors and take pride in seeing our work in homes across the area.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✏️</div>
              <h3>Custom Solutions</h3>
              <p>Every home and customer is different. We listen carefully and create solutions that fit your specific needs and space.</p>
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
              <span className="section-label">The Craftsman</span>
              <h2>
                Meet the <em>Owner</em>
              </h2>
              <p className="lead-text">
                &quot;I started this workshop to bring quality metalwork to our own community. Every gate I build, every railing I weld — I build it like it&apos;s going in my own home.&quot;
              </p>
              <p>
                The founder of Sri Senthur Velan Welding Works is a skilled and experienced welder who has dedicated his career to the craft. Starting out as an apprentice and learning every aspect of metal fabrication, he established this workshop to serve the local community with the same dedication he would give his own family.
              </p>
              <p>
                His passion for precision and his reputation for honest business have made Sri Senthur Velan Welding Works a household name in Sernthamaram and Surandai.
              </p>
              <div className="owner-name">
                <strong>— Owner & Master Welder</strong>
                <span>Sri Senthur Velan Welding Works</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section workshop-section">
        <div className="container">
          <SectionHeader label="Behind the Scenes" titleStart="Our" titleEm="Workshop" />
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
            label="Where We Serve"
            titleStart="Service"
            titleEm="Area"
            description="We primarily serve Sernthamaram, Surandai, and the surrounding villages and towns. Call us to confirm if we cover your location."
          />
          <div className="area-cards">
            <div className="area-card area-primary">
              <div className="area-icon">📍</div>
              <h3>Sernthamaram</h3>
              <p>Primary service area. Full services available including on-site measurement and installation.</p>
            </div>
            <div className="area-card area-primary">
              <div className="area-icon">📍</div>
              <h3>Surandai</h3>
              <p>Primary service area. Full services available including on-site measurement and installation.</p>
            </div>
            <div className="area-card">
              <div className="area-icon">📍</div>
              <h3>Nearby Villages</h3>
              <p>We also serve surrounding villages and towns. Call us to check availability for your area.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Work With Us?"
        description="Contact us today for a free site visit and estimate."
        primaryButtonText="Contact Us"
      />
    </main>
  );
}
