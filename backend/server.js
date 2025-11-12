// server.js

// 1. Load Environment Variables FIRST
const dotenv = require('dotenv');
dotenv.config();

// 2. Import Dependencies
const express = require('express');
const cors = require('cors');

// Import Routes
const userRoutes = require('./src/routes/userRoutes');
const generateRoutes = require('./src/routes/generateRoutes');

// 3. Initialize Express App
const app = express();

// 4. Define Port
const PORT = process.env.PORT || 3001;

// 5. Set up Middleware
app.use(cors());
app.use(express.json());

// 6. API Routes
app.use('/api/users', userRoutes);
app.use('/api/generate', generateRoutes);

// 7. Simple Health Check Route
app.get('/', (req, res) => {
  res.json({ message: 'CircleAI Backend is running!' });
});

// 8. Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});