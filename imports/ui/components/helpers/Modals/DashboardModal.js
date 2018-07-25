import React from 'react';
const daysInAWeek = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday' , 'Sunday'];
const scheduleStatus = ['Normal', 'Training', 'Weekend OT', 'Business Trip', 'On Leave'];
const DashboardModal = ({employees, week}) => {
  //statuses count of each day
  const count =[[0,0,0,0,0], //monday
                [0,0,0,0,0], //tuesday
                [0,0,0,0,0], //wednesday
                [0,0,0,0,0], //thursday
                [0,0,0,0,0], //friday
                [0,0,0,0,0], //saturday
                [0,0,0,0,0]]; //sunday
   employees.map((employee,i) =>{
      employee.info.schedule[week-1].map((status, i)=>{
        count[i][status]++;
      }); 
    });

    const summary = count.map((statuses, i) => {
      return (<div key={i}>{daysInAWeek[i]}: {statuses.map((status,j) => {
              if(status !== 0 && j!==0){
                return (scheduleStatus[j] + '>' + status + "person.");
              }
            })}</div>)
    });

  return (<div>
          <h1>
           Week {week}
          </h1>
            {summary}
          </div>
          );
};

export default DashboardModal;
