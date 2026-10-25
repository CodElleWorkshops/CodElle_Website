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

export default function AboutPage() {
  return (
    <>
      <MissionPlaceholder number={1} page="About" guide="01-about-page.md" />
    </>
  );
}

// STEP 3 goes here
// interface ValueCardProps { ... }
// function ValueCard(props: ValueCardProps) { ... }
