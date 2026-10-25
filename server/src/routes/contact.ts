import { Router } from "express";
import type { ApiError, ApiSuccess, ContactMessage } from "../../../shared/types.js";

export const contactRouter = Router();

// Messages are kept in memory (they disappear when the server restarts).
const messages: ContactMessage[] = [];

// POST /api/contact  { name, email, message }
contactRouter.post("/", (req, res) => {
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

  messages.push({ name, email, organization, message });
  console.log(`New message from ${name}${organization ? ` (${organization})` : ""}`);

  const body: ApiSuccess = { ok: true, message: `Thanks ${name}! We'll get back to you soon.` };
  res.status(201).json(body);
});

// GET /api/contact -> see all messages (handy for checking your form works!)
contactRouter.get("/", (_req, res) => {
  res.json(messages);
});
