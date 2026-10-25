import type { ReactNode } from "react";

// A reusable pink card. Use it on any page!
//   <Card emoji="🌸" title="Hello">Some text</Card>

interface CardProps {
  emoji?: string;
  title: string;
  children?: ReactNode;
}

export default function Card({ emoji, title, children }: CardProps) {
  return (
    <div className="card">
      {emoji && <div className="card-emoji">{emoji}</div>}
      <h3>{title}</h3>
      {children}
    </div>
  );
}
