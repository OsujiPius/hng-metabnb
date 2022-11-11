import React from "react";
import MbToken from "../../assests/images/mbtoken.svg";
import Metamask from "../../assests/images/metamask.svg";
import Opensea from "../../assests/images/opensea.svg";

export default function Crypto() {
  return (
    <div
      className="w-full my-5 py-2"
      style={{
        height: "auto",
        background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
      }}
    >
      <div className="container d-flex align-items-center h-auto justify-content-between flex-md-row flex-column gap-5">
        <img src={MbToken} alt="" />
        <img src={Metamask} alt="" />
        <img src={Opensea} alt="" />
      </div>
    </div>
  );
}
