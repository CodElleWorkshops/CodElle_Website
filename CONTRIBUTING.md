# Contributing to the CodElle website

Lots of people work on this site, so nobody pushes straight to `main`.
Every change goes through a **pull request** that needs:

1. **The automatic checks to pass.** GitHub runs `npm run typecheck` and `npm run build` for you.
2. **One approval** from another member.

When a pull request is merged, the live website updates by itself a few minutes later.

## Your first pull request: add yourself to the website

Everyone who helps build the site is listed under **Built by our members** on the home page. Each person has their own file, so nobody's change clashes with anyone else's.

1. On GitHub, open `client/src/data/contributors/` and click `talar-mustafa.ts`.
2. Copy its contents. Go back to the folder and click **Add file → Create new file**.
3. Name it after yourself, e.g. `amira-haddad.ts`, paste, and change the name and program. `linkedin` is optional.
4. Click **Commit changes…**, choose **Create a new branch and start a pull request**, then **Propose changes** and **Create pull request**.
5. Wait for the green tick, ask someone to review, and merge once it's approved. A few minutes later your name is on the live site.

## Step by step (GitHub Desktop)

### 1. Get the latest code
Open the project in GitHub Desktop and click **Fetch origin**, then **Pull origin** if it appears.

### 2. Make a branch
Click **Current Branch → New Branch**. Name it after what you're doing, for example:

- `team-page`
- `add-november-events`
- `fix-contact-typo`

### 3. Make your changes
Edit the files in VS Code. Check your work with `npm run dev`.

### 4. Commit
In GitHub Desktop, write a short summary of what you did (e.g. *Build the Team page*) and click **Commit to team-page**.

### 5. Push and open a pull request
Click **Publish branch**, then **Create Pull Request**. GitHub opens in your browser.
Fill in the template, add a screenshot and click **Create pull request**.

### 6. Wait for checks and a review
- A yellow dot means the checks are running. Green tick: all good. Red cross: click **Details** to see the error, fix it, then commit and push again. The pull request updates on its own.
- Ask someone to review it. They might leave comments; push more commits to address them.

### 7. Merge
Once you have a green tick **and** an approval, click **Merge pull request**. Done, and thank you!

## Reviewing someone else's pull request

1. Open the pull request and click the **Files changed** tab.
2. Check that the change does what the description says and doesn't touch unrelated files.
3. Optional but encouraged: in GitHub Desktop, use **Branch → Checkout** on their branch and try it with `npm run dev`.
4. Click **Review changes**, then either **Approve** or **Request changes** with a kind, specific comment.
