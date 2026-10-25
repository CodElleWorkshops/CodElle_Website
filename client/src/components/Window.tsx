import type { ReactNode } from "react";

// A card that looks like the app window in our logo.
// Usage:
//   <Window label="about.tsx" title="Beginner friendly">Some text</Window>

interface WindowProps {
  label?: string;
  title?: string;
  children?: ReactNode;
}

export default function Window({ label, title, children }: WindowProps) {
  return (
    <div className="window">
      <div className="window-bar">
        <span className="window-label">{label}</span>
        <span className="window-controls" aria-hidden>
          <span>–</span>
          <span>□</span>
          <span>×</span>
        </span>
      </div>
      <div className="window-body">
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </div>
  );
}
