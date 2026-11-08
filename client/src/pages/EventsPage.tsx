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

function EventRow({ event }: { event: CodElleEvent }) {
  // "T12:00" avoids the date shifting by a day in some time zones
  const date = new Date(`${event.date}T12:00`);
  return (
    <article className="event">
      {/* Date square */}
      <div className="event-date">
        <span className="event-month">
          {date.toLocaleDateString("en-CA", { month: "short" })}
        </span>
        <span className="event-day">{date.getDate()}</span>
      </div>

      {/* Main event body */}
      <div className="eventcontainer">
        <div className="eventdetails">
          <span className="tag">{event.category}</span>
          <h3>{event.title}</h3>
          <p className="muted">
            {date.toLocaleDateString("en-CA", { weekday: "long" })} ·{" "}
            {event.time} · {event.location}
          </p>
          <p>{event.description}</p>
        </div>

        <img src={event.src} alt="Event Poster" className="eventposter" />
      </div>
    </article>
  );
}

export default function EventsPage() {
  const [events, setEvents] = useState<CodElleEvent[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load the events on page open
  useEffect(() => {
    getEvents()
      .then((data) => setEvents(data))
      .catch(() => setError("Could not load events."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* <MissionPlaceholder number={3} page="Events" guide="03-events-page.md" /> */}

      <h1 className="page-title">Upcoming events</h1>

      {loading && <p className="muted">Loading events...</p>}
      {error && <p className="error">{error}</p>}

      <div className="event-list">
        {events.map((event) => (
          <EventRow key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}
