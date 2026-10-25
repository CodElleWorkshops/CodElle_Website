// ✏️ ALL THE CODELLE TEXT LIVES HERE.
// Update it with the real content from https://www.instagram.com/codelleworkshops/

export const site = {
  name: "CodElle",
  tagline: "Coding workshops by women, for women 💖",
  instagramUrl: "https://www.instagram.com/codelleworkshops/",
  instagramHandle: "@codelleworkshops",
  email: "hello@codelle.example",
  intro:
    "CodElle is a student association that runs friendly, hands-on coding workshops. " +
    "Whether you've never written a line of code or you're already building apps, there's a place for you here.",
};

export interface Highlight {
  emoji: string;
  title: string;
  text: string;
}

export const highlights: Highlight[] = [
  { emoji: "💻", title: "Hands-on workshops", text: "Learn by building real projects, step by step." },
  { emoji: "👯‍♀️", title: "A supportive community", text: "Make friends who love tech as much as you do." },
  { emoji: "🚀", title: "Grow your career", text: "Talks, mentoring and portfolio projects." },
];
