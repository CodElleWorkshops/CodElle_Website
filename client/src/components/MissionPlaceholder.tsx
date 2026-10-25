// Shown on pages that haven't been built yet. Delete it from your page once you start.

interface MissionPlaceholderProps {
  number: number;
  page: string;
  guide: string;
}

export default function MissionPlaceholder({ number, page, guide }: MissionPlaceholderProps) {
  return (
    <div className="placeholder">
      <p className="eyebrow">Mission {number}</p>
      <h2>The {page} page is under construction</h2>
      <p>
        Open <code>client/src/pages/{page}Page.tsx</code> and follow{" "}
        <code>docs/workshop/{guide}</code>.
      </p>
    </div>
  );
}
