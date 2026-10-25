# Mission 2: The Team Page

**File:** `client/src/pages/TeamPage.tsx`
**See it at:** http://localhost:5173/team
**You'll learn:** rendering lists, `key`, passing objects as props, optional fields, conditional rendering

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
  program: string;
  linkedin?: string; // the ? means "optional"
}
```

### Step 3: A `MemberCard` component

This time, instead of passing every field separately, we pass the **whole member object** as one prop. The `getInitials` helper is already in the file.

```tsx
function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="member">
      <div className="avatar">{getInitials(member.name)}</div>
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p className="muted">{member.program}</p>
    </div>
  );
}
```

> Type `member.` and pause. VS Code lists every field, because TypeScript knows the shape of the object.

### Step 4: Loop over the team

```tsx
<div className="grid">
  {team.map((member) => (
    <MemberCard key={member.id} member={member} />
  ))}
</div>
```

> **Why `key`?** React uses it to keep track of which item is which when the list changes. Use something unique, like an `id`.

### Step 5: Only show LinkedIn if it exists

Not everyone has `linkedin`. Use `&&` to render something **only if** a value exists:

```tsx
{member.linkedin && (
  <a href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
)}
```

### Step 6: Add yourself

Add a new object to the `team` array in `client/src/data/team.ts` with your name, role and program.

**Try this:** misspell `program` as `programme` in your new object. What does TypeScript tell you?

### Done when

Every team member shows with their initials, including you, and LinkedIn links only appear for people who have one.

<details>
<summary>Stuck? See the solution</summary>

`client/src/solutions/TeamPage.tsx`
</details>

**Next:** [Mission 3, Events page](03-events-page.md)
