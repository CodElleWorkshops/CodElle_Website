// ✅ SOLUTION — Mission 4: Contact page
import { useState } from "react";
import { sendContactMessage } from "../api/client";
import { site } from "../data/site";
import type { ContactMessage } from "../../../shared/types";

const emptyForm: ContactMessage = { name: "", email: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<ContactMessage>(emptyForm);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [sending, setSending] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const result = await sendContactMessage(form);
      if (result.ok) {
        setStatus({ ok: true, text: result.message });
        setForm(emptyForm);
      } else {
        setStatus({ ok: false, text: result.error });
      }
    } catch {
      setStatus({ ok: false, text: "Something went wrong 😢 Is the server running?" });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <h1 className="page-title">Say hello 💌</h1>
      <p className="page-subtitle">
        Questions, ideas, or want to join? Send us a message or DM us on Instagram{" "}
        <a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a>.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Write something lovely..." />
        </label>
        <button className="button" type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send 💌"}
        </button>
        {status && <p className={status.ok ? "success" : "error"}>{status.text}</p>}
      </form>
    </>
  );
}
