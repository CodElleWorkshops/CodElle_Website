import { useEffect, useState } from "react";
import { getEvents } from "../api/client";
import type { CodElleEvent, EventCategory } from "../../../shared/types";

type Filter = "all" | EventCategory;
const filters: Filter[] = ["all", "workshop", "social", "talk"];

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
            {date.toLocaleDateString("en-CA", { weekday: "long" })} · {" "}
            {event.time} · {event.location}
          </p>
          <p>{event.description}</p>
        </div>

        <img src={event.src ?? "/defaultposter.png"} alt="Event Poster" className="eventposter" />
      </div>
    </article>
  );
}

export default function EventsPage() {
  const [events, setEvents] = useState<CodElleEvent[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [category, setCategory] = useState<Filter>("all");

  // Load the events on page open and each time the selected category changes
   useEffect(() => {
    setLoading(true);
    setError(null);
    getEvents(category)
      .then((data) => setEvents(data))
      .catch(() => setError("Could not load events. Is the server running?"))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      <h1 className="page-title">Upcoming events</h1>

      {/* Filter button logic */}
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f}
            className={f === category ? "filter active" : "filter"}
            onClick={() => setCategory(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {loading && <p className="muted">Loading events...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && events.length === 0 && <p className="muted">No events in this category yet.</p>}

      {/* Displaying each of the events */}
      <div className="event-list">
        {events.map((event) => (
          <EventRow key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}
