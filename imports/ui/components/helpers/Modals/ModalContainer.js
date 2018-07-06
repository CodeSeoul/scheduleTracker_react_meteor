import React from 'react';
import DashboardModal from './DashboardModal';
import LoginModal from './LoginModal';
import WeekModal from './WeekModal';

const ModalContainer = ({ showModal, toggleModalHandler, modal }) => {
  const showHideClassName = showModal
    ? 'modal display-block'
    : 'modal display-none';
  const modalDisplayed = () => {
    switch (modal) {
      case 'week':
        return WeekModal;
      case 'dashboard':
        return DashboardModal;
      default:
        return LoginModal;
    }
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        modalDisplayed
        <button onClick={toggleModalHandler}>Close</button>
      </section>
    </div>
  );
};

export default ModalContainer;
