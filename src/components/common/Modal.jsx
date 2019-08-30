import React from "react";
const Modal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card body">
        <div className="closeModelLogin" onClick={closeModal}>
          <span className="firstCross"></span>
          <span className="secondCross"></span>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
