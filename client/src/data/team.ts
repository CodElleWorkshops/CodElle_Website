// ✏️ Content for the Team page (Mission 2) — swap in the real committee!

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  emoji: string;
  funFact: string;
  instagram?: string; // the "?" means this one is optional
}

export const team: TeamMember[] = [
  { id: 1, name: "Talar", role: "President", emoji: "👑", funFact: "Debugs best with a matcha latte.", instagram: "codelleworkshops" },
  { id: 2, name: "Member Name", role: "Vice President", emoji: "🌸", funFact: "Has a sticker on every inch of her laptop." },
  { id: 3, name: "Member Name", role: "Workshop Lead", emoji: "💻", funFact: "Wrote her first website at 12." },
  { id: 4, name: "Member Name", role: "Events & Socials", emoji: "🎀", funFact: "Plans the best coffee & code meetups." },
];
