import React from 'react';
import Modal from './Modal';
import {
  ModalMain,
  ModalWrapper,
  CloseButton
} from '../../../styles/ModalStyle';

const ModalContainer = ({showModal, toggleModalHandler, modal, handleWeekChange, employees,week,status }) => {

  return (
    <ModalWrapper toggle={showModal}>
      <CloseButton onClick={toggleModalHandler}>X</CloseButton>
      <ModalMain>
        <Modal modal={modal} 
               handleWeekChange={handleWeekChange}
               employees={employees}
               week={week}
        />
      </ModalMain>
    </ModalWrapper>
  );
};

export default ModalContainer;
