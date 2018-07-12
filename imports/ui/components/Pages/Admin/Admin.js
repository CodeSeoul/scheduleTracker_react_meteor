import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
class Admin extends React.Component {
  state = {
    errors: []
  };
  checkInputs = () => {
    let errors = [];
    if (this.password.value !== this.confirmPassword.value) {
      errors = [...errors, 'Password does not match'];
    }
    if (this.password.value.length < 1) {
      errors = [...errors, 'Password is required'];
    }
    if (this.username.value.length < 1) {
      errors = [...errors, 'Username is required'];
    }

    if (this.username.value.length < 3) {
      console.log('less than 3', this.username.value);
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
    Accounts.createUser(
      {
        username: this.username.value,
        password: this.password.value
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
    this.username.value = '';
    this.password.value = '';
    this.confirmPassword.value = '';
  };
  render() {
    console.log('this.props', this.props);
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
              ref={input => (this.username = input)}
            />
            <input
              type="password"
              placeholder="Password"
              ref={input => (this.password = input)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              ref={input => (this.confirmPassword = input)}
            />
            <button type="submit">Add new Employee</button>
          </form>
        </main>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('allUsers');

  return {
    users: Meteor.users.find({}).fetch()
  };
}, Admin);
