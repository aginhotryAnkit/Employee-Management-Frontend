import React from 'react'
import SideBarMenu from '../components/SideBarMenu';
import SearchBar from '../components/SearchBar';
import dashboardlist from '../data/dashboard-list.json';
import TableEmp from '../components/TableEmp';

function Dashboard() {

  const summary = dashboardlist.summary;
  const recentEmployee = dashboardlist.recentEmployees;
  console.log(recentEmployee);
  const { title, count } = dashboardlist.summary.totalEmployees

  return (

    <>
      <div className='flex '>
        <div className='w-100 flex-1 p-5 '>
          <h1 className='text-4xl font-bold mb-2'>Welcome back, Admin</h1>
          <p className='font-semibold text-md text-gray-600'>Here is your curate capital overview for today.</p>
        </div>
      </div>
      <div className='flex gap-[50px] mt-[20px]'>
        {
          Object.entries(summary).map(([key, value]) => (
            <div className='shadow-md p-[32px] border-1 border-gray-200 rounded-md' key={key}>
              <div>
                <h1 className='font-semibold uppercase mb-3 text-gray-600 '>{title}</h1>

              </div>
              <p className='text-5xl font-bold'>{count}</p>
            </div>
          ))
        }
      </div>
      <TableEmp title="Recent Employee" className="mt-[50px]" data={recentEmployee}/>
    </>
  )
}

export default Dashboard
