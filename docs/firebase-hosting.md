# how to park my project from github pages to firebase?

---

To deploy your GitHub project to Firebase Hosting, follow these steps:

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize Firebase in your project:

```bash
firebase init
```

- Select "Hosting"
- Choose your Firebase project or create a new one
- Set "dist" as your public directory (assuming you're using Vite)
- Configure as a single-page app: Yes
- Set up automatic builds and deploys with GitHub: Optional

4. Add a firebase.json file to your project root:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

5. Build your project:

```bash
npm run build
```

6. Deploy to Firebase:

```bash
firebase deploy
```

Your site will be live at <https://your-project-id.web.app>

For automatic deployment from GitHub, you can set up GitHub Actions by adding a workflow file at `.github/workflows/firebase-hosting-merge.yml`:

```yaml
name: Deploy to Firebase Hosting
on:
  push:
    branches: [main]
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-firebase-project-id
```

You'll need to add your Firebase service account as a GitHub secret.
