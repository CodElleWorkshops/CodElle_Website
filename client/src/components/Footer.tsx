import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p className="muted">{site.tagline} · {site.school}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <Link to="/workshop">Workshop guide</Link>
        </div>
      </div>
      <p className="footer-note">Designed and built by CodElle members in React &amp; TypeScript.</p>
    </footer>
  );
}
