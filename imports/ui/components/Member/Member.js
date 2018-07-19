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
  };

  sectionRankHandler = (e, info, _id)=>{
  }

  render() {
    const { info, _id, Rank, Section, status, week } = this.props;
    const { schedule, firstName, lastName, section, rank } = info;
    //console.log('schedule', schedule);
    const sectionSelect =
   <SelectContainer>
     <Select
     key={_id}
     value={section}
     onChange={e=>this.sectionRankHandler(e, info, _id)}
     >
     {Section.map((section,idx)=>{
       return(
         <Option key={_id + idx} value={Section[idx]}>
            {section}
          </Option>
              )
      })}
      </Select>
    </SelectContainer>

    const rankSelect =
    <SelectContainer>
      <Select
      key={_id}
      value={rank}
      onChange={e=>this.sectionNameRankHandler(e, info, _id)}
      >
      {Rank.map((rank,idx)=>{
        return(
          <Option key={_id + idx} value={Rank[idx]}>
            {rank}
          </Option>
              )
      })}
      </Select>
    </SelectContainer>

    const weeklySchedule = schedule[week - 1].map((dailySchedule, index) => {
      //console.log('week', week);
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
              return (
                <Option key={_id + idx} value={idx}>
                  {stat}
                </Option>
              );
            })}
          </Select>
        </SelectContainer>
      );
    });

    return (
      <ScheduleContext.Consumer>
        {context => {
          return (
            <Fragment>
              {sectionSelect}
              <FixedColumn>{`${firstName} ${lastName}`}</FixedColumn>
              {rankSelect}
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
