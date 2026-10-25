// ✅ SOLUTION — Mission 2: Team page
import { team, type TeamMember } from "../data/team";

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="card member-card">
      <div className="avatar">{member.emoji}</div>
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p>{member.funFact}</p>
      {member.instagram && (
        <a href={`https://www.instagram.com/${member.instagram}/`} target="_blank" rel="noreferrer">
          @{member.instagram}
        </a>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <h1 className="page-title">Meet the team</h1>
      <p className="page-subtitle">The lovely humans behind CodElle 💕</p>
      <div className="grid">
        {team.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </>
  );
}
