import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

if (Meteor.users.find().fetch().length < 1) {
  let userId = Accounts.createUser({
    username: 'admin',
    email: 'admin@admin.com',
    password: 'nimda',
    profile: {
      firstName: 'Learn',
      lastName: 'React'
    }
  });
}
