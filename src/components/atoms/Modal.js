import React from "react";

export default function Modal({ children, open, handleToUpdate }) {
  return (
    <div
      open={open}
      onClose={() => handleToUpdate(true)}
      className="modal_overlay"
    >
      <div className="modal_centered">
        <div className="modal_container">{children}</div>
      </div>
    </div>
  );
}
