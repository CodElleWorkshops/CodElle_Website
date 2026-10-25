# Mission 3: The Events Page

**File:** `client/src/pages/EventsPage.tsx`
**See it at:** http://localhost:5173/events
**You'll learn:** `useState`, `useEffect`, fetching from a backend, loading and error states, generics like `useState<T>`

---

### Step 0: Meet the backend

Open http://localhost:4000/api/events in your browser. That's **JSON** sent by our TypeScript server (`server/src/routes/events.ts`).

Now open `shared/types.ts`. The `CodElleEvent` interface is used by **both** the server and React. If they ever disagree, TypeScript tells us.

### Step 1: State for the events

**State** is data that can change. When it changes, React redraws the page.

```tsx
export default function EventsPage() {
  const [events, setEvents] = useState<CodElleEvent[]>([]);
```

> `<CodElleEvent[]>` tells TypeScript "this state is a list of events". It starts as an empty list `[]`.

### Step 2: Loading and error state

```tsx
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
```

### Step 3: Fetch the events when the page opens

`useEffect` runs code **after** the page appears. The empty `[]` at the end means "only once".

```tsx
  useEffect(() => {
    getEvents()
      .then((data) => setEvents(data))
      .catch(() => setError("Could not load events."))
      .finally(() => setLoading(false));
  }, []);
```

`getEvents()` is a helper in `client/src/api/client.ts`. Have a look at how it uses `fetch`.

### Step 4: Show the events

```tsx
  return (
    <>
      <h1 className="page-title">Upcoming events</h1>

      {loading && <p className="muted">Loading events...</p>}
      {error && <p className="error">{error}</p>}

      <div className="event-list">
        {events.map((event) => (
          <article key={event.id} className="event">
            <div className="event-date">{event.date}</div>
            <div>
              <span className="tag">{event.category}</span>
              <h3>{event.title}</h3>
              <p className="muted">{event.time} · {event.location}</p>
              <p>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
```

**Try this:** stop the server (Ctrl+C) and refresh. Do you see your error message? Start it again with `npm run dev`.

### Step 5: Filter buttons

1. Add state for the chosen category: `const [category, setCategory] = useState("all");`
2. Change the effect to call `getEvents(category)` and set the dependency array to `[category]`. Now it re-runs whenever the category changes.
3. Add the buttons:

```tsx
<div className="filters">
  {["all", "workshop", "social", "talk"].map((c) => (
    <button
      key={c}
      className={c === category ? "filter active" : "filter"}
      onClick={() => setCategory(c)}
    >
      {c}
    </button>
  ))}
</div>
```

### Done when

Events load from the server and show as a list, with a loading message while they load.

### If you finish early

- Pull the `<article>` out into its own `EventRow` component, like you did with `MemberCard`.
- Show the date as a month and day:
  ```tsx
  const date = new Date(`${event.date}T12:00`);
  date.toLocaleDateString("en-CA", { month: "short" }); // "Nov"
  date.getDate();                                       // 7
  ```
  Put them in `<span className="event-month">` and `<span className="event-day">`.

<details>
<summary>Stuck? See the solution</summary>

`client/src/solutions/EventsPage.tsx`
</details>

**Next:** [Mission 4, Contact page](04-contact-page.md)
