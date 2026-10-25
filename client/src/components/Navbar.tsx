import { NavLink } from "react-router-dom";
import { site } from "../data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
  { to: "/workshop", label: "🗺️ Workshop" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        {site.name} <span aria-hidden>💖</span>
      </NavLink>
      <nav>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end className="nav-link">
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
