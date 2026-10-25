import type { ApiError, ApiSuccess, CodElleEvent, ContactMessage } from "../../../shared/types";

// Small helper functions that talk to our backend.
// The Vite dev server forwards "/api/..." to http://localhost:4000

export async function getEvents(category: string = "all"): Promise<CodElleEvent[]> {
  const response = await fetch(`/api/events?category=${category}`);
  if (!response.ok) throw new Error("Could not load events");
  return response.json();
}

export async function sendContactMessage(data: ContactMessage): Promise<ApiSuccess | ApiError> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
