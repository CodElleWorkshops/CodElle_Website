// ✅ This page is already finished — read it as an EXAMPLE before you start your missions!
// It shows: components, props, importing data, and rendering a list with .map()

import { Link } from "react-router-dom";
import Card from "../components/Card";
import { highlights, site } from "../data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">✨ student association ✨</p>
        <h1 className="hero-title">{site.name}</h1>
        <p className="hero-tagline">{site.tagline}</p>
        <p className="hero-intro">{site.intro}</p>
        <div className="button-row">
          <Link to="/events" className="button">See our events 🎀</Link>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="button button-outline">
            Follow us on Instagram
          </a>
        </div>
      </section>

      <section>
        <h2 className="section-title">Why join CodElle?</h2>
        <div className="grid">
          {highlights.map((item) => (
            <Card key={item.title} emoji={item.emoji} title={item.title}>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
