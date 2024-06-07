// src/components/EmployeeListItem.js
import React from 'react';
// import './EmployeeListItem.css';

const EmployeeListItem = ({ name }) => {
  return (
    <div className="employee-list-item">
      {name}
      
    </div>
  );
};

export default EmployeeListItem;
