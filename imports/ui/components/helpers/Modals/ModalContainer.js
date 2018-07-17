import React from 'react';
import Modal from './Modal';
import {
  ModalMain,
  ModalWrapper,
  CloseButton
} from '../../../styles/ModalStyle';

const ModalContainer = ({ showModal, toggleModalHandler, modal }) => {
  const toggleDisplay = showModal ? true : false;

  return (
    <ModalWrapper toggle={toggleDisplay}>
      <CloseButton onClick={toggleModalHandler}>X</CloseButton>
      <ModalMain>
        <Modal modal={modal} />
      </ModalMain>
    </ModalWrapper>
  );
};

export default ModalContainer;
