import { Meteor } from 'meteor/meteor';

import '../imports/server/accounts';

Meteor.publish('currentUser', function() {
  return Meteor.users.find(
    { _id: this.userId },
    {
      //fields defines properties to be made available
      fields: {
        schedule: 1,
        rank: 1,
        section: 1
      }
    }
  );
});

Meteor.publish('allUser', function() {
  return Meteor.users.find(
    {},
    {
      fields: {
        schedule: 1,
        rank: 1,
        section: 1
      }
    }
  );
});
Meteor.startup(() => {
  // code to run on server at startup
});
