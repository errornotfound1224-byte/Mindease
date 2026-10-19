require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const connectDatabase = require('./config/database');
const { attachUser } = require('./middleware/auth');

// Import routes
const authRoutes = require('./routes/authRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');
const wellnessRoutes = require('./routes/wellnessRoutes');
const habitRoutes = require('./routes/habitRoutes');
const focusRoutes = require('./routes/focusRoutes');
const progressRoutes = require('./routes/progressRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDatabase();

// Trust proxy for production (required for Render, Heroku, etc.)
if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
}

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false // Disable CSP for development; configure properly for production
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : 'http://localhost:5000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Stricter rate limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many authentication attempts, please try again later.'
});
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'mindease-super-secret-change-in-production',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    touchAfter: 24 * 3600 // Lazy session update (seconds)
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    sameSite: 'lax'
  }
}));

// Attach user middleware
app.use(attachUser);

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/wellness', wellnessRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/focus', focusRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/profile', profileRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'MindEase API is running',
    timestamp: new Date().toISOString()
  });
});

// Route handling for frontend pages
app.get('/', (req, res) => {
  // Redirect root to login page
  res.redirect('/login.html');
});

app.get('/home', (req, res) => {
  // Landing/marketing page accessible at /home
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Serve other frontend pages
app.get('*.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', req.path));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'An unexpected error occurred'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✨ MindEase Server running on port ${PORT}`);
  console.log(`🌐 Open http://localhost:${PORT} in your browser\n`);
});
