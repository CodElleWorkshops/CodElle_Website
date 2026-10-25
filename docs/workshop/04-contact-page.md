# Mission 4: The Contact Page

**File:** `client/src/pages/ContactPage.tsx`
**See it at:** http://localhost:5173/contact
**You'll learn:** controlled forms, typing events, sending data with a POST request, `async`/`await`

This is the page companies use to reach our sponsorship team, so it matters.

---

### Step 1: State for the form

One object holds all the fields. It uses the shared `ContactMessage` type:

```tsx
const [form, setForm] = useState<ContactMessage>({ name: "", email: "", message: "" });
const [status, setStatus] = useState("");
```

### Step 2: The page and the form

```tsx
return (
  <>
    <h1 className="page-title">Contact us</h1>
    <p className="lead">
      Email us at <a href={`mailto:${site.email}`}>{site.email}</a> or send a message below.
    </p>

    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} value={form.message} onChange={handleChange} />
      </label>
      <button className="button" type="submit">Send message</button>
      {status && <p>{status}</p>}
    </form>
  </>
);
```

> This is a **controlled form**: React state is the source of truth, and each input shows `value={form.something}`.

### Step 3: Handle typing

One function handles **every** field. It uses the input's `name` to know which field to update:

```tsx
function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  setForm({ ...form, [e.target.name]: e.target.value });
}
```

> `...form` copies all the old values, then we overwrite just one. We never change state directly; we always make a new object.

### Step 4: Send it to the server

```tsx
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault(); // stop the browser from reloading the page
  const result = await sendContactMessage(form);
  if (result.ok) {
    setStatus(result.message);
    setForm({ name: "", email: "", message: "" });
  } else {
    setStatus(result.error);
  }
}
```

> TypeScript only lets you use `result.message` inside `if (result.ok)`, and `result.error` in the `else`. This is called **narrowing**.

### Step 5: Check it arrived

Send a message, then open http://localhost:4000/api/contact. Your message is there. The terminal running the server also logs `New message from ...`.

**Try this:** submit the form with an empty name. What does the server answer? Find where that error is created in `server/src/routes/contact.ts`.

### Done when

You can send a message, see a thank-you, and the form clears.

### If you finish early

`ContactMessage` has an optional `organization` field for companies. Add an input for it, labelled "Company or organisation (optional)".

<details>
<summary>Stuck? See the solution</summary>

`client/src/solutions/ContactPage.tsx`
</details>

**Next:** [Bonus, your own backend route](05-bonus-backend.md)
