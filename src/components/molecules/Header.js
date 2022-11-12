import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Logo from "../../assests/icons/logo.svg";
import Modal from "../atoms/Modal";
import Close from "../../assests/icons/close.svg";
import ModalButton from "../atoms/ModalButton";
import Connect from "../../assests/images/walletconnect.svg";
import Metamask from "../../assests/images/meta.svg";
import Arrow from "../../assests/icons/arrow.svg";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToUpdate = (action) => {
    setIsModalOpen(action);
  };

  return (
    <>
      <nav class="navbar navbar-expand-xl navbar-light bg-white sticky-top">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src={Logo} alt="logo" height={30} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarBasic"
            aria-controls="navbarBasic"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarBasic">
            <ul class="navbar-nav mx-auto mb-2 mb-xl-0">
              <li class="nav-item text-white">
                <a
                  class="nav-link active my-2 mx-3"
                  aria-current="page"
                  href="https://metamask.io/swaps.html"
                >
                  Home
                </a>
              </li>
              <li class="nav-item text-white">
                <a
                  class="nav-link active my-2 mx-3"
                  href="https://metamask.io/faqs.html"
                >
                  Place to stay
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active my-2 mx-3"
                  href="https://metamask.io/about.html"
                >
                  NFTs
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active my-2 mx-3"
                  href="https://docs.metamask.io/guide/"
                >
                  Community
                </a>
              </li>
            </ul>

            <Button
              style={{
                background:
                  "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
                border: "#A02279",
                outline: "none",
              }}
              onClick={() => handleToUpdate(true)}
            >
              Connect
            </Button>
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <Modal open={isModalOpen} handleToUpdate={handleToUpdate}>
          <div className="modal_head d-flex align-items-center justify-content-between px-sm-5 px-4">
            <p className="fs-4 fw-bolder mt-3">Connect wallet</p>
            <img src={Close} alt="" onClick={() => handleToUpdate(false)} />
          </div>
          <div className="mt-4">
            <p className="ms-sm-5 ms-4">Choose your preferred wallet:</p>
            <ModalButton src={Metamask} icon={Arrow} />
            <ModalButton src={Connect} icon={Arrow} />
          </div>
        </Modal>
      )}
    </>
  );
}
