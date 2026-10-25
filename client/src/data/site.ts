// All of the general CodElle text lives here.
// Keep it in sync with https://www.instagram.com/codelleworkshops/

export const site = {
  name: "CodElle",
  tagline: "Coding Workshops for Girls",
  school: "Concordia University, Montréal",
  instagramUrl: "https://www.instagram.com/codelleworkshops/",
  instagramHandle: "@codelleworkshops",
  email: "codelleconcordia@gmail.com",
  intro:
    "CodElle is a student association at Concordia that runs hands-on coding workshops for girls and women. " +
    "Whether you've never written a line of code or you're already shipping projects, there's a seat for you.",
};

export interface Highlight {
  label: string;
  title: string;
  text: string;
}

export const highlights: Highlight[] = [
  {
    label: "workshops.tsx",
    title: "Hands-on workshops",
    text: "Every session ends with something you built yourself, from a first web page to a full-stack app.",
  },
  {
    label: "community.tsx",
    title: "A community that shows up",
    text: "Study sessions, socials and mentors who remember what it was like to be the only girl in the room.",
  },
  {
    label: "careers.tsx",
    title: "Real-world experience",
    text: "Talks with industry, portfolio projects and websites built for actual partner organisations.",
  },
];
