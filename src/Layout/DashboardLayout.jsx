import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarMenu from '../components/SideBarMenu'
import SearchBar from '../components/SearchBar'

function DashboardLayout() {
    return (
        <div className='flex h-screen overflow-hidden'>
            <SideBarMenu />
            <div className='w-100 ml-[280px] flex-1 overflow-y-auto p-5'>
                <SearchBar />
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout
