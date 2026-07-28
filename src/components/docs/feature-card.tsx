import Link from "next/link";
import type { ReactNode } from "react";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
};

export function FeatureCard({
  title,
  description,
  icon,
  href,
}: FeatureCardProps) {
  const content = (
    <>
      {icon ? (
        <span className="docs-card-icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <div className="docs-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {href ? (
        <span className="docs-card-arrow" aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );

  return href ? (
    <Link className="docs-card docs-feature-card" href={href}>
      {content}
    </Link>
  ) : (
    <section className="docs-card docs-feature-card">{content}</section>
  );
}
