// SOLUTION: Mission 2, Team page
import { team, type TeamMember } from "../data/team";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="member">
      <div className="avatar">{getInitials(member.name)}</div>
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p className="muted">{member.program}</p>
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <p className="eyebrow">Executive team</p>
      <h1 className="page-title">Meet the team</h1>
      <p className="lead">The students who plan the workshops, find the sponsors and keep the coffee coming.</p>
      <div className="grid section">
        {team.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </>
  );
}
