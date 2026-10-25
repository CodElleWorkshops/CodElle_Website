# 🎀 Instructor Guide

This is for the person leading the session. Participants start at **[Mission 1](01-about-page.md)**.

## Before the workshop

- [ ] Update `client/src/data/site.ts`, `about.ts`, `team.ts` and `server/src/data/events.ts` with the real CodElle content from Instagram.
- [ ] Check that every participant can run `node -v` (needs **v18 or newer**) and has VS Code installed.
- [ ] Share the repo link. Everyone runs the steps in the README's **Setup** section.
- [ ] Run `npm run dev` yourself and open http://localhost:5173/workshop. You should see the mission map.

## Suggested agenda (about 3 hours)

| Time | What | Concepts |
|------|------|----------|
| 0:00 | Welcome + setup check | Node, npm, VS Code |
| 0:15 | **Tour:** project structure + read `HomePage.tsx` together | JSX, components, props, imports |
| 0:35 | **Mission 1 — About** | Interfaces, props, `.map()` |
| 1:05 | **Mission 2 — Team** | Lists, keys, optional props, `&&` |
| 1:35 | ☕ Break |  |
| 1:45 | **Tour:** the backend. Open http://localhost:4000/api/events | REST, JSON, shared types |
| 1:55 | **Mission 3 — Events** | `useState`, `useEffect`, `fetch` |
| 2:30 | **Mission 4 — Contact** | Forms, events, POST |
| 2:55 | Show & tell 💖 + Bonus for fast finishers |  |

## The tour (how to explain the project)

Draw this on the board:

```
 Browser (React, port 5173)  ──  /api/events  ──▶  Server (Express + TS, port 4000)
        client/src/pages                               server/src/routes
                     ╲                                   ╱
                      ╲──── shared/types.ts (same types on both sides!) ────╱
```

Then open these files in order:
1. `client/src/App.tsx`: every page is a **route**.
2. `client/src/pages/HomePage.tsx`: a finished page. Point out the `Card` component and `highlights.map(...)`.
3. `client/src/components/Card.tsx`: a component with typed **props**.
4. `client/src/data/site.ts`: content is just TypeScript data.

## The solution switchboard

`client/src/workshop.ts` controls whether each route shows the participant's page or the finished solution:

```ts
export const showSolution = { about: false, team: false, events: false, contact: false };
```

- **Demo first?** Turn a mission on, show the result, turn it off, then let them build it.
- **Someone stuck or fell behind?** They can flip it to `true` to catch up and move on. Or they can copy `client/src/solutions/XxxPage.tsx` into `client/src/pages/`.

## Common problems

| Symptom | Fix |
|--------|-----|
| "Could not load events" | The server isn't running. Use `npm run dev` from the **root** folder (it starts both). |
| `npm: command not found` | Install Node.js LTS from https://nodejs.org and restart the terminal. |
| Port 5173/4000 already in use | Close the other terminal that's running it, or restart VS Code. |
| Red squiggles saying `X is declared but never used` | That's fine! The imports are ready for when they reach that step. |
| `Each child in a list should have a unique "key" prop` | Add `key={item.id}` to the element returned by `.map()`. |
| Page is blank | Open the browser console (F12). Usually a typo in JSX, like a missing closing tag. |
| Typing in the form does nothing | The input has `value` but no `onChange`. |
