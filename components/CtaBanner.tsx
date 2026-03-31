"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/LanguageContext";

interface CtaBannerProps {
  titleKey?: string;
  descKey?: string;
  primaryButtonTextKey?: string;
  primaryButtonLink?: string;
  phoneKey?: string;
  phoneLink?: string;
}

export default function CtaBanner({
  titleKey = "cta.title",
  descKey = "cta.desc",
  primaryButtonTextKey = "cta.btnQuote",
  primaryButtonLink = "/contact",
  phoneKey = "cta.btnCall",
  phoneLink = "tel:+919999999999",
}: CtaBannerProps) {
  const { t } = useTranslation();
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>{t(titleKey)}</h2>
            <p>{t(descKey)}</p>
          </div>
          <div className="cta-actions">
            <Link href={primaryButtonLink} className="btn-primary btn-lg">
              {t(primaryButtonTextKey)}
            </Link>
            <a href={phoneLink} className="btn-phone">
              📞 {t(phoneKey)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
