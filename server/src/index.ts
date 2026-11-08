import path from "node:path";
import express from "express";
import cors from "cors";
import { eventsRouter } from "./routes/events.js";
import { contactRouter } from "./routes/contact.js";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json()); // lets us read JSON sent in a request body

// A tiny route to check that the server is alive: http://localhost:4000/api/health
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "CodElle server is running" });
});

app.use("/api/events", eventsRouter);
app.use("/api/contact", contactRouter);

// In production the server also serves the built React site,
// so the whole website runs as one app (this is what Render runs).
if (process.env.NODE_ENV === "production") {
  const clientDist = path.resolve(process.cwd(), "../client/dist");
  app.use(express.static(clientDist));
  app.get("*", (_req, res) => res.sendFile(path.join(clientDist, "index.html")));
}

app.listen(PORT, () => {
  console.log(`CodElle server listening on http://localhost:${PORT}`);
});
