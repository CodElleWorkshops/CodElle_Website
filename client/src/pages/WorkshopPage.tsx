// The workshop map: every mission and the concepts it teaches.
// Linked from the footer so it stays out of the way for visitors.

import { Link } from "react-router-dom";
import { showSolution } from "../workshop";

interface Mission {
  number: number;
  page: string;
  path: string;
  guide: string;
  concepts: string[];
  solved: boolean;
}

const missions: Mission[] = [
  { number: 1, page: "About", path: "/about", guide: "01-about-page.md", concepts: ["JSX", "Components", "Props", "Interfaces"], solved: showSolution.about },
  { number: 2, page: "Team", path: "/team", guide: "02-team-page.md", concepts: [".map()", "Keys", "Optional fields", "Conditional rendering"], solved: showSolution.team },
  { number: 3, page: "Events", path: "/events", guide: "03-events-page.md", concepts: ["useState", "useEffect", "fetch()", "Loading & errors"], solved: showSolution.events },
  { number: 4, page: "Contact", path: "/contact", guide: "04-contact-page.md", concepts: ["Forms", "Event types", "POST requests"], solved: showSolution.contact },
];

export default function WorkshopPage() {
  return (
    <>
      <p className="eyebrow">React &amp; TypeScript workshop</p>
      <h1 className="page-title">Workshop map</h1>
      <p className="lead">Complete the missions in order. Each one builds on the last.</p>
      <ol className="mission-list">
        {missions.map((m) => (
          <li key={m.number} className="mission">
            <span className="mission-number">{String(m.number).padStart(2, "0")}</span>
            <div>
              <h3>
                <Link to={m.path}>{m.page} page</Link>
                {m.solved && <span className="badge">solution on</span>}
              </h3>
              <p className="muted">Guide: <code>docs/workshop/{m.guide}</code></p>
              <div className="tags">
                {m.concepts.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
        <li className="mission">
          <span className="mission-number">++</span>
          <div>
            <h3>Bonus: add your own backend route</h3>
            <p className="muted">Guide: <code>docs/workshop/05-bonus-backend.md</code></p>
            <div className="tags">
              <span className="tag">Express</span>
              <span className="tag">TypeScript types</span>
            </div>
          </div>
        </li>
      </ol>
    </>
  );
}
