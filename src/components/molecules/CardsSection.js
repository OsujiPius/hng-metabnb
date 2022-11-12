import React from "react";
import NftCard from "../atoms/NftCard";

export default function CardsSection() {
  return (
    <div className="card_section container row mx-auto">
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/1.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/2.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/3.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/4.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/5.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/6.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/7.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/8.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/9.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/10.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/11.svg"} />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <NftCard src={"/images/12.svg"} />
      </div>
    </div>
  );
}
