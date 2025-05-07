```markdown
# Fullstack Project Setup

This project includes a `backend` built with NestJS and a `frontend` (e.g., React or Next.js). This guide explains how to quickly set up and run both parts of the application using a single script.

---

## 📁 Project Structure



root/
├── backend/     # NestJS backend
├── frontend/    # ReactTS fronted
├── setup.js     # Setup script
└── README.md    # This file


---

## ✅ Prerequisites

Before running the script, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) running **locally**

To check MongoDB is running on your machine:

```bash
mongo
````

If not installed, follow the official [MongoDB installation guide](https://docs.mongodb.com/manual/installation/).

> ⚠️ MongoDB must be accessible at `mongodb://127.0.0.1:27017` (default local address).

---

## 🚀 Quick Setup (Recommended)

This project includes a `setup.js` script to handle everything for you.

### Steps:

1. Open a terminal in the **project root directory**.
2. Run:

```bash
node setup.js
```

The script will:

* Create a `.env` file in the `backend/` folder.
* Install dependencies in both `backend/` and `frontend/`.
* Start the backend server with `npm run start:dev`.
* Start the frontend app with `npm run dev`.

---

## 🔐 `.env` (Auto-Generated)

The `.env` file will be created inside the `backend/` folder with the following values:

```env
DB_URI=mongodb://127.0.0.1:27017/nest
JWT_SECRET=hassantawfik
JWT_EXPIRES=3d
PORT=4000
```

---

## 🧪 Manual Setup (Optional)

If you prefer to run things manually:

```bash
# Backend
cd backend
npm install
npm run start:dev

# Frontend
cd ../frontend
npm install
npm run dev
```

---

## 💡 Troubleshooting

* **MongoDB not found?** Make sure it's installed and running.
* **Ports in use?** Check or change ports in `.env` or package scripts.
* **Permission issues on Unix?** Try running with `sudo` or adjusting permissions.

---

## 🧾 License

MIT or your preferred license.
