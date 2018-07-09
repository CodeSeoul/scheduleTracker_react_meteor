import React, { Fragment } from "react";
import { FixedColumn, Select, Option } from '../../styles/MemberStyle'

const Member = props => {

  //I'm going to add 'week' key to the state in App component and pass it to Member component. For now, I'm using week 0(index '0')
  const { schedule, _id, section, firstName, Rank, Section, rank, status } = props
  const weeklySchedule = schedule[0].map((dailySchedule, index) => {
    return (
      <Select type={dailySchedule} key={_id + index}>
        {status.map((stat,idx)=>{return <Option key = {_id + idx} selected={dailySchedule===idx ? 'selected':''}>{stat}</Option> })}
      </Select>
      );
  });

  console.log(props);
 


  return (
    <Fragment>
      <FixedColumn>{Section[section]}</FixedColumn>
      <FixedColumn>{firstName}</FixedColumn>
      <FixedColumn>{Rank[rank]}</FixedColumn>
      {weeklySchedule}
    </Fragment>
  );
};

export default Member;
