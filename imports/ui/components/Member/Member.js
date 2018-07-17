import React, { Fragment } from 'react';
import { FixedColumn, Select, Option, Delete } from '../../styles/MemberStyle';
import { Meteor } from 'meteor/meteor';
import { ScheduleContext } from '../../App';
class Member extends React.Component {
  scheduleChangeHandler = (e, member, member_id, day, week) => {
    let weekIndex = week - 1;
    let newStatus = e.target.value;
    Meteor.call('changeSchedule', member, member_id, newStatus, day, weekIndex);
  };
  render() {
    const { info, _id, Rank, Section, status, week } = this.props;
    const { schedule, firstName, lastName, section, rank } = info;
    //console.log('schedule', schedule);
    const weeklySchedule = schedule[week - 1].map((dailySchedule, index) => {
      //console.log('week', week);
      return (
        <Select
          name="status"
          type={dailySchedule}
          key={_id + index}
          value={dailySchedule}
          onChange={e => this.scheduleChangeHandler(e, info, _id, index, week)}
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
              <Delete/>
            </Fragment>
          );
        }}
      </ScheduleContext.Consumer>
    );
  }
}
export default Member;
