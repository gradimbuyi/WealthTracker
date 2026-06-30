# Wealth Tracker APP

A personal finance application that enables users to manually manage bank accounts and record financial transactions in one place. The application provides an interactive dashboard with charts and summaries that help users visualize account balance, spending patterns, and overall financal activity. It is build React, Node.js, Express, and MongoDB using a scalable, containerized architecture.

## Features

- Secure Authentication - Create and account, sign in securely, and manage personal financial data
- Bank Account Management - Manage multiple bank accounts with customizable account details
- Transactions Tracking - Record deposits and transfers while maintaining a complete transaction history.
- Financial Dashboard - View account balances and key financial metrics from a centralized dashboard.

## Folder Structure

```
├── /.github
├── /backend
├── /docs
├── /frontend
├── /mobile
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v22 or later)
- Docker & Docker Compose
- Git

### Installation

Clone repository:

```bash
git clone git@github.com:gradimbuyi/WealthTracker.git
```

### Environment Variables

Create a ```.env``` file in both the frontend and backend directory using the provided examples:

backend/.env.example AND frontend/.env.example

### Running with Docker

Build and start all services:

```bash
docker compose up --build
```

Stopping the application:

```bash
docker compose down
```

## Contributors

Samuel Eisert, Adam Green, Gavin
Blanchard, Gradi Tshielekeja Mbu

The following individuals contributed to the development of the application:

- Gradi Mbuyi - Backend development, system architecture, and deployment.
- Adam Green - Frontend development, UI/UX design.
- Gaving Blanchard - Mobile development, UI/UX design.
- Samuel Eisert - Database Management.

