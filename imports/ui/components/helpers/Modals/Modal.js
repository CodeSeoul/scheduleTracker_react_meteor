import React from 'react';
import DashboardModal from './DashboardModal';
import LoginModal from './LoginModal';
import WeekModal from './WeekModal';

const Modal = ({ modal }) => {
  switch (modal) {
    case 'week':
      return WeekModal;
    case 'dashboard':
      return DashboardModal;
    case 'login':
      return LoginModal;
    default:
      return null;
  }
};

export default Modal;
