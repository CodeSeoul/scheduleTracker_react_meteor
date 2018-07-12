import { Meteor } from 'meteor/meteor';

import '../imports/server/accounts';

Meteor.publish('currentUser', function() {
  return Meteor.users.find(
    { _id: this.userId },
    {
      //fields defines properties to be made available
      fields: {
        info: 1
      }
    }
  );
});

Meteor.publish('allUsers', function() {
  return Meteor.users.find(
    {},
    {
      fields: {
        info: 1
      }
    }
  );
});

Meteor.startup(() => {
  // code to run on server at startup
});
