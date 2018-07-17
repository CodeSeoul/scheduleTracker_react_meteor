import React, { Fragment } from 'react';
import { FixedColumn, Select, Option, Delete } from '../../styles/MemberStyle';
import { Meteor } from 'meteor/meteor';
import { ScheduleContext } from '../../App';
class Member extends React.Component {
  scheduleChangeHandler = (e, member, member_id, day, week) => {
    //console.log('e.target.value', e.target.index);
    //console.log('e.target.name', e.target.name);
    //console.log('MEMBER SET', Meteor.userId());
    //console.log('_id', member);
    let newStatus = e.target.value;
    console.log(typeof day, 'TYPE!!');
    Meteor.call('changeSchedule', member, member_id, newStatus, day, week);
  };
  render() {
    //console.log('props, Member', this.props);
    //I'm going to add 'week' key to the state in App component and pass it to Member component. For now, I'm using week 0(index '0')
    const {
      info,
      _id,
      Rank,
      Section,
      status,
      scheduleChangeHandler
    } = this.props;
    const { schedule, firstName, lastName, section, rank } = info;
    //console.log('schedule', schedule);
    const weeklySchedule = schedule[0].map((dailySchedule, index) => {
      //console.log('dailySchedule', dailySchedule);
      return (
        <Select
          name="status"
          type={dailySchedule}
          key={_id + index}
          value={dailySchedule}
          onChange={e => this.scheduleChangeHandler(e, info, _id, index)}
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
