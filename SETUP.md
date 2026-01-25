# Development Setup Guide

## Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB (local or Atlas)
- Git

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/chethanac15/eStore.git
cd eStore
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# Required variables:
# - MONGO_URI=mongodb://localhost:27017/estore
# - JWT_SECRET=your_secret_key
# - STRIPE_SECRET_KEY=sk_test_...
# - EMAIL_USER=your_email@gmail.com
# - EMAIL_PASS=your_app_password
```

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install --legacy-peer-deps

# Create .env file (optional)
# REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Database Setup

#### Option A: Local MongoDB

```bash
# Install MongoDB locally
# Start MongoDB service
mongod

# In another terminal, seed the database
cd backend
npm run seed
```

#### Option B: MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update MONGO_URI in `.env`

### 5. Run Development Servers

```bash
# Terminal 1: Backend (from backend directory)
npm run dev

# Terminal 2: Frontend (from frontend directory)
npm start
```

**Access the app:**

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Testing

### Run Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# With coverage
npm run test:coverage
```

### Linting

```bash
# Backend
cd backend
npm run lint

# Frontend
cd frontend
npm run lint
```

## Environment Variables

### Backend .env

```env
# Server
NODE_ENV=development
PORT=5000

# Database
MONGO_URI=mongodb://localhost:27017/estore

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d

# Stripe (Test Mode)
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_key

# Email (Gmail with App Password)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@estore.com

# Client URL
CLIENT_URL=http://localhost:3000
```

### Frontend .env

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_your_key
```

## Docker Setup (Optional)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Access:
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
```

## Useful Commands

```bash
# Backend
npm run dev          # Development with nodemon
npm test             # Run tests
npm run seed         # Seed sample data
npm start            # Production mode

# Frontend
npm start            # Development server
npm test             # Run tests
npm run build        # Production build
```

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running
- Check MONGO_URI in .env
- Verify database name

### Port Already in Use

```bash
# Kill process on port 5000 (macOS/Linux)
lsof -i :5000
kill -9 <PID>

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Missing Dependencies

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Stripe Test Keys

- Get keys from https://dashboard.stripe.com/test/apikeys
- Test card: 4242 4242 4242 4242 (with any future date)

## Next Steps

1. Read [CONTRIBUTING.md](../CONTRIBUTING.md)
2. Check [Project Structure](#project-structure)
3. Review existing issues
4. Join our community discussions

## Project Structure

```
eStore/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth, validation
│   ├── scripts/         # Database seeding
│   ├── tests/           # Test files
│   ├── server.js        # Main server file
│   └── .env.example     # Environment template
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── contexts/    # Context providers
│   │   ├── services/    # API services
│   │   ├── utils/       # Utilities
│   │   └── App.js       # Main App
│   └── public/          # Static files
├── k8s/                 # Kubernetes manifests
├── .github/
│   ├── workflows/       # CI/CD pipelines
│   └── ISSUE_TEMPLATE/  # Issue templates
├── docker-compose.yml   # Docker compose file
└── README.md            # Project documentation
```

## Getting Help

- Check existing issues
- Create a new issue with detailed information
- Join discussions
- Ask in PRs

Happy coding! 🚀
