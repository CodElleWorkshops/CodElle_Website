// Content for the Team page (Mission 2). Swap in the real executive team.

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  program: string;
  linkedin?: string; // the "?" means this field is optional
}

export const team: TeamMember[] = [
  { id: 1, name: "Talar Khawaja", role: "President", program: "Computer Science", linkedin: "https://www.linkedin.com/" },
  { id: 2, name: "Member Name", role: "Vice President", program: "Software Engineering" },
  { id: 3, name: "Member Name", role: "Workshop Lead", program: "Computer Science" },
  { id: 4, name: "Member Name", role: "Sponsorship Lead", program: "Business Technology Management" },
];
