import React from "react";
import Stars from "../../assests/icons/stars.svg";

export default function NftCard({ src }) {
  return (
    <div className="card nft_card">
      <img src={src} alt="" />
      <div className="d-flex justify-content-between mt-2">
        <p>Desert king</p>
        <p className="fw-bold">1MBT per night</p>
      </div>
      <div className="d-flex justify-content-between distance">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <img src={Stars} alt="" height={12} className="align-self-start" />
    </div>
  );
}
