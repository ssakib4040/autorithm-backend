# Autorithm Backend & Admin Panel

**Autorithm** is a company that provides high-quality prebuilt automation workflows for n8n and Make.com, empowering businesses to automate their processes efficiently.

This repository contains the backend APIs and admin panel for managing workflows, users, and business operations.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime**: Node.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: Yarn

---

## 📋 Prerequisites

- Node.js 20.x or higher
- Yarn package manager
- Git

---

## 🛠️ Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd autorithm-backend
```

2. Install dependencies:

```bash
yarn
```

3. Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`

### Development

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
yarn build
```

### Production

Start the production server:

```bash
yarn start
```

---

## 📡 Available APIs

### Authentication APIs

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - User login
- **POST** `/api/auth/logout` - User logout
- **GET** `/api/auth/me` - Get current user profile
- **POST** `/api/auth/refresh` - Refresh authentication token
- **POST** `/api/auth/forgot-password` - Request password reset
- **POST** `/api/auth/reset-password` - Reset password with token

### Products

- **GET** `/api/products` - Get all products (with pagination and filters)
- **GET** `/api/products/:id` - Get product details by ID
- **POST** `/api/products` - Create a new product (Admin only)
- **PUT** `/api/products/:id` - Update product (Admin only)
- **DELETE** `/api/products/:id` - Delete product (Admin only)
- **GET** `/api/products/featured` - Get featured products
- **GET** `/api/products/categories` - Get product categories
- **GET** `/api/products/search` - Search products

### Purchase/Order APIs

- **POST** `/api/orders` - Create a new order
- **GET** `/api/orders` - Get user's orders
- **GET** `/api/orders/:id` - Get order details
- **POST** `/api/orders/:id/payment` - Process payment for order

### Admin APIs

- **GET** `/api/admin/dashboard` - Get dashboard statistics
- **GET** `/api/admin/analytics` - Get analytics data
- **PUT** `/api/admin/workflows/:id/approve` - Approve workflow
- **PUT** `/api/admin/workflows/:id/reject` - Reject workflow
- **GET** `/api/admin/revenue` - Get revenue statistics

---

## 📁 Project Structure

```
autorithm-backend/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/               # API route handlers
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── public/                # Static assets
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

---

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL=

# Authentication
JWT_SECRET=
JWT_EXPIRES_IN=7d

# API Keys
N8N_API_KEY=
MAKE_API_KEY=

# Email Service
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# Payment Gateway
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Other
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 🧪 Testing

```bash
# Run tests
yarn test

# Run tests with coverage
yarn test:coverage
```

---

## 📝 Code Style

This project uses ESLint for code linting. Run the linter:

```bash
yarn lint
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

---

## 📧 Contact

**Autorithm Team**

- Website: [autorithm.com](https://autorithm.com)
- Email: support@autorithm.com

---

## 🗺️ Roadmap

- [ ] User authentication and authorization
- [ ] Workflow marketplace
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] n8n integration
- [ ] Make.com integration
- [ ] Workflow versioning
- [ ] User reviews and ratings
- [ ] API documentation (Swagger/OpenAPI)

---

Made with ❤️ by the Autorithm Team
