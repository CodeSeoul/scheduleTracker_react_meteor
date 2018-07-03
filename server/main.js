import { Meteor } from 'meteor/meteor';
import Employees from '/imports/api/employees';
import _ from 'lodash';
import { helpers, random, name } from 'faker';

Meteor.startup(() => {
  // code to run on server at startup
  const employeesNumber = Employees.find({}).count();
  //console.log(employeesNumber < 1);
  //check if startup is run on server
  if (Meteor.isServer) {
    // check if data exists in collection
    if (!employeesNumber) {
      _.times(50, () => {
        const scheduleArrays = function() {
          let schedule = [];
          for (let i = 0; i < 50; i++) {
            let week = [
              _.random(0, 4),
              _.random(0, 4),
              _.random(0, 4),
              _.random(0, 4),
              _.random(0, 4),
              _.random(0, 4),
              _.random(0, 4)
            ];
            schedule = [...schedule, week];
          }
          return schedule;
        };

        Employees.insert({
          id: random.number(),
          firstName: name.firstName(),
          lastName: name.lastName(),
          rank: _.random(0, 3),
          section: _.random(0, 3),
          schedule: scheduleArrays()
        });
      });
    }
  }
  // const finalCount = Employees.find({}).count();
  // console.log('finalCount', finalCount);
  Meteor.publish('employees', function() {
    return Employees.find({}, { limit: 100 });
  });
});
/**
 schema shape
 rank and section has value of 1-4 to represent data
 //schedule property is an array of 50 arrays. Each representing a week.  
 //each week array has 7 items with a value range of 1 - 4. representing a status
 {
   id: 124
   firstName: "John",
   lastName: "Doe",
   rank: 1,
   section: 2,
   schedule: [
     [1,1,3,2,4,1,1],
     [1,1,3,2,4,1,1],
     ...50 more
   ]
 }
 
 */
