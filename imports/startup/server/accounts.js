import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
console.log('accounts start', Meteor.users.find().fetch().length < 1);
console.log('accounts start', Meteor.users.find().fetch().length);
if (Meteor.users.find().fetch().length < 1) {
  Accounts.createUser({
    username: 'admin',
    email: 'admin@admin.com',
    password: 'asdf'
    // profile: {
    //   firstName: 'Learn',
    //   lastName: 'React'
    // }
  });
}

if (Meteor.users.find().fetch().length < 2) {
  Accounts.createUser({
    username: 'qqq',
    email: 'qqq@admin.com',
    password: 'qqq'
    // profile: {
    //   firstName: 'Learn',
    //   lastName: 'React'
    // }
  });
}
