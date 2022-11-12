import React from "react";
import NftCard from "../atoms/NftCard";

export default function Inspiration() {
  return (
    <div className="my-5 text-center">
      <h1 className="mt-3 fw-bold">Inspiration for your next adventure</h1>
      <div className="card_section container row mx-auto">
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
      </div>
    </div>
  );
}
