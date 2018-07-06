import React from 'react';

const ModalContainer = ({ showModal, toggleModalHandler, modal }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default ModalContainer;
