import React from "react";

interface SectionHeaderProps {
  label: string;
  titleStart: string;
  titleEm?: string;
  titleEnd?: string;
  description?: string;
}

export default function SectionHeader({
  label,
  titleStart,
  titleEm,
  titleEnd,
  description,
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-label">{label}</span>
      <h2 className="section-title">
        {titleStart} {titleEm && <em>{titleEm}</em>} {titleEnd}
      </h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
