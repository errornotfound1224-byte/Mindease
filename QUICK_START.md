# MindEase - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install MongoDB
You need MongoDB to run this application.

**Option A - MongoDB Local:**
- Download from [mongodb.com/download-center/community](https://www.mongodb.com/try/download/community)
- Install and run: `mongod`

**Option B - MongoDB Atlas (Cloud - Recommended for beginners):**
- Create free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster (free tier available)
- Get your connection string
- Update `MONGODB_URI` in `.env` file

### Step 2: Configure Environment
The `.env` file has been created for you. Edit it if needed:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mindease
SESSION_SECRET=your-super-secret-session-key-change-this-in-production
```

For MongoDB Atlas, use:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mindease
```

### Step 3: Start the Application
```bash
npm start
```

Open your browser to: **http://localhost:5000**

You'll see the login page!

---

## 📱 First Time User Journey

### 1. Create an Account
- Click "Sign up" on the login page
- Fill in your details:
  - Name
  - Email
  - Password (8+ characters, with uppercase, lowercase, and number)
  - Age range (optional)
- Agree to privacy policy
- Click "Create Account"

### 2. Explore the Dashboard
After login, you'll see your personal dashboard with:
- Quick stats (assessments, habits, focus time)
- Quick action buttons
- Today's habits
- Assessment status

### 3. Complete Your First Assessment
- Click "Start Assessment" or "Assessment" in the sidebar
- Read the introduction carefully
- Answer all 25 questions honestly
- You can save progress and return later
- Review your answers before submitting

### 4. Get Your Results & Wellness Plan
- View your results across 5 categories
- Click "Generate Wellness Plan"
- Explore personalized recommendations
- Each recommendation includes:
  - Why it helps
  - Implementation steps
  - Suggested frequency
  - Reflection questions

### 5. Start Tracking
- **Habits:** Create daily habits and track completion
- **Focus Timer:** Start focused work sessions
- **Progress:** View your growth over time

---

## 🎯 Navigation Guide

### Main Pages

**🏠 Dashboard** - Your home base
- Overview of your progress
- Quick access to all features
- Today's habits and stats

**📝 Assessment** - Take the questionnaire
- 25 questions, 5 categories
- Save and resume anytime
- Non-diagnostic screening

**💡 Wellness Plan** - Your recommendations
- Personalized strategies
- Based on your assessment
- Organized by category

**✅ Habit Tracker** - Build routines
- Create custom habits
- Track daily completion
- View patterns

**⏱️ Focus Timer** - Work sessions
- Timed focus periods
- Track total focus time
- Session history

**📈 Progress** - Analytics
- Visual charts
- Habit completion rates
- Assessment comparisons

**📚 Resources** - Learn more
- About ADHD
- When to seek help
- Educational content

**👤 Profile** - Manage account
- View account info
- Delete account
- Settings

---

## 🔒 Important Security Notes

### Passwords
- Minimum 8 characters
- Must include:
  - Uppercase letter (A-Z)
  - Lowercase letter (a-z)
  - Number (0-9)
- Example: `MyPass123`

### Sessions
- You'll stay logged in for 7 days
- Log out when using shared computers
- Sessions are secure (HTTP-only cookies)

### Data Privacy
- Your data is private and secure
- Only you can access your information
- You can delete your account anytime from Profile page

---

## ⚠️ Important Disclaimers

### Not a Diagnostic Tool
MindEase is **NOT** a medical diagnostic tool. It's designed for:
- Personal exploration
- Wellness planning
- Habit building
- Self-awareness

### Seek Professional Help If:
- Difficulties significantly affect daily life
- Symptoms persist for 6+ months
- You want a comprehensive evaluation
- You need treatment options

Only qualified healthcare professionals can diagnose ADHD.

---

## 🛠️ Troubleshooting

### "Cannot connect to MongoDB"
**Solution:** Make sure MongoDB is running
- Local: Start `mongod` in a separate terminal
- Atlas: Check your connection string and IP whitelist

### "Port 5000 already in use"
**Solution:** Change the PORT in `.env` to 3000 or another available port

### "Session not persisting"
**Solution:** 
- Clear browser cookies
- Check MongoDB is connected
- Verify SESSION_SECRET is set in `.env`

### "Cannot register/login"
**Solution:**
- Check password meets requirements
- Look at browser console for errors
- Check server terminal for error messages

---

## 📞 Need Help?

1. Check this guide thoroughly
2. Review the main README.md for detailed documentation
3. Check the browser console (F12) for frontend errors
4. Check the terminal/server logs for backend errors

---

## ✨ Tips for Best Experience

### For Students Demonstrating This Project:
1. Create a test account before presenting
2. Complete one assessment to show the full flow
3. Add a few habits to demonstrate tracking
4. Show the responsive design (resize browser)
5. Highlight the security features (password hashing, sessions)
6. Explain the rule-based vs. AI-ready recommendation engine

### For Development:
- Keep MongoDB running in a separate terminal
- Watch the server terminal for errors
- Use browser DevTools for debugging
- Test on different screen sizes
- Try the full user journey regularly

---

## 🎓 Project Highlights

When presenting this project, emphasize:

✅ **Full-Stack Implementation**
- Complete backend with Express.js
- RESTful API design
- MongoDB integration

✅ **Security Best Practices**
- Password hashing (bcrypt)
- Session management
- Input validation
- Rate limiting

✅ **User Experience**
- Responsive design
- Intuitive navigation
- Progress tracking
- Data visualization

✅ **Scalable Architecture**
- Modular code structure
- Separated concerns
- AI-ready recommendation engine
- RESTful conventions

✅ **Professional Features**
- Authentication system
- CRUD operations
- Data persistence
- Error handling

---

**Ready to start? Just run `npm start` and open http://localhost:5000!**

🧠 **MindEase** - Understand Your Mind. Build Better Habits.
