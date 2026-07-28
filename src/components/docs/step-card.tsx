export type StepCardProps = {
  step: number;
  title: string;
  description: string;
};

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <section className="docs-card docs-step-card">
      <span className="docs-step-number" aria-label={`Step ${step}`}>
        {step}
      </span>
      <div className="docs-card-content">
        <p className="docs-step-label">Step {step}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}
