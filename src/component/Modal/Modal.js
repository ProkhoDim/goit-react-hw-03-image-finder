import React from 'react';

const Modal = ({ children, onClickOverlay }) => {
  return (
    <div className="Overlay" onClick={onClickOverlay}>
      <div className="Modal">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
