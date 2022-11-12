import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Logo from "../../assests/icons/logo.svg";
import Modal from "../atoms/Modal";
import Close from "../../assests/icons/close.svg";
import ModalButton from "../atoms/ModalButton";
import Connect from "../../assests/images/walletconnect.svg";
import Metamask from "../../assests/images/meta.svg";
import Arrow from "../../assests/icons/arrow.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToUpdate = (action) => {
    setIsModalOpen(action);
  };

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-white sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="logo" height={30} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarBasic"
            aria-controls="navbarBasic"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <ul className="navbar-nav mx-auto mb-2 mb-xl-0">
              <li className="nav-item text-white">
                <Link
                  className="nav-link active my-2 mx-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link active my-2 mx-3" to="/place-to-stay">
                  Place to stay
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active my-2 mx-3" href="#">
                  NFTs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active my-2 mx-3" href="#">
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
