# 💌 Mission 4: The Contact Page

**File:** `client/src/pages/ContactPage.tsx` · **See it at:** http://localhost:5173/contact

**You'll learn:** controlled forms · typing events · sending data with a POST request · `async`/`await`

---

### Step 1: State for the form

One object holds all the fields. It uses the shared `ContactMessage` type:

```tsx
const [form, setForm] = useState<ContactMessage>({ name: "", email: "", message: "" });
const [status, setStatus] = useState("");
```

### Step 2: The form

```tsx
return (
  <>
    <h1 className="page-title">Say hello 💌</h1>
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
      <button className="button" type="submit">Send 💌</button>
      {status && <p>{status}</p>}
    </form>
  </>
);
```

> 💡 This is a **controlled form**: React state is the "source of truth", and each input shows `value={form.something}`.

### Step 3: Handle typing

One function handles **every** field. It uses the input's `name` to know which field to update:

```tsx
function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  setForm({ ...form, [e.target.name]: e.target.value });
}
```

> 💡 `...form` copies all the old values, then we overwrite just one. We never change state directly. We always make a new object.

### Step 4: Send it to the server

```tsx
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault(); // stop the browser from reloading the page!
  const result = await sendContactMessage(form);
  if (result.ok) {
    setStatus(result.message);
    setForm({ name: "", email: "", message: "" });
  } else {
    setStatus(result.error);
  }
}
```

> 💡 Notice that TypeScript only lets you use `result.message` inside `if (result.ok)`, and `result.error` in the `else`. This is called **narrowing**, and it's one of TypeScript's superpowers.

### Step 5: Check it arrived 🎉

Send a message, then open http://localhost:4000/api/contact. Your message is there! Also look at the terminal: the server logs `💌 New message from ...`.

🧪 **Experiment:** submit the form with an empty name. What does the server answer? Find where that error is created in `server/src/routes/contact.ts`.

### ✅ Done when…

You can send a message, see a thank-you, and the form clears.

<details>
<summary>😩 Stuck? Peek at the solution</summary>

See `client/src/solutions/ContactPage.tsx`.
</details>

**Next →** [Bonus: your own backend route](05-bonus-backend.md)
