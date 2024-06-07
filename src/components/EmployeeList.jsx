// src/components/EmployeeList.js
import React from 'react';
import EmployeeListItem from './EmployeeListItem';
// import './EmployeeList.css';

const EmployeeList = () => {
  // Sample data
  const employees = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];

  return (
    <div className="employee-list">
      {employees.map((employee, index) => (
        <EmployeeListItem key={index} name={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
