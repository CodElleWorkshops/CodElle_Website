# 📅 Mission 3: The Events Page

**File:** `client/src/pages/EventsPage.tsx` · **See it at:** http://localhost:5173/events

**You'll learn:** `useState` · `useEffect` · fetching from a backend · loading & error states · generics like `useState<T>`

---

### Step 0: Meet the backend 👀

Open http://localhost:4000/api/events in your browser. That's **JSON** sent by our TypeScript server (`server/src/routes/events.ts`).

Now open `shared/types.ts`. The `CodElleEvent` interface is used by **both** the server and React. If they disagree, TypeScript tells us!

### Step 1: State for the events

**State** is data that can change. When it changes, React redraws the page.

```tsx
export default function EventsPage() {
  const [events, setEvents] = useState<CodElleEvent[]>([]);
```

> 💡 `<CodElleEvent[]>` tells TypeScript: "this state is a list of events". It starts as an empty list `[]`.

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
      .catch(() => setError("Could not load events 😢"))
      .finally(() => setLoading(false));
  }, []);
```

`getEvents()` is a helper in `client/src/api/client.ts`. Have a look at how it uses `fetch`!

### Step 4: Show the events

```tsx
  return (
    <>
      <h1 className="page-title">Upcoming events</h1>

      {loading && <p className="muted">Loading events... 💫</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {events.map((event) => (
          <div key={event.id} className="card">
            <div className="card-emoji">{event.emoji}</div>
            <h3>{event.title}</h3>
            <p className="event-meta">📅 {event.date} · 📍 {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
```

🧪 **Experiment:** stop the server (Ctrl+C) and refresh. Do you see your error message? Start it again with `npm run dev`.

### Step 5: ⭐ Filter buttons

1. Add state for the chosen category: `const [category, setCategory] = useState("all");`
2. Change the effect to `getEvents(category)` and the dependency array to `[category]`. Now it re-runs whenever the category changes!
3. Add buttons:

```tsx
<div className="button-row">
  {["all", "workshop", "social", "talk"].map((c) => (
    <button
      key={c}
      className={c === category ? "button" : "button button-outline"}
      onClick={() => setCategory(c)}
    >
      {c}
    </button>
  ))}
</div>
```

### ✅ Done when…

Events load from the server and show as cards, with a loading message while they load.

### ⭐ Extra sparkle

- Make an `EventCard` component, like you did with `MemberCard`.
- Format the date nicely: `new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "long" })`
- Add a coloured tag: `<span className={`tag tag-${event.category}`}>{event.category}</span>`

<details>
<summary>😩 Stuck? Peek at the solution</summary>

See `client/src/solutions/EventsPage.tsx`.
</details>

**Next →** [Mission 4: Contact page](04-contact-page.md)
