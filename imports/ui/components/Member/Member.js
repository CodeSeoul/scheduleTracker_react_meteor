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

  memberInfoUpdateHandler = (member_id, newState) => {
    Meteor.call('updateUserInfo', Meteor.userId(), member_id, newState);
  }
  
  deleteHandler = (e, id) => {
    // delete user on the server
    if (confirm('Are you sure you want to delete this employee?')) {
      Meteor.call('deleteEmployee', id);
    }
  }

  getEditAccess = () =>{
    try {
      const user = Meteor.user();
      if(user.roles === 'admin'){
        // this is admin
        return true;
      }
      // this is user
    } catch (error) {
      // this is guest
    } 
    return false;
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
            if(this.getEditAccess() || Meteor.userId() == _id || stat === status[dailySchedule]){
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

    const SectionContainer = ({editable}) => {
      if(editable) return (
        <select value={section} onChange={e => this.memberInfoUpdateHandler(_id, {section: e.target.selectedIndex})}>
          {Section.map((sectionName, idx)=>{
            return <option key={idx} value={idx}>{sectionName}</option>
          })}
        </select>
      )
      else return <div>{Section[section]}</div>
    }

    const NameContainer = ({editable}) => {
      if(editable) return <EditableText 
        memberInfoUpdateHandler={this.memberInfoUpdateHandler} 
        defaultValue={`${firstName} ${lastName}`}/>
      else return <div>{`${firstName} ${lastName}`}</div>
    }

    const RankContainer = ({editable}) => {
      if(editable) return <div>{Rank[rank]}</div>
      else return <div>{Rank[rank]}</div>
    }

    class EditableText extends React.Component{
      state = {
        lastValue: '',
        editingValue: '',
        onEdit: false,
      }

      constructor(props){
        super(props);
        this.state.lastValue = props.defaultValue;
      }

      handleEdit = (e) => {
        this.setState({editingValue: e.target.value});
      }

      handleEnter = (e) => {
        if(e.key == 'Enter'){
          const value = this.state.editingValue;
          this.setState({onEdit: false, lastValue: value});
          var firstName = value.substring(0, value.lastIndexOf(' ') + 1);
          var lastName = value.substring(value.lastIndexOf(' ') + 1, value.length);
          this.props.memberInfoUpdateHandler(_id, {firstName, lastName});
        }
      }

      handleCancel = (e) => {
        this.setState({onEdit: false});
      }

      handleClick = (e) => {
        this.setState({onEdit: true, editingValue: this.state.lastValue});
      }

      render = () => {
        if(this.state.onEdit){
          return(
            <input autoFocus type="text" value={this.state.editingValue} onChange={this.handleEdit} onBlur={this.handleCancel} onKeyPress={this.handleEnter}/>
          )
        }
        return (
          <span onClick={this.handleClick}>{this.state.lastValue}</span>
        )
      }
    }

    const editable = this.getEditAccess();
    return (
      <ScheduleContext.Consumer>
        {context => {
          return (
            <Fragment>
              <FixedColumn><SectionContainer editable={editable}/></FixedColumn>
              <FixedColumn><NameContainer editable={editable}/></FixedColumn>
              <FixedColumn><RankContainer editable={editable}/></FixedColumn>
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
