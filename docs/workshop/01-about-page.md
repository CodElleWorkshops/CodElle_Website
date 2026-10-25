# 🌸 Mission 1: The About Page

**File:** `client/src/pages/AboutPage.tsx` · **See it at:** http://localhost:5173/about

**You'll learn:** JSX · components · props · TypeScript interfaces

![goal](https://img.shields.io/badge/goal-a%20title%2C%20our%20mission%20and%204%20value%20cards-ff4fa3)

---

### Step 1: Add a title

Replace the `<MissionPlaceholder ... />` line with a heading:

```tsx
<h1 className="page-title">About CodElle</h1>
```

Save the file. The browser updates by itself! ✨

> 💡 **JSX** looks like HTML, but it lives inside TypeScript. One difference: we write `className` instead of `class`.

### Step 2: Show our mission

The text is already imported at the top of the file as `mission`. To put a variable inside JSX, use **curly braces**:

```tsx
<p className="page-subtitle">{mission}</p>
```

### Step 3: Make a `ValueCard` component

A **component** is a function that returns JSX. **Props** are the inputs we pass to it. In TypeScript, we describe the props with an **interface**.

At the bottom of the file:

```tsx
interface ValueCardProps {
  emoji: string;
  title: string;
  description: string;
}

function ValueCard({ emoji, title, description }: ValueCardProps) {
  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

### Step 4: Use it!

Try one by hand first:

```tsx
<ValueCard emoji="🌷" title="Beginner friendly" description="No question is a silly question." />
```

🧪 **Experiment:** delete the `title=...` part. What does TypeScript say? That red squiggle is TypeScript protecting you!

Now show **all** the values from `values` using `.map()`:

```tsx
<div className="grid">
  {values.map((value) => (
    <ValueCard
      key={value.title}
      emoji={value.emoji}
      title={value.title}
      description={value.description}
    />
  ))}
</div>
```

### ✅ Done when…

You see the title, the mission text, and four pink cards.

### ⭐ Extra sparkle

- Add a new value to `client/src/data/about.ts`. It appears automatically!
- Add a `<h2 className="section-title">Our values</h2>` above the grid.
- Could you use the ready-made `Card` component from `components/Card.tsx` instead?

<details>
<summary>😩 Stuck? Peek at the solution</summary>

See `client/src/solutions/AboutPage.tsx`.
</details>

**Next →** [Mission 2: Team page](02-team-page.md)
