import React, { Fragment } from "react";

const Member = props => {
  const weeklySchedule = props.employee.schedule[0].map(dailySchedule => {
    return <div key={props.key}>{dailySchedule}</div>;
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
