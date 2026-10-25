import { Router } from "express";
import { events } from "../data/events.js";
import type { CodElleEvent } from "../../../shared/types.js";

export const eventsRouter = Router();

// GET /api/events            -> all events, soonest first
// GET /api/events?category=workshop -> only one category
eventsRouter.get("/", (req, res) => {
  const { category } = req.query;

  let result: CodElleEvent[] = [...events].sort((a, b) => a.date.localeCompare(b.date));
  if (typeof category === "string" && category !== "all") {
    result = result.filter((event) => event.category === category);
  }

  res.json(result);
});

// GET /api/events/:id -> a single event
eventsRouter.get("/:id", (req, res) => {
  const event = events.find((e) => e.id === Number(req.params.id));
  if (!event) {
    res.status(404).json({ ok: false, error: "Event not found" });
    return;
  }
  res.json(event);
});
