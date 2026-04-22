import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './sidebar.css'
import Dashboard from '../pages/Dashboard'
import { MdDashboard } from 'react-icons/md'
import { HiIdentification } from 'react-icons/hi'
import { MdAccountTree } from 'react-icons/md'


function SideBarMenu() {
  return (
    <div className='sidebar p-5 fixed left-0 top-0 h-screen'>
      <h3 className='text-xl font-bold mb-2'>Employee Management System</h3>
      <p className='font-semibold text-md text-gray-600'>HR Admin Console</p>
      <div className='flex flex-col mt-5 gap-2'>
        <div className='flex items-center gap-[4px] text-blue-600 '>
          <NavLink className={({isActive})=>{
            return isActive? 'bg-white text-blue-500 p-5 font-semibold text-xl shadow-md flex-1 rounded-lg' : 'bg-transparent text-xl text-gray-500 p-5'
          }} to="/dashboard" end>
            <div className='flex gap-4 items-center '>
              <MdDashboard size={24} /> <p>Dashboard</p>
            </div>
          </NavLink>
        </div>
      
         <div className='flex items-center gap-[4px] text-blue-600'>
          <NavLink className={({isActive})=>{
            return isActive? 'bg-white text-blue-500 p-5 font-semibold text-xl shadow-md flex-1 rounded-lg' : 'bg-transparent text-xl text-gray-500 p-5'
          }} to="/dashboard/employees">
            <div className='flex gap-4 items-center'>
              <HiIdentification size={24} /><p>Employee</p>
            </div>
          </NavLink>
        </div>
         <div className='flex items-center gap-[4px] text-blue-600'>
          <NavLink className={({isActive})=>{
            return isActive? 'bg-white text-blue-500 p-5 font-semibold text-xl shadow-md flex-1 rounded-lg' : 'bg-transparent text-xl text-gray-500 p-5'
          }} to="/dashboard/departments">
            <div className='flex gap-4 items-center'>
             <MdAccountTree size={24} /><p>Departments</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SideBarMenu
