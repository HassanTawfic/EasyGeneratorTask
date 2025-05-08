```markdown
# Fullstack Project Setup

This project contains a backend built with **NestJS** and a **frontend** (e.g., React or Next.js). The setup script allows you to quickly get both parts of the application running with minimal configuration.

---

## 📖 API Documentation (Swagger)

Once the backend server is running, you can view and test the API using Swagger at:

```

[http://localhost:4000/auth](http://localhost:4000/auth)

```

> The Swagger UI is auto-configured via NestJS and provides a visual interface to explore and test endpoints.

---

## 📁 Project Structure


root/
├── backend/     # NestJS backend
├── frontend/    # Frontend app
├── setup.js     # Setup script to initialize and run the project
└── README.md    # Project documentation


---

## ✅ Prerequisites

Before running the script, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) running **locally**

To check if MongoDB is running on your machine, execute:

```bash
mongo
````

If MongoDB is not installed, follow the official [MongoDB installation guide](https://docs.mongodb.com/manual/installation/).

> ⚠️ MongoDB must be running and accessible at `mongodb://127.0.0.1:27017` (default local address).

---

## 🚀 Quick Setup (Recommended)

This project includes a `setup.js` script to handle the setup and startup for you.

### Steps:

1. Open a terminal in the **project root directory**.
2. Run the setup script:

```bash
node setup.js
```

The script will:

* Create a `.env` file in the `backend/` folder with the required variables.
* Install dependencies in both the `backend/` and `frontend/` directories.
* Start the backend server with `npm run start:dev`.
* Start the frontend application with `npm run dev`.

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

If you prefer to set up the project manually, follow these steps:

### Backend Setup:

```bash
cd backend
npm install
npm run start:dev
```

### Frontend Setup:

```bash
cd frontend
npm install
npm run dev
```

---

## 💡 Troubleshooting

* **MongoDB not found?** Ensure MongoDB is installed and running on your local machine.
* **Ports in use?** If the default ports are occupied, change the port in the `.env` file or free up the port.
* **Permission issues on Unix systems?** Use `sudo` or ensure the correct permissions are set for files and directories.

---

## 🧾 License

MIT or your preferred license.
