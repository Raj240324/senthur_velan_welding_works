import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CtaBanner from "@/components/CtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Sri Senthur Velan Welding Works",
  description: "Grill gates, house gates, steel ladders, railings and custom metal fabrication services by Sri Senthur Velan Welding Works.",
};

export default function Services() {
  return (
    <main>
      {/* PAGE HERO */}
      <PageHero
        label="What We Offer"
        titleLight="Our"
        titleBold="Services"
        description="Custom metal fabrication & welding services for homes, businesses, and beyond."
      />

      {/* SERVICE DETAIL: GRILL GATES */}
      <section className="section service-detail" id="grill-gates">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-img">
              <div className="detail-img-placeholder">
                <span>📷</span>
                <small>Add your grill gate photo here</small>
              </div>
              <div className="service-badge">01</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 01</span>
              <h2>Grill Gates</h2>
              <p className="service-lead">
                Secure your home with beautifully crafted grill gates. We design and fabricate grills that combine security with aesthetics.
              </p>
              <p>
                Whether you need simple iron bar grills or ornamental designs with patterns, we fabricate to your exact measurements and preferences. Our grill gates are built using quality MS (mild steel) with proper welding and finishing.
              </p>
              <ul className="service-features">
                <li>✦ MS and SS (stainless steel) options</li>
                <li>✦ Decorative and plain designs</li>
                <li>✦ Window grills, door grills, compound grills</li>
                <li>✦ Powder coated or painted finish</li>
                <li>✦ Custom measurements & patterns</li>
                <li>✦ On-site measurement & installation</li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL: HOUSE GATES */}
      <section className="section service-detail service-detail--alt" id="house-gates">
        <div className="container">
          <div className="service-detail-grid service-detail-grid--reverse">
            <div className="service-detail-img">
              <div className="detail-img-placeholder">
                <span>📷</span>
                <small>Add your house gate photo here</small>
              </div>
              <div className="service-badge">02</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 02</span>
              <h2>House Gates</h2>
              <p className="service-lead">
                Make a strong first impression with a well-crafted house gate. We build entrance gates that are both beautiful and durable.
              </p>
              <p>
                From simple single-leaf gates to grand double-door compound gates, we handle it all. Each gate is welded strong, finished well, and installed to stand the test of time and weather.
              </p>
              <ul className="service-features">
                <li>✦ Single and double-door gates</li>
                <li>✦ Sliding and swinging styles</li>
                <li>✦ Compound / main entrance gates</li>
                <li>✦ Traditional and modern designs</li>
                <li>✦ Durable anti-rust paint or powder coat</li>
                <li>✦ Heavy-duty hinges & locks fitted</li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL: LADDERS */}
      <section className="section service-detail" id="ladders">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-img">
              <div className="detail-img-placeholder">
                <span>📷</span>
                <small>Add your ladder photo here</small>
              </div>
              <div className="service-badge">03</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 03</span>
              <h2>Steel Ladders</h2>
              <p className="service-lead">
                Strong, safe, and long-lasting steel ladders for rooftop access, loft access, and industrial use — built to carry weight and withstand years of use.
              </p>
              <p>
                We fabricate fixed wall-mounted ladders as well as portable folding ladders. All ladders are built to safe dimensions with anti-slip steps and proper anchoring points.
              </p>
              <ul className="service-features">
                <li>✦ Fixed and portable ladder types</li>
                <li>✦ Rooftop access ladders</li>
                <li>✦ Loft / attic access ladders</li>
                <li>✦ Industrial & commercial ladders</li>
                <li>✦ Anti-slip step design</li>
                <li>✦ Custom height and width</li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL: RAILINGS */}
      <section className="section service-detail service-detail--alt" id="railings">
        <div className="container">
          <div className="service-detail-grid service-detail-grid--reverse">
            <div className="service-detail-img">
              <div className="detail-img-placeholder">
                <span>📷</span>
                <small>Add your railing photo here</small>
              </div>
              <div className="service-badge">04</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 04</span>
              <h2>Railings</h2>
              <p className="service-lead">
                Safety and style — our railings keep your family safe on stairs, balconies, and terraces while adding a polished look to your home.
              </p>
              <p>
                We fabricate railings for all types of stairways, open balconies, rooftop terraces, and corridors. Available in classic box-pipe style, decorative patterns, or modern minimalist designs.
              </p>
              <ul className="service-features">
                <li>✦ Staircase railings (indoor & outdoor)</li>
                <li>✦ Balcony and terrace railings</li>
                <li>✦ Corridor safety railings</li>
                <li>✦ Decorative and plain styles</li>
                <li>✦ MS pipe, flat bar, and square bar options</li>
                <li>✦ Painted or powder-coated finish</li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL: CUSTOM WORKS */}
      <section className="section service-detail" id="custom">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-img">
              <div className="detail-img-placeholder">
                <span>📷</span>
                <small>Add custom work photo here</small>
              </div>
              <div className="service-badge">05</div>
            </div>
            <div className="service-detail-content">
              <span className="section-label">Service 05</span>
              <h2>Custom Metal Works</h2>
              <p className="service-lead">
                Have a unique project or an idea in your head? We take on custom fabrication jobs of all kinds — if it&apos;s made of metal, we can build it.
              </p>
              <p>
                Our experience and equipment allow us to take on almost any metal fabrication project. From shop display stands to agricultural equipment frames, we work with you to deliver exactly what you need.
              </p>
              <ul className="service-features">
                <li>✦ Metal shelving & storage racks</li>
                <li>✦ Window & ventilation grills</li>
                <li>✦ Security bars & cage structures</li>
                <li>✦ Shop counters & display stands</li>
                <li>✦ Agricultural & utility frames</li>
                <li>✦ Welding repair works</li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="container">
          <SectionHeader
            label="How It Works"
            titleStart="Our Simple"
            titleEm="Process"
          />
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-icon">📞</div>
              <h3>Contact Us</h3>
              <p>Call or WhatsApp us with your requirements. Describe what you need, or send photos for reference.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-icon">📐</div>
              <h3>Site Visit & Measurement</h3>
              <p>We visit your location, take exact measurements, discuss design options, and give you a transparent quote.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-icon">⚙️</div>
              <h3>Fabrication</h3>
              <p>We fabricate your item in our workshop using quality materials and skilled welding.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-icon">🏠</div>
              <h3>Delivery & Install</h3>
              <p>We deliver and install at your site, ensuring everything fits perfectly and is properly secured.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner
        title="Need a Custom Quote?"
        description="Contact us with your requirements and get a free, no-obligation estimate."
        primaryButtonText="Contact Us"
      />
    </main>
  );
}
