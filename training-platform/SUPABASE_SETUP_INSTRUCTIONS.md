# 🚀 SUPABASE SETUP - STEP-BY-STEP GUIDE

## ⏱ Total Time: ~15 minutes

---

## ✅ **STEP 1: Create Supabase Project** (5 minutes)

### 1.1 Create Account & Project

1. **Go to**: https://supabase.com
2. **Click**: "Start your project" → Sign up with GitHub
3. **Create New Project**:
   - **Organization**: Create new or select existing
   - **Project Name**: `bionxa-learning-platform`
   - **Database Password**: (Generate strong password - **SAVE IT!**)
   - **Region**: Select closest to your users:
     - US East (Ohio) - for North America
     - Europe (Frankfurt) - for Europe/Middle East
     - Asia Pacific (Singapore) - for Asia
   - **Pricing Plan**: Free (0 USD/month)

4. **Click**: "Create new project"
5. **⏳ Wait**: 2-3 minutes for database provisioning

---

## ✅ **STEP 2: Get Your Credentials** (2 minutes)

### 2.1 Find Your Project Settings

Once your project is ready:

1. **Navigate to**: Settings (gear icon in left sidebar) → **API**
2. **Copy these values** (keep them safe!):

   ```
   Project URL: https://xxxxxxxxxxxxx.supabase.co
   anon/public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. **✍️ ACTION**: Copy both values - you'll need them in Step 5!

---

## ✅ **STEP 3: Run Database Schema** (3 minutes)

### 3.1 Open SQL Editor

1. **Navigate to**: SQL Editor (database icon in left sidebar)
2. **Click**: "New query"
3. **Copy the entire SQL** from `/home/user/webapp/training-platform/supabase/schema.sql`
4. **Paste** into the SQL Editor
5. **Click**: "Run" (or press `Ctrl+Enter`)

### 3.2 Verify Success

You should see:
```
Success. No rows returned
```

This creates:
- ✅ 6 tables: user_profiles, course_progress, achievements, certificates, learning_sessions, user_settings
- ✅ Row Level Security (RLS) policies
- ✅ Auto-profile creation trigger
- ✅ Indexes for performance
- ✅ Dashboard statistics view

---

## ✅ **STEP 4: Configure OAuth Providers** (5 minutes)

### 4.1 Enable OAuth in Supabase

1. **Navigate to**: Authentication → Providers
2. **Enable these providers**:

#### A. **Google OAuth** (Recommended - Start Here!)

1. **In Supabase**: Find "Google" → Click "Enable"
2. **Copy the Callback URL** shown: `https://xxxxx.supabase.co/auth/v1/callback`

**Now go to Google Cloud Console:**

3. **Go to**: https://console.cloud.google.com
4. **Create/Select Project**: "BioNXA"
5. **Navigate to**: APIs & Services → OAuth consent screen
   - User Type: **External**
   - App Name: **BioNXA Learning Platform**
   - User support email: Your email
   - Developer contact: Your email
   - Click **Save and Continue**

6. **Navigate to**: Credentials → Create Credentials → OAuth 2.0 Client ID
   - Application type: **Web application**
   - Name: **BioNXA Auth**
   - Authorized JavaScript origins:
     - `https://xxxxx.supabase.co`
     - `http://localhost:3000` (for local testing)
   - Authorized redirect URIs:
     - **Paste the Supabase callback URL** from step 2
   - Click **Create**

7. **Copy** the Client ID and Client Secret
8. **Paste** into Supabase Google provider settings
9. **Click**: "Save"

---

#### B. **GitHub OAuth** (Quick & Easy!)

1. **In Supabase**: Find "GitHub" → Click "Enable"
2. **Copy the Callback URL**: `https://xxxxx.supabase.co/auth/v1/callback`

**Now go to GitHub:**

3. **Go to**: https://github.com/settings/developers
4. **Click**: "New OAuth App"
   - Application name: **BioNXA Learning Platform**
   - Homepage URL: `https://bionxa.vercel.app` (or your domain)
   - Authorization callback URL: **Paste Supabase callback URL**
   - Click **Register application**

5. **Copy** Client ID
6. **Generate** new client secret → **Copy** it
7. **Paste** both into Supabase GitHub provider settings
8. **Click**: "Save"

---

#### C. **Apple OAuth** (Optional - Complex Setup)

⚠️ **Skip this for now** - Apple requires:
- Apple Developer Account ($99/year)
- Domain verification
- Complex key configuration

You can add it later if needed.

---

## ✅ **STEP 5: Configure Environment Variables** (2 minutes)

### 5.1 Update .env.local

**Tell me when you've completed Steps 1-4**, and I'll create the `.env.local` file with your credentials!

**You'll need:**
- ✅ Supabase Project URL (from Step 2)
- ✅ Supabase Anon Key (from Step 2)
- ✅ Google Client ID & Secret (from Step 4A)
- ✅ GitHub Client ID & Secret (from Step 4B)

---

## 🎯 **VERIFICATION CHECKLIST**

Before proceeding, verify:

- [ ] Supabase project is **ACTIVE** (green status)
- [ ] Database schema executed successfully (6 tables created)
- [ ] **Google OAuth** configured and enabled
- [ ] **GitHub OAuth** configured and enabled
- [ ] You have copied all credentials

---

## 🆘 **TROUBLESHOOTING**

### Problem: SQL Schema Fails

**Solution**: Make sure you're running it in the **SQL Editor**, not the Table Editor.

### Problem: OAuth Redirect Mismatch

**Solution**: Double-check the callback URL matches exactly:
```
https://your-project.supabase.co/auth/v1/callback
```

### Problem: Google OAuth Not Working

**Solution**: 
1. Enable **Google+ API** in Google Cloud Console
2. Add test users in OAuth consent screen during development

---

## 📞 **NEXT STEPS**

Once you've completed Steps 1-4, tell me:

```
"Done! Here are my credentials:"
Project URL: [paste here]
Anon Key: [paste here]
Google Client ID: [paste here]
Google Client Secret: [paste here]
GitHub Client ID: [paste here]
GitHub Client Secret: [paste here]
```

And I'll immediately:
1. Create your `.env.local` file
2. Test the authentication locally
3. Deploy to Vercel
4. Give you your live URL! 🎉

---

## ⏰ **TIME ESTIMATE**

- ✅ Step 1 (Supabase Account): **5 min**
- ✅ Step 2 (Get Credentials): **2 min**
- ✅ Step 3 (Database Schema): **3 min**
- ✅ Step 4 (OAuth Setup): **5 min**
  - Google: 3 min
  - GitHub: 2 min
- ✅ Step 5 (I'll do this for you): **2 min**

**Total: ~15 minutes** ⏱

---

## 🎉 **YOU'RE DOING GREAT!**

Take your time with OAuth setup - it's the most important part.

**Remember**: I'm here to help if you get stuck! Just describe what you're seeing and I'll guide you through it.

**Ready? Let's go! Start with Step 1!** 🚀
