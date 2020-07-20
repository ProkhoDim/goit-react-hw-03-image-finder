import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalElement = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.closeModal);
  }

  closeModal = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
      return;
    }
  };

  onClickOverlay = ({ target: { className } }) => {
    if (className === 'Overlay') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.onClickOverlay}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalElement,
    );
  }
}

export default Modal;
