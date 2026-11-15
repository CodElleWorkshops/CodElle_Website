import { Router } from "express";
import type { ApiError, ApiSuccess, ContactMessage } from "../../../shared/types.js";

export const contactRouter = Router();

const isProduction = process.env.NODE_ENV === "production";
const contactEmail = "codelleconcordia@gmail.com";

// On the live site, messages are emailed to us through Formspree (https://formspree.io).
// The form ID is set in Render's dashboard, never in the code.
const formspreeFormId = process.env.FORMSPREE_FORM_ID;

// On your laptop, messages are kept in memory (they disappear when the server restarts).
const messages: ContactMessage[] = [];

async function sendToFormspree(data: ContactMessage): Promise<boolean> {
  try {
    const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, _replyto: data.email, _subject: `CodElle website: message from ${data.name}` }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

// POST /api/contact  { name, email, organization?, message }
contactRouter.post("/", async (req, res) => {
  const { name, email, organization, message } = req.body as Partial<ContactMessage>;

  if (!name || !email || !message) {
    const body: ApiError = { ok: false, error: "Please fill in your name, email and message." };
    res.status(400).json(body);
    return;
  }
  if (!email.includes("@")) {
    const body: ApiError = { ok: false, error: "That email doesn't look quite right." };
    res.status(400).json(body);
    return;
  }

  const data: ContactMessage = { name, email, organization, message };

  if (isProduction) {
    const sent = formspreeFormId ? await sendToFormspree(data) : false;
    if (!sent) {
      const body: ApiError = { ok: false, error: `Sorry, the form isn't working right now. Please email us at ${contactEmail}.` };
      res.status(503).json(body);
      return;
    }
  } else {
    messages.push(data);
  }
  console.log(`New message from ${name}${organization ? ` (${organization})` : ""}`);

  const body: ApiSuccess = { ok: true, message: `Thanks ${name}! We'll get back to you soon.` };
  res.status(201).json(body);
});

// GET /api/contact -> see all messages (handy for checking your form works!)
// Only on your laptop: on the live site this would let anyone read everyone's messages.
if (!isProduction) {
  contactRouter.get("/", (_req, res) => {
    res.json(messages);
  });
}
