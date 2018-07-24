import React from 'react';


const status = ['Normal', 'Training', 'Weekend OT', 'Business Trip', 'On Leave'];
const DashboardModal = ({employees}) => {
  
  const summary = employees.map( (employee,i) =>{
    return <div key={i}>{employee.info.firstName}</div>
  });

  return <h1>{summary}</h1>;
};

export default DashboardModal;
