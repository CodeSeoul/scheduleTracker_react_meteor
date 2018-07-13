import React, { Fragment } from 'react';
import { FixedColumn, Select, Option } from '../../styles/MemberStyle';
import { ScheduleContext } from '../../App';

const Member = props => {
  console.log('props, Member', props);
  //I'm going to add 'week' key to the state in App component and pass it to Member component. For now, I'm using week 0(index '0')
  const {
    info,
    _id,
    section,
    Rank,
    Section,
    rank,
    status,
    scheduleChangeHandler
  } = props;
  const { schedule, firstName, lastName } = info;
  const weeklySchedule = schedule[0].map((dailySchedule, index) => {
    return (
      <Select
        type={dailySchedule}
        key={_id + index}
        value={dailySchedule}
        onChange={event => scheduleChangeHandler(event, _id, index)}
      >
        {status.map((stat, idx) => {
          return (
            <Option key={_id + idx} value={idx}>
              {stat}
            </Option>
          );
        })}
      </Select>
    );
  });

  return (
    <ScheduleContext.Consumer>
      {context => {
        return (
          <Fragment>
            <FixedColumn>{Section[section]}</FixedColumn>
            <FixedColumn>{`${firstName} ${lastName}`}</FixedColumn>
            <FixedColumn>{Rank[rank]}</FixedColumn>
            {weeklySchedule}
          </Fragment>
        );
      }}
    </ScheduleContext.Consumer>
  );
};

export default Member;
