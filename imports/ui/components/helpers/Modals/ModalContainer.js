import React from 'react';
import Modal from './Modal';
import {ModalMain} from './ModalStyle';

const ModalContainer = ({ showModal, toggleModalHandler, modal }) => {
  const showHideClassName = showModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <ModalMain>
        <Modal modal={modal} />
        <button onClick={toggleModalHandler}>Close</button>
      </ModalMain>
    </div>
  );
};

export default ModalContainer;
