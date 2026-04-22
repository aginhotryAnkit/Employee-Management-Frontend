import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AuthForm from './AuthForm'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import DashboardLayout from './Layout/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Departments from './pages/Departments'
import AddEmployeeForm from './components/AddEmployeeForm'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="departments" element={<Departments />} />
          <Route path="/dashboard/employees/add" element={<AddEmployeeForm />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
