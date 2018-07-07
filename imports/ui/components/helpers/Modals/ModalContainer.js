import React from 'react';
import Modal from './Modal';

const ModalContainer = props => {
  const { showModal, toggleModalHandler } = props;
  const showHideClassName = showModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <Modal {...props} />
        <button onClick={toggleModalHandler}>Close</button>
      </section>
    </div>
  );
};

export default ModalContainer;
