// MISSION 2: THE TEAM PAGE
// Guide: docs/workshop/02-team-page.md
//
// Concepts: rendering lists with .map(), keys, optional fields, conditional rendering
//
// STEP 1  Replace <MissionPlaceholder /> with a title: "Meet the team"
// STEP 2  Create a MemberCard component that takes ONE prop: `member` of type TeamMember.
//           function MemberCard({ member }: { member: TeamMember }) { ... }
//         Show the member's initials, name, role and program.
//         (The getInitials helper below is ready for you to use.)
// STEP 3  In TeamPage, loop over `team` with .map() and render a <MemberCard /> for each.
//         Don't forget the key prop: key={member.id}
// STEP 4  `linkedin` is OPTIONAL (it has a ? in the interface).
//         Only show a link if the member has one:
//           {member.linkedin && <a href={member.linkedin}>LinkedIn</a>}
// STEP 5  Edit src/data/team.ts and add yourself to the team.

import MissionPlaceholder from "../components/MissionPlaceholder";
import { team, type TeamMember } from "../data/team";

// "Talar Khawaja" -> "TK"
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <MissionPlaceholder number={2} page="Team" guide="02-team-page.md" />
    </>
  );
}
