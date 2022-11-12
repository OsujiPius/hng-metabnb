import React from "react";

export default function ModalButton({ src, icon }) {
  return (
    <button className="modal_button d-flex justify-content-between align-items-center px-4 mx-auto mb-4">
      <img src={src} alt="" />
      <img src={icon} alt="" />
    </button>
  );
}
