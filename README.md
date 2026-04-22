# 🧑‍💼 Employee Management System — Frontend

A modern HR Admin Portal built with **React 19**, **Vite**, and **Tailwind CSS v4**. Manage employees and departments through a clean, responsive dashboard interface.

---

## ✨ Features

- 🔐 **Authentication** — Login & Signup pages with form validation and toast notifications
- 📊 **Dashboard** — Overview of key HR metrics and recent employee activity
- 👥 **Employees** — View and manage the full employee list in a sortable table
- 🏢 **Departments** — Browse and manage company departments
- ➕ **Add Employee** — Dedicated form to onboard new employees
- 🧭 **Sidebar Navigation** — Active-state aware navigation with icons
- 📱 **Responsive Layout** — Built with Tailwind CSS utility classes

---

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 4 |
| React Router DOM | 7 |
| React Icons | 5 |
| React Toastify | 11 |
| Lucide React | latest |

---

## 📁 Project Structure

```
src/
├── assets/          # Images and avatar assets
├── components/      # Reusable UI components
│   ├── AddEmployeeForm.jsx
│   ├── Button.jsx
│   ├── SearchBar.jsx
│   ├── SideBarMenu.jsx
│   ├── TableEmp.jsx
│   └── Title.jsx
├── data/            # Static JSON data
│   ├── dashboard-list.json
│   └── employee-list.json
├── Layout/
│   └── DashboardLayout.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Employees.jsx
│   ├── Departments.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# Clone the repository
git clone https://github.com/aginhotryAnkit/Employee-Management-Frontend.git

# Navigate into the project
cd Employee-Management-Frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🗺️ Routes

| Path | Page |
|---|---|
| `/login` | Login Page |
| `/signup` | Signup Page |
| `/dashboard` | Dashboard Overview |
| `/dashboard/employees` | Employee List |
| `/dashboard/departments` | Departments |
| `/dashboard/employees/add` | Add New Employee |

---

## 🔮 Roadmap

- [ ] Connect to a REST API backend
- [ ] JWT-based authentication
- [ ] Employee CRUD operations
- [ ] Department management
- [ ] Search & filter employees
- [ ] Role-based access control (Admin / HR)
- [ ] Dark mode support

---

## 👨‍💻 Author

**Ankit Agnihotri**  
[![GitHub](https://img.shields.io/badge/GitHub-aginhotryAnkit-181717?style=flat&logo=github)](https://github.com/aginhotryAnkit)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
