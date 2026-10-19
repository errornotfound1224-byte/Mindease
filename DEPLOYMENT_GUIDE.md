# MindEase Deployment Guide

This guide will help you publish your MindEase website to the internet for FREE!

---

## 🌐 Option 1: Deploy to Render (Recommended - FREE)

Render offers free hosting for Node.js applications with MongoDB.

### Prerequisites:
1. GitHub account
2. MongoDB Atlas account (free)

### Step 1: Set Up MongoDB Atlas (Cloud Database)

Your app needs a cloud database to work online.

1. **Go to:** https://www.mongodb.com/cloud/atlas
2. **Sign up** for free account
3. **Create a free cluster:**
   - Click "Build a Database"
   - Select "FREE" tier (M0)
   - Choose a cloud provider (AWS recommended)
   - Select a region close to you
   - Click "Create Cluster"

4. **Create Database User:**
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: `mindease`
   - Password: Generate a strong password (save it!)
   - Database User Privileges: "Read and write to any database"
   - Click "Add User"

5. **Whitelist All IP Addresses:**
   - Go to "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access From Anywhere" (0.0.0.0/0)
   - Click "Confirm"

6. **Get Connection String:**
   - Go to "Database" in left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://mindease:<password>@cluster0.xxxxx.mongodb.net/mindease?retryWrites=true&w=majority`
   - Replace `<password>` with your actual password
   - Save this connection string!

### Step 2: Push Code to GitHub

1. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Repository name: `mindease`
   - Description: "ADHD Screening and Wellness Platform"
   - Make it Public
   - Click "Create repository"

2. **Initialize Git and Push:**

Open PowerShell in your project folder:

```powershell
cd c:\mindease

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - MindEase full-stack application"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/mindease.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You may need to install Git first: https://git-scm.com/download/win

### Step 3: Deploy to Render

1. **Go to:** https://render.com
2. **Sign up** with your GitHub account
3. **Click** "New +" → "Web Service"
4. **Connect your GitHub repository:** `mindease`
5. **Configure the service:**
   - **Name:** `mindease`
   - **Region:** Choose closest to you
   - **Branch:** `main`
   - **Root Directory:** (leave empty)
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free

6. **Add Environment Variables:**
   Click "Advanced" and add:
   
   - **Key:** `MONGODB_URI`
     **Value:** Your MongoDB Atlas connection string
     
   - **Key:** `SESSION_SECRET`
     **Value:** A random secret (e.g., `mY5uP3rS3cR3tK3y2024$#@!`)
     
   - **Key:** `NODE_ENV`
     **Value:** `production`

7. **Click "Create Web Service"**

8. **Wait for deployment** (5-10 minutes)
   - Render will install dependencies
   - Build your application
   - Start the server

9. **Your app is live!**
   - You'll get a URL like: `https://mindease-xxxx.onrender.com`
   - Copy this URL and share it!

### Step 4: Test Your Live Website

1. Open your Render URL in a browser
2. You should see the login page
3. Create an account
4. Test all features:
   - Assessment
   - Habits
   - Focus Timer
   - Dashboard

---

## 🌐 Option 2: Deploy to Railway (Alternative - FREE)

Railway is another excellent free option.

### Steps:

1. **Go to:** https://railway.app
2. **Sign up** with GitHub
3. **Click** "New Project"
4. **Select** "Deploy from GitHub repo"
5. **Choose** your `mindease` repository
6. **Add MongoDB:**
   - Click "New" → "Database" → "Add MongoDB"
   - Railway creates a database automatically
   - Copy the `MONGO_URL` from the MongoDB service
7. **Configure Variables:**
   - Go to your web service
   - Click "Variables"
   - Add:
     - `MONGODB_URI` = Your Railway MongoDB URL
     - `SESSION_SECRET` = Random secret string
     - `NODE_ENV` = production
8. **Deploy!**
   - Your URL: `https://mindease-production.up.railway.app`

---

## 🌐 Option 3: Deploy to Vercel + MongoDB Atlas

Vercel is great for Node.js apps.

1. **Install Vercel CLI:**
```powershell
npm install -g vercel
```

2. **Create vercel.json:**
Already created in your project!

3. **Deploy:**
```powershell
cd c:\mindease
vercel
```

4. **Follow prompts:**
   - Link to existing project? No
   - Project name: mindease
   - Which directory? `./`

5. **Add Environment Variables:**
```powershell
vercel env add MONGODB_URI
vercel env add SESSION_SECRET
vercel env add NODE_ENV
```

6. **Deploy to production:**
```powershell
vercel --prod
```

---

## 🌐 Option 4: Deploy to Heroku (Classic Option)

Heroku is reliable but requires credit card for free tier.

### Steps:

1. **Install Heroku CLI:**
   - Download from: https://devcenter.heroku.com/articles/heroku-cli
   
2. **Login:**
```powershell
heroku login
```

3. **Create app:**
```powershell
cd c:\mindease
heroku create mindease-wellness
```

4. **Add MongoDB:**
```powershell
heroku addons:create mongolab:sandbox
```

Or use MongoDB Atlas and set:
```powershell
heroku config:set MONGODB_URI="your-mongodb-atlas-connection-string"
heroku config:set SESSION_SECRET="your-secret-key"
heroku config:set NODE_ENV=production
```

5. **Deploy:**
```powershell
git push heroku main
```

6. **Open:**
```powershell
heroku open
```

---

## 📱 After Deployment Checklist

Once deployed, test these features:

- [ ] Can access the live URL
- [ ] Login page loads correctly
- [ ] Can create a new account
- [ ] Can login with credentials
- [ ] Dashboard displays properly
- [ ] Can complete assessment
- [ ] Can create habits
- [ ] Can use focus timer
- [ ] All images and styles load
- [ ] Mobile version works
- [ ] Data persists after logout and login

---

## 🔧 Troubleshooting

### "Cannot connect to database"
- Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0)
- Verify connection string is correct
- Make sure password doesn't contain special characters (use letters/numbers)

### "Application Error"
- Check deployment logs in Render/Railway/Vercel
- Verify all environment variables are set
- Make sure `NODE_ENV=production`

### "Session not persisting"
- Check that SESSION_SECRET is set
- Verify trust proxy is enabled for production

### "Styles not loading"
- Clear browser cache
- Check if CSS files are included in git commit
- Verify static file serving in server.js

---

## 🎉 Share Your Live Website!

Once deployed, you can share your link:

**Your Live URL will be something like:**
- Render: `https://mindease-xxxx.onrender.com`
- Railway: `https://mindease-production.up.railway.app`
- Vercel: `https://mindease-xxxx.vercel.app`
- Heroku: `https://mindease-wellness.herokuapp.com`

**Share it with:**
- Professors and classmates
- On your resume
- In your portfolio
- On LinkedIn
- With potential employers

---

## 💡 Pro Tips

1. **Custom Domain:**
   - Buy a domain (e.g., mindease.app)
   - Connect it in Render/Railway/Vercel settings
   - Free SSL certificate included!

2. **Environment-Specific Settings:**
   - Development uses local MongoDB
   - Production uses MongoDB Atlas
   - Configured in .env file

3. **Monitor Your App:**
   - Check Render/Railway dashboard for uptime
   - View logs for errors
   - Monitor free tier usage

4. **Keep It Free:**
   - Render Free: 750 hours/month
   - Railway Free: $5 credit/month
   - MongoDB Atlas Free: 512MB storage
   - Enough for student projects!

---

## 📊 Performance Tips for Production

Your deployed app will automatically:
- ✅ Use production MongoDB
- ✅ Enable secure cookies
- ✅ Use HTTPS
- ✅ Compress responses
- ✅ Cache static files
- ✅ Rate limit API requests

---

## 🎓 For Your Resume/Portfolio

**Project Title:**
MindEase - ADHD Screening & Wellness Platform

**Live Demo:**
[Your deployed URL]

**Technologies:**
Node.js, Express.js, MongoDB, JavaScript, HTML5, CSS3

**Features:**
- Full-stack web application
- Secure authentication with bcrypt
- RESTful API design
- Real-time habit tracking
- Focus timer with Pomodoro technique
- Progress analytics with data visualization
- Responsive design for all devices

**GitHub:**
https://github.com/YOUR_USERNAME/mindease

---

## ✅ Recommended: Deploy to Render

**Why Render?**
- ✅ 100% Free for students
- ✅ Easy GitHub integration
- ✅ Automatic deployments
- ✅ Free SSL/HTTPS
- ✅ Good performance
- ✅ MongoDB support
- ✅ No credit card required

**Start here:** https://render.com

**Good luck with your deployment! 🚀**
