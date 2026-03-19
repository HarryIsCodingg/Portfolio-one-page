import React from "react";
import Modal from "react-modal";
import "./AppModal.css";

Modal.setAppElement("#root");

export default function AppModal({isOpen, onClose,
  title, children, className = "",}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={180}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName="app-modal-overlay"
      className={`app-modal-content ${className}`.trim()}
    >
      <div className="app-modal-header">
        {title ? <h2 className="app-modal-title">{title}</h2> : <div />}
        <button
          type="button"
          className="app-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
      </div>

      <div className="app-modal-body">{children}</div>
    </Modal>
  );
}