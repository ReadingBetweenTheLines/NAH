# Deployment Guide

## Quick Fix for 404 Errors

The project has been configured with:
- ✅ Relative asset paths (`base: './'` in vite.config.js)
- ✅ GitHub Pages SPA routing support
- ✅ Proper build configuration

## Deployment Steps

### For GitHub Pages

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Push the `dist` folder to your `gh-pages` branch:**
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```
   
   OR use GitHub Actions (recommended):
   - Create `.github/workflows/deploy.yml` (see below)

3. **In GitHub repository settings:**
   - Go to Settings → Pages
   - Set source to `gh-pages` branch
   - Set folder to `/ (root)`

### For Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

   Vercel will auto-detect Vite and configure correctly.

### For Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add a `netlify.toml` file (see below)

## Troubleshooting 404 Errors

### Common Issues:

1. **Assets not loading:**
   - ✅ Fixed: Using relative paths (`base: './'`)
   - Rebuild: `npm run build`

2. **Routes returning 404:**
   - ✅ Fixed: Added SPA routing script in index.html
   - ✅ Fixed: Added 404.html for GitHub Pages

3. **Base path issues:**
   - If deploying to a subdirectory (e.g., `/nah/`), update `vite.config.js`:
     ```js
     base: '/nah/',
     ```

4. **Check browser console:**
   - Open DevTools → Network tab
   - Identify which resource is 404ing
   - Verify the path is correct

## GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Verify Build

After building, check that `dist/index.html` uses relative paths:
- ✅ `./assets/...` (not `/assets/...`)
- ✅ `./vite.svg` (not `/vite.svg`)

If you see absolute paths, the build configuration needs adjustment.
