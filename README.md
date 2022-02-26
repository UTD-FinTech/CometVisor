# Comet Visor

Production: https://cometvisor.vercel.app/

## Developer Setup

1. Download the .env.local file from FinTech UTD Slack
2. Place it in the root of the directory (i.e. same level as this README)
3. Run `npm install`
4. Run `npm run dev` to start
5. After pushing a change, you can run `https://pull.git.ci/process/sunnyguan/CometVisor` and wait a few minutes for it to deploy to Vercel

## Notes

### Structure

Pages that are standalone should be placed in `pages/`. Currently we only have the login page (`index.js`) and main dashboard (`dashboard.js`) with various tabs. Tab contents are stored in `components/`. API routes should be placed in `pages/api/`, there are some example code in there that are not relevant to Comet Visor.

We're currently using TailwindCSS for styling and Prettier for code formatting.

### Tasks

Features:

1. Work on dashboard components (home, informatives, etc)
2. Work on API routes

Chores:

1. Create FinTechUTD Vercel account for deployment
2. Use FinTechUTD Gmail account for Firebase auth
3. Setup Firebase Cloud Firestore connection
4. Setup colors/colorscheme in tailwind config
5. Prettier config

### Workflow

1. Create a new branch `git checkout -b feature/home-page-portfolio`
2. Work on feature on localhost, use `next` for starting debug server since it reloads on save
3. Commit often `git commit -m "home page portfolio template complete"`
4. Push to remote: `git push --set-upstream origin feature/home-page-portfolio`
5. Check preview deployment on Vercel (TODO)
6. Create pull request on GitHub
7. Complete code review process
8. Merge and check production deployment on Vercel at the production URL above
