import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h2>Admininistrator</h2>
        <main>
          <h3>Add Employee</h3>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="repeat password" />
            <button type="submit">Add new Employee</button>
          </form>
        </main>
      </div>
    );
  }
}
export default Admin;
