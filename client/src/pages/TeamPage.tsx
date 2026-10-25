// 👯‍♀️ MISSION 2: THE TEAM PAGE
// Guide: docs/workshop/02-team-page.md
//
// Concepts: rendering lists with .map(), keys, optional props, conditional rendering
//
// STEP 1  Replace <MissionPlaceholder /> with a title: "Meet the team"
// STEP 2  Create a MemberCard component that takes ONE prop: `member` of type TeamMember.
//           function MemberCard({ member }: { member: TeamMember }) { ... }
//         Show the emoji, name, role and funFact.
// STEP 3  In TeamPage, loop over `team` with .map() and render a <MemberCard /> for each.
//         ⚠️ Don't forget the key prop: key={member.id}
// STEP 4  `instagram` is OPTIONAL (it has a ? in the interface).
//         Only show a link if the member has one:
//           {member.instagram && <a href={...}>@{member.instagram}</a>}
// STEP 5  ✏️ Edit src/data/team.ts and add yourself to the team!

import MissionPlaceholder from "../components/MissionPlaceholder";
import { team, type TeamMember } from "../data/team";

export default function TeamPage() {
  return (
    <>
      <MissionPlaceholder number={2} page="Team" guide="02-team-page.md" />
    </>
  );
}
