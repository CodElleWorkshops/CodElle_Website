// ✅ SOLUTION — Mission 3: Events page
import { useEffect, useState } from "react";
import { getEvents } from "../api/client";
import type { CodElleEvent, EventCategory } from "../../../shared/types";

type Filter = "all" | EventCategory;
const filters: Filter[] = ["all", "workshop", "social", "talk"];

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long" });
}

function EventCard({ event }: { event: CodElleEvent }) {
  return (
    <div className="card event-card">
      <div className="card-emoji">{event.emoji}</div>
      <span className={`tag tag-${event.category}`}>{event.category}</span>
      <h3>{event.title}</h3>
      <p className="event-meta">
        📅 {formatDate(event.date)} · 🕕 {event.time} · 📍 {event.location}
      </p>
      <p>{event.description}</p>
    </div>
  );
}

export default function EventsPage() {
  const [events, setEvents] = useState<CodElleEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<Filter>("all");

  useEffect(() => {
    setLoading(true);
    setError(null);
    getEvents(category)
      .then((data) => setEvents(data))
      .catch(() => setError("Could not load events 😢 Is the server running?"))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>
      <h1 className="page-title">Upcoming events</h1>
      <p className="page-subtitle">Come code, chat and learn with us ✨</p>

      <div className="button-row">
        {filters.map((f) => (
          <button
            key={f}
            className={f === category ? "button" : "button button-outline"}
            onClick={() => setCategory(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {loading && <p className="muted">Loading events... 💫</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && events.length === 0 && <p className="muted">No events here yet!</p>}

      <div className="grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}
