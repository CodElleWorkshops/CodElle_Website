# Bonus Mission: Your Own Backend Route

**Files:** `server/src/...` · **You'll learn:** Express routes · typing server data · connecting a new API to React

Let's add a **"Coding tip of the day"** endpoint and show it on the Home page.

### Step 1: Add a type in `shared/types.ts`

```ts
export interface Tip {
  id: number;
  text: string;
  author: string;
}
```

### Step 2: Create `server/src/routes/tips.ts`

```ts
import { Router } from "express";
import type { Tip } from "../../../shared/types.js";

export const tipsRouter = Router();

const tips: Tip[] = [
  { id: 1, text: "console.log() is your best friend.", author: "CodElle" },
  { id: 2, text: "Read the error message. It's trying to help.", author: "CodElle" },
  { id: 3, text: "Take breaks. Bugs are easier to find after a snack.", author: "CodElle" },
];

// GET /api/tips/random
tipsRouter.get("/random", (_req, res) => {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  res.json(tip);
});
```

### Step 3: Register it in `server/src/index.ts`

```ts
import { tipsRouter } from "./routes/tips.js";
// ...
app.use("/api/tips", tipsRouter);
```

Test it: http://localhost:4000/api/tips/random (refresh a few times)

### Step 4: Show it in React

In `client/src/api/client.ts`:

```ts
export async function getRandomTip(): Promise<Tip> {
  const response = await fetch("/api/tips/random");
  return response.json();
}
```

(remember to add `Tip` to the import at the top)

Then on the Home page, use `useState<Tip | null>(null)` and `useEffect` to load and show it. You know how from Mission 3.

### More ideas

- `POST /api/events` to create a new event from a form
- A "Join CodElle" sign-up page
- A gallery page with photos from the Instagram
- A "Past projects" section on the Partners page showing websites members have built
