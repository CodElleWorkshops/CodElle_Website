// Shown on pages that haven't been built yet. Delete it from your page once you start! 🚧

interface MissionPlaceholderProps {
  number: number;
  page: string;
  guide: string;
}

export default function MissionPlaceholder({ number, page, guide }: MissionPlaceholderProps) {
  return (
    <div className="mission-placeholder">
      <div className="card-emoji">🚧</div>
      <h2>Mission {number}: build the {page} page</h2>
      <p>
        Open <code>client/src/pages/{page}Page.tsx</code> and follow the guide in{" "}
        <code>docs/workshop/{guide}</code>.
      </p>
      <p className="muted">You've got this! 💪✨</p>
    </div>
  );
}
