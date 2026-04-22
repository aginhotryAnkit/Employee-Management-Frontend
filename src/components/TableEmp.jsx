import React from 'react'
import '../pages/employees.css'
import Button from '../components/Button';
import { HiUserAdd } from 'react-icons/hi'
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom'

function TableEmp({ title, className, data }) {
    const navigate = useNavigate()
    const avatars = import.meta.glob('../assets/avatar-imges/*.png', {
        eager: true,
        import: 'default'
    })

    return (
        <div className={`${className}`}>
            <div className='employee-table mt-5'>
                <div className='flex justify-between'>
                    <Title title={title} />
                    <Button className="addEmply-btn flex items-center gap-2 text-white px-4 py-3 cursor-pointer rounded-lg font-semibold" action={()=> navigate('/dashboard/employees/add')
                    }>
                        <HiUserAdd size={24} />
                        Add Employee
                    </Button>
                </div>
                {
                    data.length > 0 ? (
                        <div className=''>

                            <div className='empl-cards w-full mb-5'>
                                <table className='w-full'>
                                    <tbody className='w-full'>
                                        <tr className=''>
                                            <th align='left' className='text-gray-600 pb-4'>Name</th>
                                            <th align='left' className='text-gray-600 pb-4'>Role</th>
                                            <th align='left' className='text-gray-600 pb-4'>Department</th>
                                            <th align='left' className='text-gray-600 pb-4'>Status</th>
                                        </tr>

                                        {
                                            data.map((emp, index) => (
                                                <tr key={index} >
                                                    <td className='pb-4'>
                                                        <div className='flex gap-3 items-center'>
                                                            <div>
                                                                <img src={avatars[`../assets/avatar-imges/${emp.avatar}`]} alt="" width={50} height={50} />
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold'>{emp.name}</div>
                                                                <div className='text-sm text-gray-500'>{emp.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>{emp.role}</p>
                                                    </td>
                                                    <td>
                                                        <p>{emp.department}</p>
                                                    </td>
                                                    <td>
                                                        <div className='flex '>

                                                            {
                                                                emp.status === 'Active' ? <p className='bg-indigo-200 font-semibold text-indigo-500 rounded-3xl py-2 px-3 text-sm uppercase'>{emp.status}</p> : <p className='uppercase text-sm bg-red-200 rounded-3xl py-2 px-3 font-semibold text-amber-700'>{emp.status}</p>
                                                            }
                                                        </div>

                                                    </td>

                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    ) : (
                        <p>No Employee Found</p>
                    )
                }
            </div>
        </div>
    )
}

export default TableEmp
