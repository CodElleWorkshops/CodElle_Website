// SOLUTION: Mission 1, About page
import Window from "../components/Window";
import { mission, values } from "../data/about";

interface ValueCardProps {
  title: string;
  description: string;
}

function ValueCard({ title, description }: ValueCardProps) {
  return (
    <Window label="value.tsx" title={title}>
      <p>{description}</p>
    </Window>
  );
}

export default function AboutPage() {
  return (
    <>
      <p className="eyebrow">Who we are</p>
      <h1 className="page-title">About CodElle</h1>
      <p className="lead">{mission}</p>

      <section className="section">
        <h2 className="section-title">What we believe in</h2>
        <div className="grid">
          {values.map((value) => (
            <ValueCard key={value.title} title={value.title} description={value.description} />
          ))}
        </div>
      </section>
    </>
  );
}
