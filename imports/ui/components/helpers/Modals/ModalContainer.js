import React from 'react';
import Modal from './Modal';

const ModalContainer = ({ showModal, toggleModalHandler, modal }) => {
  const showHideClassName = showModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <Modal modal={modal} />
        <button onClick={toggleModalHandler}>Close</button>
      </section>
    </div>
  );
};

export default ModalContainer;
