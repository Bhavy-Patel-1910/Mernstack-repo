import React from 'react'
import {EmployeeList} from './EmployeeList'

export const Employees = () => {
    var title ="EMPLOYEE APP";
    var company ={
        name:"TCS",
        year:"2026",
    };
     var employees = [
        { id:101, name:"Bhavy", age:23},
        { id:102, name:"Divy", age:24},
        { id:103, name:"Man", age:25},
        { id:104, name:"Patel", age:26},
     ]

  return (
    <div style={{textAlign:"centre"}}>
        <h1>Employees</h1>
        
        <EmployeeList title={title} company={company} employees = {employees}></EmployeeList>
    </div>
  );
};
