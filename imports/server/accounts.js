Accounts.onCreateUser((options, user) => {
  console.log('options', options);
  console.log('user', user);

  const scheduleArrays = () => {
    let schedule = [];
    for (let i = 0; i < 52; i++) {
      let week = [0, 0, 0, 0, 0, 0, 0];
      schedule = [...schedule, week];
    }
    return schedule;
  };
  user.info = {
    rank: 0,
    section: 0,
    schedule: scheduleArrays(),
    firstName: options.firstName,
    lastName: options.lastName
  };
  return user;
});

if (Meteor.isServer) {
  //publish runs a callback that makes data available to the client
  //subscribes in App.js to get the data
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

  Meteor.methods({
    changeSchedule(member, _id, newStatus, day) {
      console.log('method hit!!!!!!!!', member);
      check(member, Object);
      if (member) {
        Meteor.users.update(
          { _id },
          {
            $set: {
              ['info.schedule.0.' + day]: newStatus
            }
          }
        );
      }
    }
  });
}
