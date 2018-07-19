import React, { Fragment } from 'react';
import {
  FixedColumn,
  Select,
  Option,
  Delete,
  DeleteIcon,
  SelectContainer
} from '../../styles/MemberStyle';
import { Meteor } from 'meteor/meteor';
import { ScheduleContext } from '../../App';
import IsAdmin from '../helpers/IsAdmin';
import { log } from 'util';
class Member extends React.Component {
  scheduleChangeHandler = (e, member, member_id, day, week) => {
    let weekIndex = week - 1;
    let newStatus = e.target.value;
    Meteor.call('changeSchedule', member, member_id, newStatus, day, weekIndex);
  };

  deleteHandler = (e, id) => {
    // delete user on the server
    if (confirm('Are you sure you want to delete this employee?')) {
      Meteor.call('deleteEmployee', id);
    }
  }

  tryGetUserRole = () =>{
    try {
      return Meteor.user().roles;
    } catch (error) {
      return null;
    }
  }

  render() {
    const { info, _id, Rank, Section, status, week } = this.props;
    const { schedule, firstName, lastName, section, rank } = info;

    const weeklySchedule = schedule[week - 1].map((dailySchedule, index) => {
      return (
        <SelectContainer>
          <Select
            name="status"
            type={dailySchedule}
            key={_id + index}
            value={dailySchedule}
            onChange={e => this.scheduleChangeHandler(e, info, _id, index, week)}
          >
            {status.map((stat, idx) => {

            if(this.tryGetUserRole() === 'admin' || stat === status[dailySchedule]){
              return (
                <Option key={_id + idx} value={idx}>
                  {stat}
                </Option>
              );}
            })}
          </Select>
        </SelectContainer>
      );

    });


    const SectionContainer = () => {
      return <div>{Section[section]}</div>
    }

    const NameContainer = () => {
      return <div>{`${firstName} ${lastName}`}</div>
    }

    const RankContainer = () => {
      return <div>{Rank[rank]}</div>
    }
    return (
      <ScheduleContext.Consumer>
        {context => {
          return (
            <Fragment>
              <FixedColumn><SectionContainer/></FixedColumn>
              <FixedColumn><NameContainer/></FixedColumn>
              <FixedColumn><RankContainer/></FixedColumn>
              {weeklySchedule}
              <IsAdmin>
                <Delete onClick={e => this.deleteHandler(e, _id)}>
                  <DeleteIcon src="/deleteIcon.png" />
                </Delete>
              </IsAdmin>
            </Fragment>
          );
        }}
      </ScheduleContext.Consumer>
    );
  }
}
export default Member;
