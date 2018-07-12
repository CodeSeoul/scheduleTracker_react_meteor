import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class Admin extends React.Component {
  addNewUserHandler = e => {
    e.preventDefault();
    e.stopPropagation();

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
  };
  render() {
    return (
      <div>
        <h2>Admininistrator</h2>
        <main>
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
export default Admin;
