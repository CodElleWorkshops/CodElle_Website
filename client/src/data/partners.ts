// Content for the Partners page. This page is aimed at companies:
// it explains how they can support CodElle, and that our members can build websites for them.

export interface PartnerOffer {
  label: string;
  title: string;
  description: string;
  points: string[];
}

export const partnerPitch =
  "This website was designed and built by CodElle members during our React & TypeScript workshop. " +
  "Partner with us and our members can build one for your organisation too, while gaining the real-world " +
  "experience that sets them apart.";

export const offers: PartnerOffer[] = [
  {
    label: "sponsor.ts",
    title: "Sponsor a workshop",
    description: "Fund a workshop or event series and put your name in front of motivated students.",
    points: ["Logo on our website and event materials", "Speaking slot at the sponsored event", "Shout-outs on Instagram"],
  },
  {
    label: "build.ts",
    title: "Get a website built",
    description: "A team of members designs and builds a site for your organisation as a guided project.",
    points: ["Modern React + TypeScript stack", "Mentored by experienced developers", "Your brand, your content"],
  },
  {
    label: "recruit.ts",
    title: "Meet future talent",
    description: "Connect with women studying computer science, engineering and design at Concordia.",
    points: ["Host a talk or office tour", "Share internship postings", "Mentor a member"],
  },
];

// Add real partners here once they've confirmed. The section is hidden while this list is empty.
export const currentPartners: { name: string; url: string }[] = [];
