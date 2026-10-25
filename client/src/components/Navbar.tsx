import { NavLink } from "react-router-dom";
import { site } from "../data/site";

const links = [
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/events", label: "Events" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          <img src="/logo.png" alt="" width={40} height={40} />
          <span>{site.name}</span>
        </NavLink>
        <nav>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav-link">
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
