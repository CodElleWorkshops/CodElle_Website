# 💖 CodElle Website

The website for **CodElle** ([@codelleworkshops](https://www.instagram.com/codelleworkshops/)), a student association running coding workshops for women. We build it **together** in our React + TypeScript workshop! ✨

- 🎨 **Frontend:** React + TypeScript (Vite) in `client/`
- ⚙️ **Backend:** Node.js + Express + TypeScript in `server/`
- 🤝 **Shared types:** `shared/types.ts`, used by both sides

---

## 🚀 Setup

### 1. Install the tools (one time only)

| Tool | Get it | Check it works |
|------|--------|----------------|
| **Node.js** (v18 or newer, choose "LTS") | https://nodejs.org | `node -v` |
| **Git** | https://git-scm.com/downloads | `git --version` |
| **VS Code** | https://code.visualstudio.com | — |

> 💡 Open a terminal: in VS Code, use the menu **Terminal → New Terminal**.

### 2. Download the project

```bash
git clone https://github.com/<ORG-NAME>/CodElle_Website.git
cd CodElle_Website
```

*(No Git? On the GitHub page click **Code → Download ZIP**, unzip it, and open the folder in VS Code.)*

### 3. Install the packages

From the **main `CodElle_Website` folder**:

```bash
npm install
```

This installs everything for both the client and the server. It can take a minute ☕

### 4. Start the website

```bash
npm run dev
```

This starts **two** things at once:

| | URL | What it is |
|---|---|---|
| 💻 Website | http://localhost:5173 | The React site, open this one! |
| ⚙️ API | http://localhost:4000/api/health | The TypeScript backend |

Open **http://localhost:5173** and you should see the pink CodElle home page 🎀

To stop it, click in the terminal and press **Ctrl + C**.

---

## 🗺️ The Workshop

Go to **http://localhost:5173/workshop** to see the mission map. You'll build one page per mission:

| # | Page | File you edit | Guide | You'll learn |
|---|------|---------------|-------|--------------|
| 0 | Home *(done for you!)* | `client/src/pages/HomePage.tsx` | read it as an example | JSX, components, props |
| 1 | 🌸 About | `client/src/pages/AboutPage.tsx` | [01-about-page.md](docs/workshop/01-about-page.md) | Interfaces, props, `.map()` |
| 2 | 👯‍♀️ Team | `client/src/pages/TeamPage.tsx` | [02-team-page.md](docs/workshop/02-team-page.md) | Lists, keys, optional fields |
| 3 | 📅 Events | `client/src/pages/EventsPage.tsx` | [03-events-page.md](docs/workshop/03-events-page.md) | `useState`, `useEffect`, `fetch` |
| 4 | 💌 Contact | `client/src/pages/ContactPage.tsx` | [04-contact-page.md](docs/workshop/04-contact-page.md) | Forms, events, POST requests |
| ⭐ | Bonus | `server/src/routes/` | [05-bonus-backend.md](docs/workshop/05-bonus-backend.md) | Express routes |

Each page file starts with a 🚧 placeholder and **step-by-step comments** at the top. Follow the guide, save, and watch the browser update!

**Stuck?** Every page has a finished version in `client/src/solutions/`. To see one in the browser, set it to `true` in `client/src/workshop.ts`:

```ts
export const showSolution = { about: true, team: false, events: false, contact: false };
```

👩‍🏫 **Leading the workshop?** Read the [Instructor Guide](docs/workshop/00-instructor-guide.md).

---

## 📁 Project structure

```
CodElle_Website/
├── client/                    React frontend
│   └── src/
│       ├── pages/             👩‍💻 YOUR pages: you edit these!
│       ├── solutions/         ✅ finished versions of each page
│       ├── components/        reusable pieces (Navbar, Footer, Card…)
│       ├── data/              ✏️ site text: about, team, highlights
│       ├── api/client.ts      functions that talk to the backend
│       ├── styles/global.css  🎨 the pink theme (change the colours at the top!)
│       ├── workshop.ts        solution on/off switches
│       └── App.tsx            the routes (which URL shows which page)
├── server/                    TypeScript backend
│   └── src/
│       ├── index.ts           starts the Express server
│       ├── routes/            /api/events and /api/contact
│       └── data/events.ts     ✏️ the list of events
├── shared/types.ts            types shared by client + server
└── docs/workshop/             📚 step-by-step mission guides
```

## 🔌 API endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/health` | Is the server alive? |
| GET | `/api/events` | All events (add `?category=workshop` to filter) |
| GET | `/api/events/:id` | One event |
| POST | `/api/contact` | Send a message `{ name, email, message }` |
| GET | `/api/contact` | See the messages received (stored in memory) |

## 🛠️ Useful commands

Run these from the main folder:

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the website + server |
| `npm run typecheck` | Ask TypeScript to check every file for mistakes |
| `npm run build` | Build a production version |

## ✏️ Updating the content

All the text comes from small data files, so you never have to dig through the code:

- `client/src/data/site.ts`: name, tagline, intro, Instagram link
- `client/src/data/about.ts`: mission and values
- `client/src/data/team.ts`: committee members
- `server/src/data/events.ts`: events

---

Made with 💖 by the CodElle community
