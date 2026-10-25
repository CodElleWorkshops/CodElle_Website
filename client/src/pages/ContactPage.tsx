// MISSION 4: THE CONTACT PAGE
// Guide: docs/workshop/04-contact-page.md
//
// Concepts: controlled forms, typing events, sending data to the backend (POST)
//
// STEP 1  Create state for the form, using the ContactMessage type:
//           const [form, setForm] = useState<ContactMessage>({ name: "", email: "", message: "" });
// STEP 2  Build a <form className="contact-form"> with:
//           <input name="name" />, <input name="email" type="email" />,
//           <textarea name="message" /> and a <button className="button">Send message</button>
//         Give every field value={form.xxx} and onChange={handleChange}
// STEP 3  Write ONE change handler for all fields:
//           function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
//             setForm({ ...form, [e.target.name]: e.target.value });
//           }
// STEP 4  Write handleSubmit(e: React.FormEvent):
//           - call e.preventDefault() so the page doesn't reload
//           - await sendContactMessage(form)
//           - show the result message to the user (save it in state!)
// STEP 5  Check your message arrived: http://localhost:4000/api/contact

import { useState } from "react";
import MissionPlaceholder from "../components/MissionPlaceholder";
import { sendContactMessage } from "../api/client";
import { site } from "../data/site";
import type { ContactMessage } from "../../../shared/types";

export default function ContactPage() {
  return (
    <>
      <MissionPlaceholder number={4} page="Contact" guide="04-contact-page.md" />
    </>
  );
}
