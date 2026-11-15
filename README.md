<p align="center">
  <img src="docs/logo.png" alt="CodElle logo" width="160" />
</p>

# CodElle Website

The website of **CodElle**, a student association at Concordia University that runs coding workshops for girls ([@codelleworkshops](https://www.instagram.com/codelleworkshops/)).

The site is built by our members during a React & TypeScript workshop. Once finished, it also serves as a portfolio piece for our sponsorship team: it shows companies what CodElle members can build, and invites them to partner with us.

| Part | Tech | Folder |
|------|------|--------|
| Frontend | React, TypeScript, Vite | `client/` |
| Backend | Node.js, Express, TypeScript | `server/` |
| Shared types | TypeScript | `shared/types.ts` |

Contact: [codelleconcordia@gmail.com](mailto:codelleconcordia@gmail.com)

---

## Setup

### 1. Install the tools (one time only)

| Tool | Download | Check it works |
|------|----------|----------------|
| Node.js, v18 or newer (pick "LTS") | https://nodejs.org | `node -v` |
| Git | https://git-scm.com/downloads | `git --version` |
| VS Code | https://code.visualstudio.com | |

To open a terminal in VS Code, use the menu **Terminal → New Terminal**.

### 2. Download the project

```bash
git clone https://github.com/CodElleWorkshops/CodElle_Website.git
cd CodElle_Website
```

No Git? On the GitHub page, click **Code → Download ZIP**, unzip it, and open the folder in VS Code.

### 3. Install the packages

From the main `CodElle_Website` folder:

```bash
npm install
```

This installs everything for both the client and the server. It can take a minute.

### 4. Start the website

```bash
npm run dev
```

This starts two things at once:

| | URL | What it is |
|---|---|---|
| Website | http://localhost:5173 | The React site. Open this one. |
| API | http://localhost:4000/api/health | The TypeScript backend |

To stop it, click in the terminal and press **Ctrl + C**.

---

## The workshop

Open http://localhost:5173/workshop (also linked in the footer) to see the mission map. Each mission is one page of the site:

| # | Page | File you edit | Guide | Concepts |
|---|------|---------------|-------|----------|
| 0 | Home (already done) | `client/src/pages/HomePage.tsx` | read it as an example | JSX, components, props |
| 1 | About | `client/src/pages/AboutPage.tsx` | [01-about-page.md](docs/workshop/01-about-page.md) | Interfaces, props, `.map()` |
| 2 | Team | `client/src/pages/TeamPage.tsx` | [02-team-page.md](docs/workshop/02-team-page.md) | Lists, keys, optional fields |
| 3 | Events | `client/src/pages/EventsPage.tsx` | [03-events-page.md](docs/workshop/03-events-page.md) | `useState`, `useEffect`, `fetch` |
| 4 | Contact | `client/src/pages/ContactPage.tsx` | [04-contact-page.md](docs/workshop/04-contact-page.md) | Forms, events, POST requests |
| + | Bonus | `server/src/routes/` | [05-bonus-backend.md](docs/workshop/05-bonus-backend.md) | Express routes |

Each page file starts with an "under construction" placeholder and numbered steps in a comment at the top. Follow the guide, save, and the browser updates.

The **Partners** page (`client/src/pages/PartnersPage.tsx`) is already finished, so the site can be shown to companies at any time.

**Stuck?** Every mission has a finished version in `client/src/solutions/`. To show one in the browser, set it to `true` in `client/src/workshop.ts`:

```ts
export const showSolution = { about: true, team: false, events: false, contact: false };
```

Leading the workshop? Read the [Instructor Guide](docs/workshop/00-instructor-guide.md).

---

## Contributing

Nobody pushes straight to `main`. Make a branch, open a pull request, and get **one approval** plus passing checks before merging. The step-by-step version is in [CONTRIBUTING.md](CONTRIBUTING.md).

## Continuous integration and deployment

| When | What happens | Where |
|------|--------------|-------|
| A pull request is opened or updated | GitHub checks that the code type-checks and builds | `.github/workflows/ci.yml` |
| A pull request is merged into `main` | Render rebuilds and publishes the live site once the checks pass | `render.yaml` |

In production, the Express server also serves the built React site, so the whole website runs as a single app. To try that locally:

```bash
npm run build
NODE_ENV=production npm start   # then open http://localhost:4000
```

### Contact form on the live site

On the live site, contact messages are emailed to codelleconcordia@gmail.com through [Formspree](https://formspree.io):

1. Sign up at formspree.io with the CodElle Gmail and create a form. Its address looks like `https://formspree.io/f/abcd1234`.
2. In Render, open the service → **Environment** and set `FORMSPREE_FORM_ID` to the last part (`abcd1234`). Render also asks for it the first time you deploy.

Until it's set, the live form asks visitors to email us instead, so no message is lost.

## Project structure

```
CodElle_Website/
├── client/                    React frontend
│   ├── public/logo.png        the CodElle logo
│   └── src/
│       ├── pages/             the pages you build in the workshop
│       ├── solutions/         finished versions of each mission
│       ├── components/        Navbar, Footer, Window (the logo-style card)
│       ├── data/              site text: about, team, partners
│       ├── api/client.ts      functions that talk to the backend
│       ├── styles/global.css  theme (logo colours are at the top)
│       ├── workshop.ts        solution on/off switches
│       └── App.tsx            routes: which URL shows which page
├── server/                    TypeScript backend
│   └── src/
│       ├── index.ts           starts the Express server
│       ├── routes/            /api/events and /api/contact
│       └── data/events.ts     the list of events
├── shared/types.ts            types shared by client and server
├── .github/workflows/ci.yml   automatic checks on every pull request
├── render.yaml                deployment settings for Render
└── docs/workshop/             step-by-step mission guides
```

## API

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/health` | Check the server is running |
| GET | `/api/events` | All events. Add `?category=workshop` to filter |
| GET | `/api/events/:id` | One event |
| POST | `/api/contact` | Send a message: `{ name, email, organization?, message }`. On the live site it's emailed to us through Formspree. |
| GET | `/api/contact` | Messages received so far. **On your laptop only**: switched off on the live site so nobody can read them. |

## Commands

Run these from the main folder:

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the website and the server |
| `npm run typecheck` | Check every file for TypeScript errors |
| `npm run build` | Build a production version |
| `npm start` | Run the production build (after `npm run build`) |

## Updating the content

All the text lives in small data files, so there's no need to dig through the code:

- `client/src/data/site.ts`: name, tagline, intro, email, Instagram
- `client/src/data/about.ts`: mission and values
- `client/src/data/team.ts`: executive team
- `client/src/data/partners.ts`: sponsorship offers and current partners
- `server/src/data/events.ts`: events
