import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with 💖 by the {site.name} workshop ·{" "}
        <a href={site.instagramUrl} target="_blank" rel="noreferrer">
          {site.instagramHandle}
        </a>
      </p>
    </footer>
  );
}
