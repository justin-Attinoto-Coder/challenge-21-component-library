# Deployment Guide

## Deploy to Vercel (Recommended for Next.js)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub** (already done ✅)

2. **Go to [Vercel](https://vercel.com)**
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your repository: `responsive-design-challenges/challenge-21-component-library`
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   
3. **Done!** Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow the prompts)
vercel

# Deploy to production
vercel --prod
```

---

## Deploy to Netlify

### Option 1: Deploy via Netlify Dashboard

1. **Go to [Netlify](https://www.netlify.com)**
   - Sign in with your GitHub account
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   
2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js (auto-detected)

3. **Add `netlify.toml` configuration** (already created below)

4. **Click "Deploy site"**

### Option 2: Deploy via CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Or deploy directly
netlify deploy --prod
```

---

## Configuration Files

Both platforms should work with the existing `next.config.ts` file. 

For Netlify, a `netlify.toml` file has been created with optimal settings.

---

## Environment Variables

If you add any environment variables later, remember to add them in:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables

---

## Recommended Deployment Platform

**Vercel** is recommended because:
- Created by the Next.js team
- Zero-config for Next.js
- Automatic optimizations
- Built-in edge functions
- Faster builds

**Netlify** is also excellent and works great with Next.js!

---

## Troubleshooting

### Vercel Issues
- Make sure `package.json` has `"type": "module"` removed if present
- Check that all dependencies are in `package.json`

### Netlify Issues  
- Ensure Node.js version is specified in `netlify.toml`
- Check build logs for any missing dependencies

---

## Quick Deploy URLs

After deployment, your sites will be available at:
- **Vercel**: `https://[project-name].vercel.app`
- **Netlify**: `https://[site-name].netlify.app`

You can also set up custom domains in both platforms!
