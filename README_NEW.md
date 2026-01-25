# eStore - Electrical Components E-Commerce Platform

<div align="center">

[![CI/CD Pipeline](https://github.com/chethanac15/eStore/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/chethanac15/eStore/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-18.2.0-blue)](https://react.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A modern, scalable full-stack e-commerce platform for selling electrical components. Built with React, Node.js, MongoDB, and Stripe, following open-source best practices and production-ready architecture.

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## ✨ Features

- ✅ **User Authentication** - JWT-based registration, login, profile management
- ✅ **Product Catalog** - Browse electrical components with search and filtering
- ✅ **Shopping Cart** - Add to cart, update quantities, persistent storage
- ✅ **Secure Checkout** - Stripe payment integration (test mode)
- ✅ **Order Tracking** - Real-time order status (Placed → Processing → Shipped → Delivered)
- ✅ **Admin Dashboard** - View orders, customer analytics, email notifications
- ✅ **Email Notifications** - Automatic emails to admin on new orders
- ✅ **Responsive Design** - Mobile-first, modern UI with Framer Motion animations
- ✅ **Production Ready** - Docker, Kubernetes, CI/CD with automated testing
- ✅ **Open Source** - Fully documented, issue templates, PR templates, contributor guidelines

## 🛠 Tech Stack

| Layer               | Technology                                         |
| ------------------- | -------------------------------------------------- |
| **Frontend**        | React 18, React Router, Framer Motion, Axios       |
| **Backend**         | Node.js, Express.js, MongoDB, Mongoose             |
| **Authentication**  | JWT (JSON Web Tokens), bcrypt                      |
| **Payments**        | Stripe (test mode)                                 |
| **Email**           | Nodemailer                                         |
| **DevOps**          | Docker, Docker Compose, Kubernetes, GitHub Actions |
| **Package Manager** | npm                                                |

## 📁 Project Structure

```
eStore/
├── 📂 backend/                    # Node.js Express backend
│   ├── 📂 models/                 # MongoDB schemas
│   ├── 📂 routes/                 # API endpoints
│   ├── 📂 middleware/             # Auth, validation
│   ├── 📂 scripts/                # Database seeding
│   ├── 📂 tests/                  # Test files
│   ├── 📄 server.js               # Main server
│   └── 📄 .env.example            # Environment template
│
├── 📂 frontend/                   # React frontend
│   ├── 📂 src/
│   │   ├── 📂 components/         # Reusable components
│   │   ├── 📂 pages/              # Page components
│   │   ├── 📂 contexts/           # State management
│   │   ├── 📂 services/           # API services
│   │   ├── 📂 utils/              # Utilities
│   │   └── 📄 App.js              # Main App
│   └── 📂 public/                 # Static files
│
├── 📂 k8s/                        # Kubernetes manifests
├── 📂 .github/
│   ├── 📂 workflows/              # CI/CD pipelines
│   └── 📂 ISSUE_TEMPLATE/         # GitHub templates
│
├── 📄 docker-compose.yml          # Docker compose
├── 📄 CONTRIBUTING.md             # Contribution guidelines
├── 📄 CODE_OF_CONDUCT.md          # Community guidelines
├── 📄 SETUP.md                    # Development guide
├── 📄 LICENSE                     # MIT License
└── 📄 README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher
- **MongoDB** (local or Atlas)
- **Git**

### One-Click Setup with Docker

```bash
# Clone repository
git clone https://github.com/chethanac15/eStore.git
cd eStore

# Start everything with Docker
docker-compose up --build
```

Access:

- 🌐 Frontend: http://localhost:3000
- 🔗 Backend API: http://localhost:5000

### Manual Setup

**Backend:**

```bash
cd backend
npm install
cp .env.example .env
npm run seed          # Seed sample data
npm run dev           # Start server
```

**Frontend:**

```bash
cd frontend
npm install
npm start             # Start dev server
```

See [SETUP.md](SETUP.md) for detailed instructions.

## 🧪 Testing & Quality

```bash
# Backend tests
cd backend
npm test                    # Run all tests
npm run test:coverage       # With coverage

# Frontend tests
cd frontend
npm test                    # Run all tests
```

## 📚 Documentation

- [📖 Setup Guide](SETUP.md) - Detailed setup instructions
- [🤝 Contributing Guide](CONTRIBUTING.md) - How to contribute
- [📋 Code of Conduct](CODE_OF_CONDUCT.md) - Community standards
- [📄 License](LICENSE) - MIT License

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get profile

### Products

- `GET /api/products` - All products
- `GET /api/products/:id` - Single product

### Orders

- `POST /api/orders/create-payment-intent` - Create payment
- `POST /api/orders` - Create order
- `GET /api/orders` - User orders
- `GET /api/orders/admin` - All orders (admin)

## 🌐 Deployment

### Docker

```bash
docker-compose up --build
```

### Kubernetes

```bash
kubectl apply -f k8s/
```

### Free Hosting

- **Frontend**: Vercel, Netlify
- **Backend**: Render, Railway, Fly.io
- **Database**: MongoDB Atlas

## 🤝 Contributing

1. **Fork** the repository
2. **Create** an issue first (describe your changes)
3. **Create** a branch: `git checkout -b feature/amazing-feature`
4. **Make** your changes
5. **Test**: `npm test`
6. **Commit**: `git commit -m 'feat: add amazing feature'`
7. **Push**: `git push origin feature/amazing-feature`
8. **PR**: Open Pull Request

**Your PR gets:**

- ✅ Automated tests
- ✅ Code quality checks
- ✅ Preview link
- ✅ Maintainer review

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 🐛 Issues & Features

Found a bug? Have an idea?

1. Check [existing issues](https://github.com/chethanac15/eStore/issues)
2. Create a [new issue](https://github.com/chethanac15/eStore/issues/new)
3. Follow the template
4. Get feedback from maintainers

## 🔐 Security

- ✅ Password hashing with bcryptjs
- ✅ JWT authentication
- ✅ Input validation
- ✅ CORS enabled
- ✅ Rate limiting
- ✅ Secure .env

## 📊 Project Stats

- **Lines of Code**: 3000+
- **Components**: 15+
- **API Endpoints**: 12+
- **Test Coverage**: 80%+
- **CI/CD**: GitHub Actions

## 🎨 Design

- **Colors**: Indigo, Electric Blue, Soft Gray, Accent Orange
- **Animations**: Framer Motion
- **Responsive**: Mobile-first
- **Accessible**: WCAG compliant

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for updates.

## 🚀 Roadmap

- [ ] Mobile app (React Native)
- [ ] Razorpay integration
- [ ] Analytics dashboard
- [ ] Recommendation engine
- [ ] Multi-language support
- [ ] PWA support

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Built by the eStore community
- Inspired by GSoC and LFX programs
- Thanks to all [contributors](https://github.com/chethanac15/eStore/graphs/contributors)

---

<div align="center">

Made with ❤️ by the eStore Community

[GitHub](https://github.com/chethanac15/eStore) • [Issues](https://github.com/chethanac15/eStore/issues) • [Discussions](https://github.com/chethanac15/eStore/discussions)

</div>
