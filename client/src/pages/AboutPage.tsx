// MISSION 1: THE ABOUT PAGE
// Guide: docs/workshop/01-about-page.md
//
// Concepts: JSX, components, props, TypeScript interfaces
//
// STEP 1  Replace <MissionPlaceholder /> with a page title:
//           <h1 className="page-title">About CodElle</h1>
// STEP 2  Show our mission text underneath it. It is already imported as `mission`.
//           Tip: use curly braces to put a variable inside JSX: <p className="lead">{mission}</p>
// STEP 3  Create a ValueCard component (below this one) that receives props.
//         First write an interface describing its props: title and description.
// STEP 4  Use values.map(...) to show a ValueCard for every value.
//           Wrap them in <div className="grid"> ... </div> to lay them out in columns.
// STEP 5  Check the browser at http://localhost:5173/about

import MissionPlaceholder from "../components/MissionPlaceholder";
import { mission, values } from "../data/about";
import Window from "../components/Window";

export default function AboutPage() {
  return (
    <>
      <p className="eyebrow">Who we are</p>
      <h1 className="page-title">About CodElle</h1>
      <p className="lead">{mission}</p>

      <section className="section">
        <p className="eyebrow">What we believe in</p>
        <div className="grid">
          {values.map((value) => (
              <ValueCard key={value.title} title={value.title} description={value.description} />
          ))}
        </div>
      </section>
    </>
  );
}

interface ValueCardProps {
  title: string;
  description: string;
}

function ValueCard({ title, description }: ValueCardProps) {
  return (
    <Window label="CodElle" title={title}>
      <p>{description}</p>
    </Window>
  );
}

