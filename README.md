# 🛒 Amazon FBA Management Tool

A full-stack web application designed for Amazon FBA sellers to track inventory, monitor accounting data, and view sales performance — all in one place.

---

## 🔧 Tech Stack

- **Frontend:** React, Axios, React Router, Tailwind CSS (or Material UI)
- **Backend:** Django, Django REST Framework, SimpleJWT
- **Database:** PostgreSQL
- **Authentication:** JWT-based login and token refresh
- **Deployment (optional):** Vercel (frontend), Render or Railway (backend)

---

## 🚀 Features

### ✅ Authentication
- JWT-based login and token storage
- Protected dashboard with `PrivateRoute`
- Automatic token refresh on expiry
- Logout and user session handling

### ✅ Inventory Management
- View all products and current stock
- Add/edit/delete products and inventory records
- Low-stock alerts and inventory age tracking (planned)

### ✅ Accounting Dashboard
- Record transactions and expenses
- View real-time P&L reports
- Filter by SKU, supplier, or date (planned)
- Export reports (CSV/PDF) (planned)

### ✅ Responsive UI
- Clean and simple user interface
- Optimized for desktop and mobile screens

---

## 📁 Project Structure

```bash
fba_tool/
├── backend/               # Django backend
│   ├── fba_backend/       # Main project
│   ├── inventory/         # Inventory app
│   └── accounting/        # Accounting app
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # UI Components
│   │   ├── api.js         # Axios config
│   │   ├── auth.js        # Auth logic
│   │   ├── App.jsx
│   │   └── privateRoute.js
├── db/                    # (Optional) DB schema/migrations
└── README.md
```

---

## 🛠️ Getting Started

### Backend
```bash
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## 🧪 Sample Test Accounts

You can create a test user with:

```bash
python manage.py createsuperuser
```

Then log in via the frontend `/login` page.

---

## ✨ Future Enhancements

- Inventory forecasting (based on sales velocity)
- Supplier order generation
- Multi-user support and role permissions
- Integration with Amazon SP-API
- Notifications & restock reminders

---

## 📜 License

This project is for educational and portfolio use. Feel free to fork and customize!
