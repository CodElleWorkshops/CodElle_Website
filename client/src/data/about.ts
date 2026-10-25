// ✏️ Content for the About page (Mission 1)

export const mission =
  "Our mission is to make tech a welcoming place for women and to give every member " +
  "the confidence to build things with code.";

export interface Value {
  emoji: string;
  title: string;
  description: string;
}

export const values: Value[] = [
  { emoji: "🌷", title: "Beginner friendly", description: "No question is a silly question." },
  { emoji: "🤝", title: "Community", description: "We learn together and lift each other up." },
  { emoji: "✨", title: "Creativity", description: "Code is a way to bring your ideas to life." },
  { emoji: "💪", title: "Confidence", description: "Every workshop ends with something you built." },
];
