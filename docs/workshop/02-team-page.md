# 👯‍♀️ Mission 2: The Team Page

**File:** `client/src/pages/TeamPage.tsx` · **See it at:** http://localhost:5173/team

**You'll learn:** rendering lists · `key` · passing objects as props · optional fields · conditional rendering

---

### Step 1: Title

Replace the placeholder with:

```tsx
<h1 className="page-title">Meet the team</h1>
```

### Step 2: Look at the data

Open `client/src/data/team.ts`. Each member follows the `TeamMember` interface:

```ts
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  emoji: string;
  funFact: string;
  instagram?: string; // ← the ? means "optional"
}
```

### Step 3: A `MemberCard` component

This time, instead of passing every field separately, we pass the **whole member object** as one prop:

```tsx
function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="card member-card">
      <div className="avatar">{member.emoji}</div>
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p>{member.funFact}</p>
    </div>
  );
}
```

> 💡 Type `member.` and wait. VS Code lists every field, because TypeScript knows the shape!

### Step 4: Loop over the team

```tsx
<div className="grid">
  {team.map((member) => (
    <MemberCard key={member.id} member={member} />
  ))}
</div>
```

> 💡 **Why `key`?** React uses it to keep track of which item is which when the list changes. Use something unique, like an `id`.

### Step 5: Only show Instagram if it exists

Not everyone has `instagram`. Use `&&` to show something **only if** a value exists:

```tsx
{member.instagram && (
  <a href={`https://www.instagram.com/${member.instagram}/`} target="_blank" rel="noreferrer">
    @{member.instagram}
  </a>
)}
```

### Step 6: Add yourself! 💖

Add a new object to the `team` array in `client/src/data/team.ts` with your own name, role, emoji and fun fact.

🧪 **Experiment:** misspell `funFact` as `funfact` in your new object. What does TypeScript tell you?

### ✅ Done when…

Every team member shows as a card, including you, and Instagram links only appear for people who have them.

<details>
<summary>😩 Stuck? Peek at the solution</summary>

See `client/src/solutions/TeamPage.tsx`.
</details>

**Next →** [Mission 3: Events page](03-events-page.md)
