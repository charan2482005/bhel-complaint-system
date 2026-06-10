# BHEL Backend

Backend REST API server for the BHEL HPVP Marketing Management System.

Developed using Node.js, Express.js and PostgreSQL.

---

## Features

### Authentication APIs
- User Login
- Credential Verification

### Tender Enquiry APIs
- Create Enquiry
- Fetch Enquiries
- Upload Documents
- Store Records in PostgreSQL

### Sale Order APIs
- Create Sale Orders
- Fetch Sale Orders

### File Management
- Upload Documents
- Serve Uploaded Files

### Database Integration
- PostgreSQL (Neon)

---

## Technology Stack

- Node.js
- Express.js
- PostgreSQL
- Multer
- CORS
- dotenv

---

## Installation

Clone Repository

```bash
git clone https://github.com/charan2482005/bhel-complaint-system.git
```

Move to Backend Folder

```bash
cd backend
```

Install Dependencies

```bash
npm install
```

Create .env file

```env
DATABASE_URL=your_neon_connection_string

PORT=5000
```

Run Server

```bash
npm start
```

Server URL

```text
http://localhost:5000
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/login
```

### Tender Enquiries

```http
POST /api/hpvp/create
```

```http
GET /api/hpvp/all
```

### Sale Orders

```http
POST /api/saleorder/create
```

```http
GET /api/saleorder/all
```

---

## Project Structure

```text
backend/
│
├── config/
├── controllers/
├── middleware/
├── routes/
├── uploads/
├── db.js
├── server.js
└── package.json
```

---

## Database

Database Provider:

```text
Neon PostgreSQL
```

Main Tables:

```text
users
hpvp_enquiries
sale_orders
```

---

## Deployment

Backend deployed using Render.

```text
https://bhel-complaint-system.onrender.com
```

---

## Major Features

- REST API Architecture
- PostgreSQL Integration
- Document Upload Support
- Cloud Deployment
- Secure Authentication
- Database Management

---

## Author

Sai Charan

Industrial Internship Project

BHEL HPVP Marketing Management System
