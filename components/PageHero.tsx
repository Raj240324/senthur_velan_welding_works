interface PageHeroProps {
  label: string;
  titleLight: string;
  titleBold: string;
  description: string;
}

export default function PageHero({
  label,
  titleLight,
  titleBold,
  description,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg"></div>
      <div className="container">
        <div className="page-hero-content">
          <span className="section-label">{label}</span>
          <h1>
            {titleLight} <em>{titleBold}</em>
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
