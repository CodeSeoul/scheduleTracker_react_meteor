import React, { Fragment } from "react";

const Member = props => {

  //I'm going to add 'week' key to the state in App component and pass it to Member component. For now, I'm using week 0(index '0')
  
  const weeklySchedule = props.employee.schedule[0].map((dailySchedule,index) => {
    return <div key={props.employee._id+index}>{dailySchedule}</div>;
  });

  

  return (
    <Fragment>
      <div>{props.employee.section}</div>
      <div>{props.employee.firstName}</div>
      <div>{props.employee.section}</div>
      {weeklySchedule}
    </Fragment>
  );
};

export default Member;
