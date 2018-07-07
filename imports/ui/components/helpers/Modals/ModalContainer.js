import React from 'react';
import Modal from './Modal';
import {ModalMain, ModalWrapper} from './ModalStyle';

const ModalContainer = ({ showModal, toggleModalHandler, modal }) => {
  const toggleDisplay = showModal
    ? true
    : false;

  return (
    <ModalWrapper toggle={toggleDisplay}>
      <ModalMain>
        <Modal modal={modal} />
        <button onClick={toggleModalHandler}>Close</button>
      </ModalMain>
    </ModalWrapper>
  );
};

export default ModalContainer;
