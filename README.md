# Password Manager Application

A secure password manager built with Express.js backend and React frontend.

## Project Structure

```
day20/
├── server.js              # Express server
├── package.json           # Server dependencies
├── .env                   # Environment variables (create from .env.example)
├── Connections/
│   ├── connectDB.js       # MongoDB connection
│   └── Schema.js          # Mongoose schema
└── client/                # React frontend
    ├── package.json
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        └── components/
            ├── AddPassword.jsx
            └── PasswordsList.jsx
```

## Installation & Setup

### 1. Backend Setup
```bash
cd day20

# Create .env file
cp .env.example .env
# Edit .env and add your MongoDB URI

# Install dependencies
npm install

# Start the server
npm start  # or npm run dev for development with nodemon
```

### 2. Frontend Setup
```bash
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:3000`
The backend API will be available at `http://localhost:5000`

## Features

- ✅ Add new passwords with website URL, username, and password
- ✅ View all saved passwords
- ✅ Toggle password visibility with click
- ✅ Beautiful gradient UI with responsive design
- ✅ Real-time updates
- ✅ MongoDB integration for data persistence

## API Endpoints

- **GET** `/` - Fetch all passwords
- **POST** `/` - Add a new password

Request body for POST:
```json
{
  "siteURL": "https://example.com",
  "username": "user@example.com",
  "password": "secretpassword"
}
```

## Technologies Used

### Backend
- Express.js
- MongoDB with Mongoose
- CORS
- UUID

### Frontend
- React 18
- Vite
- Axios
- CSS3

## Notes

- Make sure MongoDB is running before starting the server
- The app includes password visibility toggle for security
- All data is stored in MongoDB
- CORS is enabled for frontend communication
# PadhBhiLiyaKar
