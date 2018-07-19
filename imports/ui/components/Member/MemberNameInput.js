import React from 'react';

export default class MemberNameInput extends React.Component{
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
