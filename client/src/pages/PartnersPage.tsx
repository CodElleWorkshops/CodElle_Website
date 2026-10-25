// Already finished: this is the page our sponsorship team sends to companies.
import { Link } from "react-router-dom";
import Window from "../components/Window";
import { currentPartners, offers, partnerPitch } from "../data/partners";
import { site } from "../data/site";

export default function PartnersPage() {
  return (
    <>
      <p className="eyebrow">For companies &amp; organisations</p>
      <h1 className="page-title">Partner with CodElle</h1>
      <p className="lead">{partnerPitch}</p>

      <div className="grid section">
        {offers.map((offer) => (
          <Window key={offer.title} label={offer.label} title={offer.title}>
            <p>{offer.description}</p>
            <ul className="checklist">
              {offer.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Window>
        ))}
      </div>

      {currentPartners.length > 0 && (
        <section className="section">
          <h2 className="section-title">Our partners</h2>
          <div className="partner-list">
            {currentPartners.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
            ))}
          </div>
        </section>
      )}

      <section className="band">
        <div>
          <h2>Let's talk</h2>
          <p>
            Email our sponsorship team at <a href={`mailto:${site.email}`}>{site.email}</a> or send
            us a message and we'll get back to you within a few days.
          </p>
        </div>
        <Link to="/contact" className="button button-light">Contact us</Link>
      </section>
    </>
  );
}
