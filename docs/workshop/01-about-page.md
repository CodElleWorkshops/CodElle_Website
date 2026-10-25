# Mission 1: The About Page

**File:** `client/src/pages/AboutPage.tsx`
**See it at:** http://localhost:5173/about
**You'll learn:** JSX, components, props, TypeScript interfaces

---

### Step 1: Add a title

Replace the `<MissionPlaceholder ... />` line with a heading:

```tsx
<h1 className="page-title">About CodElle</h1>
```

Save the file. The browser updates on its own.

> **JSX** looks like HTML, but it lives inside TypeScript. One difference: we write `className` instead of `class`.

### Step 2: Show our mission

The text is already imported at the top of the file as `mission`. To put a variable inside JSX, use **curly braces**:

```tsx
<p className="lead">{mission}</p>
```

### Step 3: Make a `ValueCard` component

A **component** is a function that returns JSX. **Props** are the inputs we pass to it. In TypeScript, we describe the props with an **interface**.

At the bottom of the file:

```tsx
interface ValueCardProps {
  title: string;
  description: string;
}

function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="window">
      <div className="window-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
```

### Step 4: Use it

Try one by hand first:

```tsx
<ValueCard title="Beginner friendly" description="No question is a silly question." />
```

**Try this:** delete the `title=...` part. What does TypeScript say? That red underline is TypeScript catching a mistake before it reaches the browser.

Now show **all** the values from `values` using `.map()`:

```tsx
<div className="grid">
  {values.map((value) => (
    <ValueCard key={value.title} title={value.title} description={value.description} />
  ))}
</div>
```

### Done when

You see the title, the mission text, and four cards.

### If you finish early

- Add a new value to `client/src/data/about.ts`. It appears without touching the page.
- Add `<h2 className="section-title">What we believe in</h2>` above the grid.
- Open `client/src/components/Window.tsx`. Can you use `<Window label="value.tsx" title={title}>` inside `ValueCard` to get the window bar from our logo?

<details>
<summary>Stuck? See the solution</summary>

`client/src/solutions/AboutPage.tsx`
</details>

**Next:** [Mission 2, Team page](02-team-page.md)
