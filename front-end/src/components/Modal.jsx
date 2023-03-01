import React from "react";

const Modal = ({ children, onCancel }) => {
  return (
    <>
      <div className="backdrop" onClick={onCancel}/>
      <dialog open className="modal">{children}</dialog>
    </>
  );
};

export default Modal;
