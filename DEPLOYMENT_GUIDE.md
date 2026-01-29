# Quick Reference: Commands & Deployment

## 📦 BUILD & DEPLOYMENT

### Generate Sitemaps + Build
```bash
npm run build
```
This automatically:
1. Generates `public/sitemap-services.xml` from services.js
2. Builds optimized production bundle
3. Outputs to `dist/` directory

### Development Mode
```bash
npm run dev
```
Starts Vite dev server on http://localhost:5173

### Preview Production Build
```bash
npm run preview
```
Serves the `dist/` folder locally

### Manual Sitemap Generation (if needed)
```bash
npm run generate:sitemap
```
Creates/updates `public/sitemap-services.xml` only

---

## 🚀 DEPLOYMENT TO VERCEL

### First-Time Setup
```bash
npm install -g vercel
vercel login
vercel link  # Link to your Vercel project
```

### Deploy
```bash
npm run build      # Generate sitemaps + build
git add .
git commit -m "SEO upgrade complete"
git push origin main
# Vercel auto-deploys on push to main
```

### Or Manual Vercel Deploy
```bash
npm run build
vercel --prod
```

---

## 🔍 POST-DEPLOYMENT CHECKS

### 1. Verify Sitemaps Accessible
```bash
curl https://bharatapply.online/sitemap.xml
curl https://bharatapply.online/sitemap-services.xml
curl https://bharatapply.online/robots.txt
```

### 2. Check Search Console
1. Go to Google Search Console
2. Select BharatApply property
3. Submit both sitemaps:
   - sitemap.xml
   - sitemap-services.xml
4. Check "Coverage" report for any errors

### 3. Lighthouse Audit
```bash
# In Chrome DevTools:
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Click "Generate report"
# 4. Check Performance, SEO, Best Practices, Accessibility scores
```

Target scores:
- Performance: 85+
- SEO: 100
- Best Practices: 90+
- Accessibility: 90+

### 4. Test Meta Tags & Schema
Use these tools:
- **SEO**: https://www.seochat.com/seo-tools/google-rich-snippets/
- **OG Tags**: https://www.opengraphcheck.com/
- **Schema**: https://schema.org/validator/
- **Mobile**: https://search.google.com/test/mobile-friendly

---

## 📊 MONITORING

### Google Search Console
- Check Index Coverage daily for first week
- Monitor Core Web Vitals
- Track Search Analytics for impressions/clicks

### Vercel Analytics
- Vercel Dashboard > Deployments
- Check function execution times
- Monitor serverless function logs

### Manual Crawl Check
```bash
# Simulate Google crawler (requires netloc tools)
curl -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1)" \
  https://bharatapply.online/
```

---

## 🔧 FILE LOCATIONS

### Configuration Files
- `vercel.json` - Vercel deployment config (headers, rewrites)
- `package.json` - Scripts and dependencies
- `.eslintrc` - Linting rules

### SEO Components & Utils
- `src/utils/seoSchemas.js` - JSON-LD schema generators
- `src/utils/pageMetadata.js` - Page metadata definitions
- `src/components/SEOHead.jsx` - Meta tag component
- `src/components/Footer.jsx` - Footer with trust signals

### Static Assets
- `public/sitemap.xml` - Main sitemap (committed)
- `public/sitemap-services.xml` - Generated (add to .gitignore if needed)
- `public/robots.txt` - Robots protocol
- `public/og-image.svg` - Open Graph image
- `public/favicon.svg` - Site icon

### Documentation
- `SEO_UPGRADE_SUMMARY.md` - Complete overview
- `SEO_UPGRADE_CHECKLIST.md` - Detailed implementation checklist

---

## 💡 TIPS FOR UPDATES

### When Adding New Services
1. Update `src/data/services.js` with new service
2. Run `npm run generate:sitemap` to add to sitemap
3. New service automatically accessible via `/?service=SERVICE-ID`

### When Updating Metadata
1. Edit `src/utils/pageMetadata.js`
2. Update corresponding page component
3. Rebuild and deploy

### When Adding New Pages
1. Create new route in `src/App.jsx`
2. Create component in `src/components/`
3. Add metadata to `src/utils/pageMetadata.js`
4. Import and use `<SEOHead />` in component
5. Use `<Footer />` component
6. Rebuild and redeploy

---

## 🆘 TROUBLESHOOTING

### Sitemap Not Generated
```bash
# Check if node can read services.js
node -e "import('./src/data/services.js').then(m => console.log(m.services.length))"

# Manually regenerate
npm run generate:sitemap

# Check output
ls -la public/sitemap*
```

### Schema Validation Errors
1. Go to https://schema.org/validator/
2. Enter your URL
3. Check for red errors (not warnings)
4. Fix in `seoSchemas.js` if needed

### Lighthouse Performance Low
1. Check Core Web Vitals in Google Search Console
2. Verify font preload is working
3. Check that analytics is deferred (3s delay in main.jsx)
4. Look for unoptimized images in DevTools

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install

# Try building again
npm run build
```

---

## 📞 QUICK SUPPORT

### Schema Questions
- Refer to `src/utils/seoSchemas.js` comments
- Visit https://schema.org for specifications
- Test at https://schema.org/validator/

### Performance Questions
- Check https://web.dev/performance/
- Use https://PageSpeed.web.dev for detailed reports

### SEO Best Practices
- Google SEO Starter Guide: https://developers.google.com/search/docs
- Lighthouse Guide: https://developers.google.com/web/tools/lighthouse

---

## ✅ FINAL CHECKLIST BEFORE LAUNCH

- [ ] Ran `npm run build` successfully
- [ ] Verified sitemap-services.xml created
- [ ] All imports resolved (no red squiggles in IDE)
- [ ] Tested local build with `npm run preview`
- [ ] Committed changes to git
- [ ] Pushed to main branch
- [ ] Deployment successful on Vercel
- [ ] Verified sitemaps accessible at /sitemap.xml and /sitemap-services.xml
- [ ] Submitted sitemaps in Google Search Console
- [ ] Ran Lighthouse audit (target: Perf 85+, SEO 100)
- [ ] Tested on mobile device
- [ ] Verified meta tags appear in page source
- [ ] Verified schema at schema.org/validator/

---

**You're ready to go live!** 🎉
