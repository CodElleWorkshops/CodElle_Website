// This page is already finished. Read it as an EXAMPLE before you start your missions:
// it shows components, props, importing data, and rendering a list with .map()

import { Link } from "react-router-dom";
import Window from "../components/Window";
import { highlights, site } from "../data/site";
import { contributors } from "../data/contributor";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">{site.school}</p>
          <h1>
            Code is for <span className="highlight">everyone</span>.
            <br />
            We make sure of it.
          </h1>
          <p className="lead">{site.intro}</p>
          <div className="button-row">
            <Link to="/events" className="button">Upcoming workshops</Link>
            <Link to="/partners" className="button button-outline">Partner with us</Link>
          </div>
        </div>
        <img className="hero-logo" src="/logo.png" alt="CodElle logo" />
      </section>

      <section className="section">
        <h2 className="section-title">What we do</h2>
        <div className="grid">
          {highlights.map((item) => (
            <Window key={item.title} label={item.label} title={item.title}>
              <p>{item.text}</p>
            </Window>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Built by our members</h2>
        <p className="lead">This website was designed and built by CodElle members during our workshops.</p>
        <ul className="contributors">
          {contributors.map((person) => (
            <li key={person.name}>
              {person.linkedin ? (
                <a href={person.linkedin} target="_blank" rel="noreferrer">{person.name}</a>
              ) : (
                person.name
              )}
              <span className="muted"> · {person.program}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="band">
        <div>
          <h2>Looking for a new website?</h2>
          <p>
            Our members built this site. They can build yours too, and your support helps us run
            free workshops for students.
          </p>
        </div>
        <Link to="/partners" className="button button-light">See how to partner</Link>
      </section>
    </>
  );
}
