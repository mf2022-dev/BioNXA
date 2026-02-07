# 🚀 BioNXA Deployment Guide

## PHASE 1: SET UP SUPABASE (15 minutes)

### Step 1: Create Supabase Project
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign in with GitHub
4. Click "New Project"
5. Fill in details:
   - **Name:** bionxa-platform
   - **Database Password:** (generate strong password - SAVE THIS!)
   - **Region:** Choose closest to your users (Saudi Arabia → Singapore or Mumbai)
   - **Pricing Plan:** Free (for now)
6. Click "Create new project"
7. Wait 2-3 minutes for setup

### Step 2: Get Your Credentials
1. In your Supabase dashboard, click "Settings" (gear icon)
2. Click "API" in the left menu
3. **COPY THESE VALUES:**
   - **Project URL:** `https://xxxxx.supabase.co`
   - **anon/public key:** `eyJhbG...` (long string)
4. Save these somewhere safe!

### Step 3: Run Database Schema
1. In Supabase dashboard, click "SQL Editor" in left menu
2. Click "New Query"
3. Copy ALL content from `supabase/schema.sql` in your project
4. Paste into SQL editor
5. Click "Run" button
6. Wait for "Success" message
7. Verify tables created: Click "Table Editor" → should see 6 tables

### Step 4: Configure OAuth Providers

#### Google OAuth:
1. Go to https://console.cloud.google.com
2. Create new project: "BioNXA Platform"
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Application type: "Web application"
6. Name: "BioNXA Web"
7. Authorized redirect URIs:
   - `https://YOUR_SUPABASE_PROJECT_ID.supabase.co/auth/v1/callback`
8. Copy Client ID and Client Secret
9. In Supabase: Settings → Authentication → Providers → Google
10. Enable Google, paste Client ID and Secret
11. Save

#### GitHub OAuth:
1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in:
   - **Application name:** BioNXA Platform
   - **Homepage URL:** `https://bionxa.vercel.app`
   - **Authorization callback URL:** `https://YOUR_SUPABASE_PROJECT_ID.supabase.co/auth/v1/callback`
4. Click "Register application"
5. Copy Client ID
6. Click "Generate a new client secret"
7. Copy Client Secret
8. In Supabase: Settings → Authentication → Providers → GitHub
9. Enable GitHub, paste Client ID and Secret
10. Save

#### Apple OAuth (Optional - more complex):
- Requires Apple Developer account ($99/year)
- Skip for now, can add later

---

## PHASE 2: DEPLOY TO VERCEL (10 minutes)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
- Enter your email
- Click verification link in email

### Step 3: Deploy Project
```bash
cd /home/user/webapp/training-platform
vercel
```

**Follow prompts:**
- Set up and deploy? **Y**
- Which scope? (Choose your account)
- Link to existing project? **N**
- Project name? **bionxa-platform** (or press Enter)
- Directory? **./** (press Enter)
- Override settings? **N**

### Step 4: Add Environment Variables
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
```
- Paste your Supabase URL
- Environments: Production, Preview, Development (select all)

```bash
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
```
- Paste your Supabase anon key
- Environments: Production, Preview, Development (select all)

```bash
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
```
- Paste your Google Analytics ID (or skip for now)
- Environments: Production, Preview, Development (select all)

### Step 5: Deploy to Production
```bash
vercel --prod
```

**Wait 2-3 minutes for deployment...**

### Step 6: Get Your Live URL
After deployment completes, you'll see:
```
✅ Production: https://bionxa-platform.vercel.app
```

---

## VERIFICATION CHECKLIST

### Test Your Live Site:
- [ ] Visit your Vercel URL
- [ ] Homepage loads correctly
- [ ] Click "Sign In" → redirects to `/auth`
- [ ] Click "Continue with Google"
- [ ] Complete Google sign-in
- [ ] Redirected to dashboard
- [ ] See your profile in dashboard
- [ ] Check Privacy Policy page
- [ ] Check Terms page
- [ ] Check Pricing page
- [ ] Test Arabic version (/ar)

### If Something Doesn't Work:
1. Check Vercel deployment logs: `vercel logs`
2. Check Supabase logs: Dashboard → Logs
3. Check browser console for errors
4. Verify environment variables: `vercel env ls`

---

## CUSTOM DOMAIN (Optional - 5 minutes)

### Step 1: Add Domain in Vercel
```bash
vercel domains add bionxa.com
```

### Step 2: Update DNS
Add these records to your domain DNS:
- **Type:** A
- **Name:** @
- **Value:** 76.76.21.21

- **Type:** CNAME
- **Name:** www
- **Value:** cname.vercel-dns.com

### Step 3: Wait for DNS Propagation (5-60 minutes)

---

## POST-DEPLOYMENT

### Update OAuth Redirect URLs:
After deployment, update callback URLs in:
1. **Google Cloud Console:**
   - Add: `https://YOUR_VERCEL_URL.vercel.app/auth/callback`
2. **GitHub OAuth:**
   - Add: `https://YOUR_VERCEL_URL.vercel.app/auth/callback`

### Share Your Platform:
Your platform is now live at:
- **Main URL:** https://bionxa-platform.vercel.app
- **English:** https://bionxa-platform.vercel.app/en
- **Arabic:** https://bionxa-platform.vercel.app/ar

---

## TROUBLESHOOTING

### "Supabase connection failed"
- Verify environment variables are set
- Check Supabase project is active
- Verify credentials are correct

### "OAuth redirect mismatch"
- Update callback URLs in Google/GitHub to match your Vercel URL
- Include Supabase callback URL too

### "Build failed on Vercel"
- Check build logs: `vercel logs`
- Verify all dependencies installed
- Try local build first: `npm run build`

---

## QUICK REFERENCE

### Vercel Commands:
```bash
vercel               # Deploy to preview
vercel --prod        # Deploy to production
vercel logs          # View deployment logs
vercel env ls        # List environment variables
vercel domains       # Manage domains
```

### Supabase Dashboard:
- **URL:** https://app.supabase.com
- **Tables:** Table Editor
- **SQL:** SQL Editor
- **Auth:** Authentication → Users
- **Logs:** Logs & Reports

---

## NEXT STEPS AFTER DEPLOYMENT

1. ✅ Test all features on live site
2. ✅ Share with beta users
3. ✅ Monitor Supabase usage
4. ✅ Add Google Analytics tracking
5. ✅ Start adding content (Phase 2)

---

**Ready to go live!** 🚀
