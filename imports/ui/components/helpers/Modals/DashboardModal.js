import React from 'react';
import {ModalTable,
        TableData, 
        TableHead,
        ModalHeader} from '../../../styles/DashboardModalStyle.js'
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
   
    employees.map((employee,i) =>{ //count number of statuses in each day
      employee.info.schedule[week-1].map((status, i)=>{
        count[i][status]++;
      }); 
    });

    const tblHead = scheduleStatus.map((status,i)=>{
      return <TableHead key={i}>{status}</TableHead>
    });

    const tblData = count.map((statusesCount, i) => {
      return (<tr key={'row-'+i}>
              <TableData key={'day-'+i}>{daysInAWeek[i]}</TableData> 
              {statusesCount.map((statusCount,j) => {
                return (<TableData key={'status-'+j}>{statusCount}</TableData>);
            })}</tr>)
    });

  return (<div>
            <ModalHeader>
            Week {week}
            </ModalHeader>
            <ModalTable>
              <thead>
                <tr>
                  <TableHead>Day</TableHead>{tblHead}
                </tr>
              </thead>
              <tbody>
                {tblData}
              </tbody>
            </ModalTable>
          </div>
          );
};

export default DashboardModal;
