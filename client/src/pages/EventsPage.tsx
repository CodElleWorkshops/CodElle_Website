// MISSION 3: THE EVENTS PAGE
// Guide: docs/workshop/03-events-page.md
//
// Concepts: useState, useEffect, fetching data from OUR backend, loading & error states
//
// The events live on the server (server/src/data/events.ts).
// Check they're there: open http://localhost:4000/api/events in your browser.
//
// STEP 1  Create state to hold the events:
//           const [events, setEvents] = useState<CodElleEvent[]>([]);
// STEP 2  Add two more pieces of state:
//           const [loading, setLoading] = useState(true);
//           const [error, setError] = useState<string | null>(null);
// STEP 3  Use useEffect to load the events when the page opens:
//           useEffect(() => {
//             getEvents()
//               .then((data) => setEvents(data))
//               .catch(() => setError("Could not load events."))
//               .finally(() => setLoading(false));
//           }, []);
// STEP 4  Show "Loading..." while loading, the error if there is one,
//         otherwise .map() over events and show each one.
// STEP 5  BONUS: add filter buttons (all / workshop / social / talk).
//         Store the chosen category in state and pass it to getEvents(category).
//         Add `category` to the useEffect dependency array: [category]

import { useEffect, useState } from "react";
import MissionPlaceholder from "../components/MissionPlaceholder";
import { getEvents } from "../api/client";
import type { CodElleEvent } from "../../../shared/types";

export default function EventsPage() {
  return (
    <>
      <MissionPlaceholder number={3} page="Events" guide="03-events-page.md" />
    </>
  );
}
