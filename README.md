# Forex Teacher Portal

A comprehensive forex education platform that serves as a client portal for students to access educational resources, interact with course materials, and connect with brokers.

## Features

- User Authentication (Student/Teacher roles)
- Video Lessons with Comments and Q&A
- Course Materials and Resources
- Broker Integration
- Prop Firm Connection
- Interactive Learning Environment

## Setup Instructions

1. Install Node.js from https://nodejs.org/
2. Enable PowerShell script execution (Run as Administrator):
   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```

3. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

4. Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   JWT_SECRET=your-super-secret-jwt-key-2024
   PORT=5000
   ```

5. Start the development server:
   ```bash
   npm run dev:full
   ```

## Project Structure

- `/client` - React frontend application
- `/server` - Node.js/Express backend
- `/server/models` - Database models
- `/server/routes` - API routes
- `/server/middleware` - Custom middleware

## Technologies Used

- Frontend: React, Material-UI, React Router
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- State Management: Redux Toolkit 