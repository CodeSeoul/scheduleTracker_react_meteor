import React from 'react';
import DashboardModal from './DashboardModal';
import LoginModal from './LoginModal';
import WeekModal from './WeekModal';

const Modal = ({ modal }) => {
  console.log('modal:', modal);
  let displayModal =
    modal === 'week' ? (
      <WeekModal />
    ) : modal === 'dashboard' ? (
      <DashboardModal />
    ) : (
      (modal = 'login' ? <LoginModal /> : null)
    );

  return (
    <div>
      <p>Modal</p>
      {displayModal !== null ? displayModal : <p>No Modal set</p>}
    </div>
  );
};

export default Modal;
