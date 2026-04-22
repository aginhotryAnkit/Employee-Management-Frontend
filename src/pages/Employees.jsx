import React from 'react'
import '../pages/employees.css'
import TableEmp from '../components/TableEmp';
import employeList from '../data/employee-list.json'


function Employees() {
    const Employeelist = employeList;
    console.log(Employeelist);
    
    return (
      <TableEmp title="All Employee" data={Employeelist}/>
    )
}

export default Employees
