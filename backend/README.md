# WealthTracker API

This document serve as a guide towards succesfully running the backend.

## Folder Structure

```
├── /dist
├── /node_modules
├── /src
│   ├── /controllers
│   │   ├── accountController.ts
│   │   ├── analyticsController.ts
│   │   ├── authController.ts
│   │   ├── transactionController.ts
│   │   └── userController.ts
│   ├── /middleware
│   │   └── authMiddleware.ts
│   ├── /models
│   │   ├── Accounts.ts
│   │   ├── Transactions.ts
│   │   └── User.ts
│   ├── /routes
│   │   ├── accountRoutes.ts
│   │   ├── analyticsRoutes.ts
│   │   ├── authRoutes.ts
│   │   ├── transactionsRoutes.ts
│   │   └── userRoutes.ts
│   ├── /types
│   │   └── express.d.ts
│   ├── /utils
│   │   └── messageHandler.ts
│   ├── app.ts
│   ├── database.ts
│   └── server.ts
├── /tests
│   ├── accounts.test.ts
│   ├── analytics.test.ts
│   ├── auth.test.ts
│   ├── transactions.test.ts
│   └── user.test.ts
├── .env
├── .gitignore
├── .prettierrc
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```

## Dependencies

The backend uses **Express.js** to develop the program's API, **MongoDB** as the database, and **TypeScript** for type safety and improved developer experience.

## Getting Started

### 1. Downloading the dependencies

The Node Package Manager makes the process of downloading the dependecies easy with this command:

```bash
npm install
```

_Note: NodeJS must be installed in order for this to work. Instructions to install it can be found here: https://nodejs.org/en/download. The instruction above assume that user is within the backend directory. If they are not, they can use the command: `cd backend` before installing the dependencies._

### 2. Setting up the .env file

Use backend/.env.example to set up the backend/.env file.

_Optionals_: Before launching the backend, developers can use the command below to create their JWT secret key. 

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

_Example Result:_

```bash
47c8bbbd1d8a442926eccc57abfb87ead2f00cc2db05d446e9666201655a1618
```

### 3. Using the Application

Developer Mode:

```bash
npm run dev
```

Building for production:

```bash
npm run build
```

## Example of API Interaction

Registering a user (POST `/api/register`):

Request:

```json
{
    "name": "Gradi Mbuyi",
    "email": "gradimbuyi@outlook.com",
    "password": "fakepassword123"
}
```

Response:

If user exist:

```json
{
    "error": "email already exist"
}
```

If user does not exist:

```json
{
    "success": "user created successfully"
}
```
