CircleAI Studio

A full-stack web platform that enables users to generate websites, mobile apps, images, videos, and advertisements from natural-language prompts, featuring a beautiful glassmorphic UI.

✨ Features

 🌐 Website Generation: Create stunning, modern websites with AI-generated HTML, CSS, and JavaScript.

 📱 App Development: Build React/Flutter app shells from simple descriptions.

 🎨 Image Creation: Generate beautiful images using DALL-E and Stability AI.

 🎬 Video Production: Create engaging video ads with Runway, Pika, and Luma AI.

 ✍️ Ad Copy Generation: Craft compelling marketing copy with GPT-4.

 🚀 Instant Deployment: Deploy generated websites to Vercel with a single click.

 🎨 Glassmorphic UI: A modern, translucent interface inspired by Rocket.new and Apple's design.

 
 🧠 Tech Stack

 Frontend: Next.js 14, React, Tailwind CSS, Framer Motion
 Backend: Node.js, Express, Prisma ORM
 Database: PostgreSQL (or SQLite for development)
 AI Services: OpenAI (GPT-4, DALL-E), Stability AI, Runway
 Deployment: Vercel (Frontend), Render (Backend)
 🚀 Getting Started

Prerequisites

 Node.js (v18 or higher)
 npm or yarn

Installation
=> Clone the repository:
git clone https://github.com/YOUR_USERNAME/circleai-creator.git
cd circleai-creator

=>Install Dependencies:
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

=> Setup Environment variables:
# Backend
cd backend
cp .env.example .env
# Add your API keys to the .env file

# Frontend
cd ../frontend
cp .env.local.example .env.local
# Add your backend URL to the .env.local file

=> Run the application:
# Terminal 1: Start the backend
cd backend
npm run dev

# Terminal 2: Start the frontend
cd ../frontend
npm run dev

=> Open your browser:
Navigate to http://localhost:3000

Project Structure:

circleai-creator/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── prisma/
│   ├── .env
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   └── PromptBox.js
│   ├── .env.local
│   └── package.json
└── README.md

How It Works

 User Input: The user types a prompt into the glassmorphic input box on the frontend.
 API Request: The frontend sends the prompt to the backend API via a POST request.
 AI Processing: The backend server receives the request and calls the appropriate AI service (e.g., OpenAI).
 Content Generation: The AI service processes the prompt and returns the generated content.
 API Response: The backend sends the AI-generated content back to the frontend.
 Display Result: The frontend displays the result in a beautiful, translucent output panel.
 🤝 Contributing

Contributions are what make the open-source community amazing. If you'd like to contribute, please:

 Fork the repository.
 Create a new branch (git checkout -b feature/your-feature-name).
 Make your changes.
 Commit your changes (git commit -m 'Add your feature').
 Push to the branch (git push origin feature/your-feature-name).
 Open a Pull Request.

 License
This project is licensed under the MIT License. See the LICENSE  file for more details.
