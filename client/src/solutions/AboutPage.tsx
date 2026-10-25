// ✅ SOLUTION — Mission 1: About page
import { mission, values } from "../data/about";

interface ValueCardProps {
  emoji: string;
  title: string;
  description: string;
}

function ValueCard({ emoji, title, description }: ValueCardProps) {
  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">About CodElle</h1>
      <p className="page-subtitle">{mission}</p>

      <h2 className="section-title">Our values</h2>
      <div className="grid">
        {values.map((value) => (
          <ValueCard
            key={value.title}
            emoji={value.emoji}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </>
  );
}
