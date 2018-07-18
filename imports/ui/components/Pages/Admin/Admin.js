import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { withTracker } from 'meteor/react-meteor-data';
import SelectCreator from '../../helpers/SelectCreator';
class Admin extends React.Component {
  state = {
    errors: [],
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    rank: 'Manager',
    section: 'iOS'
  };
  checkInputs = () => {
    let errors = [];
    if (this.state.password !== this.state.confirmPassword) {
      errors = [...errors, 'Password does not match'];
    }
    if (this.state.password.length < 1) {
      errors = [...errors, 'Password is required'];
    }
    if (this.state.username.length < 1) {
      errors = [...errors, 'Username is required'];
    }

    if (this.state.username.length < 3) {
      console.log('less than 3', this.state.username);
      errors = [...errors, 'Username must be at least 3 characters long'];
    }
    if (errors.length > 0) {
      console.log('error set state', errors);
      this.setState({
        errors: errors
      });
      return false;
    }
    this.setState({
      error: []
    });
    return true;
  };
  addNewUserHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    if (!this.checkInputs()) {
      return false;
    }
    let { rank, section } = this.props;
    rank = rank.indexOf(this.state.rank);
    section = section.indexOf(this.state.section);
    //console.log('rank, section', rank, section);
    Accounts.createUser(
      {
        username: this.state.username,
        password: this.state.password,
        lastName: this.state.lastName,
        firstName: this.state.firstName,
        rank,
        section
      },
      error => {
        if (!error) {
          alert('new employee added');
        } else {
          console.log('create user error', error);
          alert(error.reason);
        }
      }
    );
    this.setState(state => ({
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      rank: '',
      section: ''
    }));
  };

  onChangeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;

    //console.log('name, value', name, value);
    this.setState(() => ({
      [name]: value
    }));
  };
  render() {
    //console.log('this.props', this.props);
    //console.log('this.state', this.state);
    const { section, rank } = this.props;
    return (
      <div>
        <h2>Admininistrator</h2>
        <main>
          {this.state.errors.length > 0 &&
            this.state.errors.map((err, i) => {
              return <p key={i}>{err}</p>;
            })}
          <h3>Add Employee</h3>
          <form onSubmit={this.addNewUserHandler}>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChangeHandler}
            />
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onChangeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.onChangeHandler}
            />
            <SelectCreator
              name="section"
              value={this.state.section}
              onChangeHandler={this.onChangeHandler}
              items={section}
            />
            <SelectCreator
              name="rank"
              value={this.state.rank}
              onChangeHandler={this.onChangeHandler}
              items={rank}
            />
            <button type="submit">Add new Employee</button>
          </form>
        </main>
      </div>
    );
  }
}

export default (AdminContainer = withTracker(() => {
  const userHandle = Meteor.subscribe('allUsers');
  const loading = !userHandle.ready();
  return {
    loading,
    users: Meteor.users.find({}).fetch()
  };
})(Admin));
