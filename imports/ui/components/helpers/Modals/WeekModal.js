import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const WeekModal = (props) => {

  const { handleWeekChange } = props;
  return <DayPicker 
          showWeekNumbers
          firstDayOfWeek={1}
          onWeekClick = { 
            ( week ) => (
              handleWeekChange(week)
            )}
          />;
};

export default WeekModal;
