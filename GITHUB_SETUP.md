# How to Push Code to GitHub & Set Up for Open Source

## Step 1: Initial GitHub Setup

### 1.1 Configure Git (if not done)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 1.2 Initialize Git Repository

```bash
cd /c/Users/HP/Desktop/eStore
git init
git add .
git commit -m "chore: initial project setup"
```

## Step 2: Connect to GitHub Repository

### 2.1 Add Remote Repository

```bash
git remote add origin https://github.com/chethanac15/eStore.git
```

### 2.2 Verify Remote

```bash
git remote -v
```

Should show:

```
origin  https://github.com/chethanac15/eStore.git (fetch)
origin  https://github.com/chethanac15/eStore.git (push)
```

## Step 3: Push Code to GitHub

### 3.1 Set Default Branch and Push

```bash
git branch -M main
git push -u origin main
```

### 3.2 Verify Push

Visit: https://github.com/chethanac15/eStore

You should see all files and folders.

## Step 4: Configure GitHub Repository Settings

### 4.1 Go to Settings

1. Navigate to: https://github.com/chethanac15/eStore/settings
2. Configure the following:

### 4.2 General Settings

- **Repository name**: eStore ✓
- **Description**: Open-source e-commerce platform for electrical components
- **Website**: (optional) Your deployed URL
- **Default branch**: main
- **Visibility**: Public ✓

### 4.3 Branch Protection Rules

1. Go to Settings → Branches
2. Add rule for `main` branch:
   - ✅ Require a pull request before merging
   - ✅ Dismiss stale PR approvals
   - ✅ Require status checks to pass:
     - `lint-backend`
     - `test-backend`
     - `lint-frontend`
     - `test-frontend`
   - ✅ Require branches to be up to date
   - ✅ Require code reviews (1 approval)
   - ✅ Require conversation resolution

### 4.4 Actions Settings

1. Go to Settings → Actions → General
2. Set:
   - **Actions permissions**: Allow all actions and reusable workflows
   - **Artifact retention**: 30 days
   - **Fork pull request workflows**: Enable

### 4.5 Pull Requests Settings

1. Go to Settings → General → Pull Requests
2. Enable:
   - ✅ Allow auto-merge
   - ✅ Allow squash merging
   - ✅ Allow rebase merging
   - ✅ Automatically delete head branches

### 4.6 Pages (for documentation)

1. Go to Settings → Pages
2. Set:
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: /root

## Step 5: Set Up GitHub Secrets (for CI/CD)

### 5.1 Go to Settings → Secrets and Variables → Actions

Click "New repository secret" for each:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
MONGODB_URI=your_mongodb_uri (optional)
STRIPE_SECRET_KEY=sk_test_...
```

You can skip these for now and add later.

## Step 6: Enable Discussions

1. Go to Settings → General
2. Enable "Discussions" ✅
3. Go to Discussions tab
4. Create discussion categories:
   - Announcements
   - General
   - Ideas
   - Show and Tell

## Step 7: Add Topics

1. Go to repository home (https://github.com/chethanac15/eStore)
2. Click "Add topics" (about section)
3. Add: `ecommerce`, `nodejs`, `react`, `mongodb`, `stripe`, `docker`, `kubernetes`, `open-source`

## Step 8: Update Repository Description

1. Go to About (pencil icon)
2. Add:
   - **Description**: Open-source e-commerce platform for electrical components
   - **Website**: Your deployed URL (if available)
   - **Use topics**: Check all relevant
   - **Include in search results**: ✅

## Step 9: Create GitHub Labels

Labels help organize issues. Go to Issues → Labels → New Label

Suggested labels:

```
Name              Color      Description
---
good first issue  7057ff     Good for newcomers
help wanted       33aa3f     Extra help needed
bug               d73a4a     Something isn't working
feature           a2eeef     New feature request
enhancement       84b6eb     Improvement to existing feature
documentation    0075ca     Documentation improvements
performance      fbca04     Performance improvement
security         ee0701     Security issue
in progress      cccccc     Currently being worked on
blocked           000000     Blocked by something else
needs review      ffd700     Needs code review
ready to merge    00ff00     Ready to merge
duplicate         cccccc     Duplicate issue/PR
invalid           e4e669     Invalid issue/PR
won't fix         ffffff     Won't be fixed
```

## Step 10: Add Code Owners (optional)

Create `.github/CODEOWNERS` file:

```
# Default owners
* @chethanac15

# Backend specific
/backend/ @chethanac15
/k8s/ @chethanac15

# Frontend specific
/frontend/ @chethanac15

# Docs
*.md @chethanac15
/docs/ @chethanac15
```

Commit and push:

```bash
git add .github/CODEOWNERS
git commit -m "docs: add code owners"
git push origin main
```

## Step 11: Create Issue Templates

Already done! Check `.github/ISSUE_TEMPLATE/`

## Step 12: Create Contributing Guide

Already done! Check `CONTRIBUTING.md`

## Step 13: Verify Everything

1. ✅ Repository is public
2. ✅ All files are pushed
3. ✅ README.md looks good
4. ✅ CONTRIBUTING.md is present
5. ✅ LICENSE file is present
6. ✅ GitHub Actions running
7. ✅ Issue templates available
8. ✅ PR template available

## Step 14: First PR from Your Fork (Testing)

To test the workflow:

```bash
# Create a new branch
git checkout -b test/pr-workflow

# Make a small change
echo "# Test PR" >> TEST.md

# Commit and push
git add TEST.md
git commit -m "test: verify PR workflow"
git push origin test/pr-workflow

# Go to GitHub and create PR
```

Then:

1. Watch CI/CD run
2. See test results
3. Get preview link
4. Merge and delete branch

## Step 15: Prepare for Contributors

### Update your README with:

```markdown
## 🚀 Quick Start

See [SETUP.md](SETUP.md) for detailed instructions.

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📝 Issues

Found a bug? Have an idea? [Create an issue](https://github.com/chethanac15/eStore/issues/new)
```

## Step 16: Announce the Project

Share on:

- Twitter
- LinkedIn
- Dev.to
- Product Hunt
- GitHub Discussions
- Reddit (r/golang, r/nodejs, etc.)

## Quick Reference Commands

```bash
# View git status
git status

# Add all changes
git add .

# Commit with message
git commit -m "feat: add new feature"

# Push to main
git push origin main

# Create new branch
git checkout -b feature/name

# Switch branch
git checkout branch-name

# Pull latest changes
git pull origin main

# View branches
git branch -a

# Delete branch
git branch -d branch-name

# View log
git log --oneline -10
```

## Troubleshooting

### "Permission denied (publickey)"

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to GitHub Settings → SSH and GPG keys
# Copy content of ~/.ssh/id_ed25519.pub
```

### "Failed to push"

```bash
# Pull first
git pull origin main

# Then push
git push origin main
```

### "Merge conflicts"

```bash
# Open files with <<< and >>> markers
# Edit to keep desired changes
git add .
git commit -m "fix: resolve merge conflicts"
git push origin branch-name
```

## Next Steps

1. ✅ Monitor GitHub Actions
2. ✅ Respond to issues
3. ✅ Review PRs
4. ✅ Update documentation
5. ✅ Release versions regularly
6. ✅ Keep dependencies updated

## Resources

- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Actions](https://github.com/features/actions)
- [Open Source Guide](https://opensource.guide)
