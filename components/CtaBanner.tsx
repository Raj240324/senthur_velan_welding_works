import Link from "next/link";

interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  phone?: string;
  phoneLink?: string;
}

export default function CtaBanner({
  title = "Ready to Start Your Project?",
  description = "Get a free estimate today. We serve Sernthamaram, Surandai & surrounding areas.",
  primaryButtonText = "Get Free Quote",
  primaryButtonLink = "/contact",
  phone = "Call Now",
  phoneLink = "tel:+919999999999",
}: CtaBannerProps) {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="cta-actions">
            <Link href={primaryButtonLink} className="btn-primary btn-lg">
              {primaryButtonText}
            </Link>
            <a href={phoneLink} className="btn-phone">
              📞 {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
