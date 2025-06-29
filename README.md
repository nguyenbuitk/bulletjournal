# Bullet Journal Proj
A bullet journal application with backend API adn frontend interface for managing daily, monthly, and future logs.

**Explain of frontend code can be found at /home/nguyenbui/frontend-test**
## Project structure
```
bulletjournal-proj/
├── backend/                 # Node.js + Express + MongoDB API
│   ├── src/
│   │   ├── app.js          # Express server setup
│   │   ├── controllers/    # API controllers
│   │   ├── models/         # MongoDB models
│   │   └── routes/         # API routes
│   └── package.json
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API service calls
│   │   ├── App.js         # Main React component
│   │   └── index.js       # React entry point
│   └── package.json
└── README.md
```

## Features

- **Daily Logs**: Create, read, update, delete daily journal entries
- **CRUD Operations**: Full CRUD functionality for bullet journal entries
- **Tags & Priority**: Organize entries with tags and priority levels
- **RESTful API**: Backend API with MongoDB database

## Prerequisites

- Nodejs (v14 or higher)
- MongoDB (running locally)
- npm or yarn

## Setup
### 1. Backend
```bash
cd backend
npm install
```

#### Setup .env file
```env
MONGODB_URI=mongodb://localhost:27017/bulletjournal
PORT=5000
```

```bash
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
npm start
```

## API Endpoints

### Daily Logs
- `GET /api/daily-logs` - Get all daily logs
- `POST /api/daily-logs` - Create a new daily log
- `PUT /api/daily-logs/:id` - Update a daily log
- `DELETE  /api/daily-logs/:id` - Delete a daily log