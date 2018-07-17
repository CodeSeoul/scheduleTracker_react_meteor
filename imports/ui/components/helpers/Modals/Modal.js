import React from 'react';
import DashboardModal from './DashboardModal';
import WeekModal from './WeekModal';

const Modal = props => {
  const { modal, handleWeekChange } = props;
  console.log('modal to render:', modal);

  let displayModal = () => {
    switch (modal) {
      case 'week':
        return <WeekModal 
                 handleWeekChange={handleWeekChange}/>;
      case 'dashboard':
        return <DashboardModal />;
      default:
        return null;
    }
  };
  return (
    <div>{displayModal() !== null ? displayModal() : <p>No Modal set</p>}</div>
  );
};

export default Modal;
