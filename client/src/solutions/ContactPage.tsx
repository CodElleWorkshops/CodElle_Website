// SOLUTION: Mission 4, Contact page
import { useState } from "react";
import { sendContactMessage } from "../api/client";
import { site } from "../data/site";
import type { ContactMessage } from "../../../shared/types";

const emptyForm: ContactMessage = { name: "", email: "", organization: "", message: "" };

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
      setStatus({ ok: false, text: "Something went wrong. Is the server running?" });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="contact">
      <div>
        <p className="eyebrow">Get in touch</p>
        <h1 className="page-title">Contact us</h1>
        <p className="lead">
          Want to join a workshop, sponsor an event or have our members build your website? We'd love to hear from you.
        </p>
        <dl className="contact-details">
          <dt>Email</dt>
          <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
          <dt>Instagram</dt>
          <dd><a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a></dd>
          <dt>Where</dt>
          <dd>{site.school}</dd>
        </dl>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          <span>Company or organisation <span className="muted">(optional)</span></span>
          <input name="organization" value={form.organization} onChange={handleChange} />
        </label>
        <label>
          Message
          <textarea name="message" rows={5} value={form.message} onChange={handleChange} required />
        </label>
        <button className="button" type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send message"}
        </button>
        {status && <p className={status.ok ? "success" : "error"}>{status.text}</p>}
      </form>
    </div>
  );
}
