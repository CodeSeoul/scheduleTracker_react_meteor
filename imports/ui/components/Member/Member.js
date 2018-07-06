import React, { Fragment } from "react";

const Member = props => {

  //I'm going to add 'week' key to the state in App component and pass it to Member component. For now, I'm using week 0(index '0')
  const { schedule, _id, section, firstName, rank } = props
  const weeklySchedule = schedule[0].map((dailySchedule, index) => {
    return <div key={_id + index}>{dailySchedule}</div>;
  });



  return (
    <Fragment>
      <div>{section}</div>
      <div>{firstName}</div>
      <div>{rank}</div>
      {weeklySchedule}
    </Fragment>
  );
};

export default Member;
