// Types shared by the frontend (client) AND the backend (server).
// Because both sides use the same types, TypeScript warns us if they ever disagree.

export type EventCategory = "workshop" | "social" | "talk";

export interface CodElleEvent {
  id: number;
  title: string;
  date: string; // ISO format: "2026-11-14"
  time: string;
  location: string;
  category: EventCategory;
  description: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  organization?: string; // optional: filled in by companies
  message: string;
}

export interface ApiSuccess {
  ok: true;
  message: string;
}

export interface ApiError {
  ok: false;
  error: string;
}
