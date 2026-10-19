# MindEase

## AI-Powered ADHD Screening, Personalized Wellness and Progress Tracking Platform

**Tagline:** Understand Your Mind. Build Better Habits.

MindEase is a complete full-stack web application designed to help users explore ADHD-related symptoms through a structured questionnaire, receive personalized wellness recommendations, and track their habits and progress over time. This is a student software engineering project demonstrating modern web development practices, secure authentication, database integration, and AI-ready architecture.

---

## 🌟 Key Features

### ✅ **Complete Functional Application**
- Full-stack implementation with frontend and backend
- Secure user authentication with bcrypt password hashing
- MongoDB database integration
- RESTful API architecture
- Responsive design for desktop, tablet, and mobile

### 📝 **ADHD-Related Screening Questionnaire**
- 25 carefully designed questions across 5 categories:
  - Attention and Concentration
  - Organization and Time Management
  - Restlessness and Activity
  - Impulsivity
  - Everyday Functioning
- Save draft progress and resume later
- Review answers before submission
- Non-diagnostic, exploratory screening tool

### 💡 **Personalized Wellness Recommendations**
- Rule-based recommendation engine (always available)
- AI-ready architecture for future AI integration
- Practical, evidence-based strategies tailored to user responses
- Categories include:
  - Focus strategies
  - Organization techniques
  - Time management tips
  - Restlessness management
  - Daily routines
  - Emotional well-being

### 📊 **Progress Tracking & Analytics**
- Personal dashboard with quick stats
- Habit tracker for building consistent routines
- Focus timer for productive work sessions
- Progress analytics showing growth over time
- Assessment history and comparison

### 🔒 **Privacy & Security**
- Passwords hashed with bcrypt
- Secure HTTP-only session cookies
- Rate limiting on authentication endpoints
- Helmet.js security headers
- Input validation and sanitization
- User data deletion capability

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (Vanilla)** - No heavy frameworks, pure JS
- **Responsive Design** - Works on all devices

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - Object modeling for MongoDB

### Security & Middleware
- **bcrypt** - Password hashing
- **express-session** - Session management
- **connect-mongo** - MongoDB session store
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting
- **express-validator** - Input validation
- **cors** - Cross-origin resource sharing

### Development Tools
- **dotenv** - Environment variable management
- **npm** - Package management

---

## 📁 Project Structure

```
mindease/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── assessmentController.js
│   │   ├── wellnessController.js
│   │   ├── habitController.js
│   │   ├── focusController.js
│   │   ├── progressController.js
│   │   └── profileController.js
│   ├── middleware/
│   │   ├── auth.js              # Authentication middleware
│   │   └── validation.js        # Validation middleware
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Assessment.js        # Assessment schema
│   │   ├── WellnessPlan.js      # Wellness plan schema
│   │   ├── Habit.js             # Habit schema
│   │   ├── HabitEntry.js        # Habit entry schema
│   │   ├── FocusSession.js      # Focus session schema
│   │   └── Reflection.js        # Reflection schema
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── assessmentRoutes.js
│   │   ├── wellnessRoutes.js
│   │   ├── habitRoutes.js
│   │   ├── focusRoutes.js
│   │   ├── progressRoutes.js
│   │   └── profileRoutes.js
│   ├── services/
│   │   └── recommendationEngine.js  # AI/rule-based recommendations
│   ├── utils/
│   │   └── questionnaire.js     # 25 assessment questions
│   └── server.js                # Main server file
├── frontend/
│   ├── css/
│   │   ├── main.css             # Core styles
│   │   ├── landing.css          # Landing page styles
│   │   ├── auth.css             # Authentication pages
│   │   ├── dashboard.css        # Dashboard layout
│   │   └── assessment.css       # Assessment styles
│   ├── js/
│   │   ├── api.js               # API client
│   │   ├── register.js          # Registration logic
│   │   ├── login.js             # Login logic
│   │   ├── navigation.js        # Navigation handling
│   │   ├── sidebar.js           # Sidebar logic
│   │   ├── dashboard.js         # Dashboard logic
│   │   └── assessment.js        # Assessment logic
│   ├── index.html               # Landing page
│   ├── register.html            # Registration page
│   ├── login.html               # Login page
│   ├── dashboard.html           # User dashboard
│   ├── assessment.html          # Questionnaire page
│   ├── results.html             # Results page
│   ├── wellness-plan.html       # Wellness recommendations
│   ├── habits.html              # Habit tracker
│   ├── focus.html               # Focus timer
│   ├── progress.html            # Progress analytics
│   ├── resources.html           # Educational resources
│   ├── profile.html             # User profile
│   └── privacy.html             # Privacy policy
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** (comes with Node.js)

### Step 1: Clone or Download the Project
```bash
cd c:\mindease
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages:
- express
- mongoose
- bcrypt
- express-session
- connect-mongo
- dotenv
- cors
- express-validator
- express-rate-limit
- helmet

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and configure your settings:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/mindease

# Session Configuration
SESSION_SECRET=your-super-secret-session-key-change-this-in-production

# AI API Configuration (Optional)
AI_API_KEY=
AI_API_ENDPOINT=
```

**Important Notes:**
- Change `SESSION_SECRET` to a strong random string
- If MongoDB is running locally on default port, the default URI should work
- For MongoDB Atlas, use: `mongodb+srv://username:password@cluster.mongodb.net/mindease`
- AI API keys are optional; the app uses rule-based recommendations by default

### Step 4: Start MongoDB

**Option A: Local MongoDB**
```bash
mongod
```

**Option B: MongoDB Atlas**
- Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string
- Update `MONGODB_URI` in `.env`

### Step 5: Start the Application
```bash
npm start
```

The server will start on `http://localhost:5000`

You should see:
```
✨ MindEase Server running on port 5000
🌐 Open http://localhost:5000 in your browser
MongoDB Connected: localhost
```

### Step 6: Open in Browser

Navigate to:
```
http://localhost:5000
```

You will be automatically redirected to the login page. From there you can:
- **Sign in** if you have an account
- **Create an account** by clicking "Sign up"
- **Learn about MindEase** by clicking "Learn about MindEase" at the bottom

The marketing/landing page is available at:
```
http://localhost:5000/home
```

---

## 📖 Usage Guide

### 1. **Register an Account**
- Click "Get Started" or "Sign Up"
- Provide your name, email, and password
- Password must be at least 8 characters with uppercase, lowercase, and number
- Agree to the privacy notice

### 2. **Complete the Assessment**
- Navigate to the Assessment page from your dashboard
- Read the introduction and response scale
- Answer all 25 questions honestly
- You can save your progress and return later
- Review your answers before submitting

### 3. **View Results**
- After submission, view your response patterns across 5 categories
- Results are descriptive, not diagnostic
- Understand what the results mean and what they cannot tell you

### 4. **Generate Wellness Plan**
- Click "Generate Wellness Plan" on the results page
- Receive personalized recommendations based on your responses
- Each recommendation includes:
  - Description and benefits
  - Step-by-step implementation guide
  - Suggested frequency and time commitment
  - Reflection questions

### 5. **Track Habits**
- Create custom habits aligned with your wellness goals
- Mark habits as complete each day
- View completion rates and patterns

### 6. **Use Focus Timer**
- Start focused work sessions
- Track total focus time
- Build a history of productive sessions

### 7. **Monitor Progress**
- View analytics showing habit completion over time
- Compare multiple assessments if retaken
- See focus session statistics

---

## 🔐 Security Features

### Authentication
- Passwords hashed with bcrypt (10 salt rounds)
- Secure HTTP-only session cookies
- Server-side session management with MongoDB store
- Protection against session fixation attacks

### API Protection
- Rate limiting: 100 requests per 15 minutes per IP
- Stricter rate limiting on auth endpoints: 10 requests per 15 minutes
- Input validation using express-validator
- SQL injection prevention (NoSQL with Mongoose)
- XSS protection via Helmet.js

### Data Privacy
- User data scoped to authenticated user only
- No cross-user data exposure
- Account deletion removes all associated data
- No sensitive data in localStorage
- Passwords never stored in plaintext

### Production Recommendations
- Use HTTPS in production
- Set `NODE_ENV=production`
- Configure secure cookie settings
- Use strong `SESSION_SECRET`
- Enable MongoDB authentication
- Regular security updates

---

## 🧪 Testing the Application

### Manual Testing Checklist

#### Authentication
- [ ] Register with valid data succeeds
- [ ] Register with duplicate email fails
- [ ] Register with weak password fails
- [ ] Login with correct credentials succeeds
- [ ] Login with wrong credentials fails
- [ ] Logout works correctly
- [ ] Protected pages redirect when not logged in

#### Assessment
- [ ] All 25 questions display correctly
- [ ] Progress bar updates
- [ ] Previous/Next navigation works
- [ ] Cannot proceed without selecting answer
- [ ] Draft saving works
- [ ] Draft loading works on return
- [ ] Review screen shows all answers
- [ ] Assessment submission succeeds
- [ ] Results page displays correctly

#### Wellness Recommendations
- [ ] Plan generation works
- [ ] Recommendations are relevant to answers
- [ ] Rule-based engine works when AI unavailable
- [ ] Recommendations display with all fields

#### Dashboard
- [ ] Welcome message shows user name
- [ ] Stats load correctly
- [ ] Quick actions navigate properly
- [ ] Assessment status is accurate

#### Data Persistence
- [ ] Data persists after logout and login
- [ ] Multiple users have separate data
- [ ] No data leakage between users

#### Responsive Design
- [ ] Landing page works on mobile
- [ ] Sidebar collapses on mobile
- [ ] Forms are usable on small screens
- [ ] Assessment is mobile-friendly

---

## 🎨 Design System

### Color Palette
- **Background:** #FAF9F6 (Off-white)
- **Primary Purple:** #6C63FF
- **Primary Lavender:** #E9E3FF
- **Dark Text:** #292638
- **Secondary Text:** #777487
- **Success Mint:** #DDF4E7
- **Card Background:** #FFFFFF
- **Borders:** #E9E6F0

### Typography
- **Font Family:** Inter, system fonts
- **Headings:** 600 weight
- **Body:** 400 weight
- **Line Height:** 1.6

### Spacing
- Uses consistent spacing scale
- Border radius: 8px (small), 12px (medium), 16px (large)
- Shadows: Subtle, layered depth

### Accessibility
- Sufficient color contrast
- Keyboard navigation support
- Semantic HTML
- ARIA labels where appropriate
- Reduced motion support

---

## 🤖 AI Integration (Future Enhancement)

The application is designed to support AI-powered recommendations:

### Current Implementation
- Rule-based recommendation engine (always functional)
- Structured input format for AI APIs
- Fallback logic when AI unavailable

### To Add AI Integration

1. **Obtain an AI API key** (e.g., OpenAI, Anthropic)

2. **Update `.env`:**
```env
AI_API_KEY=your-api-key-here
AI_API_ENDPOINT=https://api.openai.com/v1/chat/completions
```

3. **Implement in `recommendationEngine.js`:**
```javascript
const generateAIRecommendations = async (sectionSummaries, userGoals) => {
    const response = await fetch(process.env.AI_API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.AI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [{
                role: 'user',
                content: `Generate wellness recommendations based on: ${JSON.stringify(sectionSummaries)}`
            }]
        })
    });
    
    return await response.json();
};
```

4. **Test thoroughly** with real API calls

---

## 📊 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### POST `/auth/register`
Register a new user.

**Request Body:**
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123",
    "ageRange": "25-34"
}
```

**Response:**
```json
{
    "success": true,
    "message": "Account created successfully",
    "user": {
        "id": "...",
        "name": "John Doe",
        "email": "john@example.com"
    }
}
```

#### POST `/auth/login`
Login existing user.

**Request Body:**
```json
{
    "email": "john@example.com",
    "password": "SecurePass123"
}
```

#### POST `/auth/logout`
Logout current user.

#### GET `/auth/me`
Get current authenticated user.

### Assessment Endpoints

#### GET `/assessments/questionnaire`
Get the 25-question assessment.

#### GET `/assessments/draft`
Get saved draft assessment.

#### POST `/assessments/draft`
Save assessment progress.

**Request Body:**
```json
{
    "answers": [
        {"questionId": 1, "section": "A", "value": 2},
        ...
    ]
}
```

#### POST `/assessments`
Submit completed assessment.

#### GET `/assessments/:id`
Get specific assessment by ID.

#### GET `/assessments/history`
Get all completed assessments.

### Wellness Endpoints

#### POST `/wellness/generate`
Generate wellness plan from assessment.

**Request Body:**
```json
{
    "assessmentId": "..."
}
```

#### GET `/wellness`
Get all wellness plans.

#### PATCH `/wellness/:planId/recommendations/:index`
Update recommendation completion status.

### Habit Endpoints

#### GET `/habits`
Get all user habits.

#### POST `/habits`
Create new habit.

#### PUT `/habits/:id`
Update habit.

#### DELETE `/habits/:id`
Delete habit.

#### GET `/habits/entries`
Get habit entries.

#### POST `/habits/entries`
Create or update habit entry.

### Focus Session Endpoints

#### GET `/focus`
Get focus sessions.

#### POST `/focus`
Create focus session.

#### GET `/focus/statistics`
Get focus statistics.

### Progress Endpoints

#### GET `/progress/summary`
Get progress summary.

#### GET `/progress/habits`
Get habit progress over time.

#### GET `/progress/assessments`
Get assessment comparison.

### Profile Endpoints

#### GET `/profile`
Get user profile.

#### PUT `/profile`
Update profile.

#### DELETE `/profile`
Delete account and all data.

---

## ⚠️ Important Disclaimers

### Not a Diagnostic Tool
MindEase is **NOT** a medical diagnostic tool. The questionnaire is a custom, exploratory screening instrument designed for personal reflection and wellness planning. Only qualified healthcare professionals can diagnose ADHD or other conditions.

### Educational Purpose
This is a student software engineering project demonstrating full-stack development skills, not a replacement for professional healthcare services.

### Privacy
While security measures are implemented, this is an educational project. For production use with real patient data, additional security audits and compliance measures (HIPAA, GDPR) would be required.

### Seek Professional Help
If you experience significant difficulties with attention, organization, or daily functioning that affect your quality of life, please consult a qualified healthcare provider for comprehensive evaluation and treatment options.

---

## 🐛 Troubleshooting

### MongoDB Connection Errors
**Problem:** `MongoNetworkError: connect ECONNREFUSED`

**Solution:**
- Ensure MongoDB is running: `mongod`
- Check MongoDB URI in `.env`
- For MongoDB Atlas, whitelist your IP address

### Port Already in Use
**Problem:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solution:**
- Change PORT in `.env` to 3000 or another available port
- Or kill the process using port 5000

### Session Errors
**Problem:** Session not persisting

**Solution:**
- Ensure MongoDB session store is connected
- Check `SESSION_SECRET` is set in `.env`
- Clear browser cookies and try again

### Cannot Register/Login
**Problem:** Registration or login fails

**Solution:**
- Check browser console for errors
- Verify password meets requirements (8+ chars, uppercase, lowercase, number)
- Ensure email format is valid
- Check server logs for detailed error messages

---

## 🚀 Future Enhancements

- AI-powered recommendation generation
- Email verification and password reset
- Data export functionality (CSV/PDF)
- More detailed progress charts and visualizations
- Mobile native apps (React Native)
- Collaborative features (share plans with therapists)
- Integration with wearables for activity tracking
- Multi-language support
- Dark mode
- Accessibility improvements (screen reader optimization)

---

## 📄 License

MIT License - This is a student project for educational purposes.

---

## 👨‍💻 Development

### Development Mode
```bash
npm run dev
```

### Environment
- Development: `NODE_ENV=development`
- Production: `NODE_ENV=production`

### Code Style
- ES6+ JavaScript
- Async/await for asynchronous operations
- RESTful API design
- Modular architecture
- Clear commenting

---

## 🙏 Acknowledgments

- This project was created as a student software engineering demonstration
- ADHD information based on reputable medical sources
- Wellness strategies based on evidence-based practices
- UI/UX inspired by modern wellness applications

---

## 📞 Support

For questions or issues with this project:
- Review this README thoroughly
- Check the troubleshooting section
- Examine server logs for error details
- Review browser console for frontend errors

---

## ✨ Conclusion

MindEase demonstrates a complete, functional full-stack web application with:
- ✅ Secure authentication
- ✅ Database integration
- ✅ Structured assessment system
- ✅ Personalized recommendations
- ✅ Progress tracking
- ✅ Responsive design
- ✅ Privacy and security best practices

This project showcases modern web development skills suitable for college-level software engineering coursework and can serve as a portfolio piece or learning resource.

**Remember:** MindEase is a wellness tool, not a diagnostic service. Always seek professional medical advice for health concerns.
