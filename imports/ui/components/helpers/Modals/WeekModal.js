import React from 'react';
import DayPicker from 'react-day-picker';
import '../../../styles/react-day-picker-style.css';

const WeekModal = (props) => {

  const { handleWeekChange } = props;
  return <DayPicker 
          showWeekNumbers
          fixedWeeks
          firstDayOfWeek={1}
          onWeekClick = { 
            ( week ) => (
              handleWeekChange(week)
            )}
          />;
};

export default WeekModal;
