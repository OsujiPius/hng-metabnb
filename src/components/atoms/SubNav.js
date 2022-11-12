import React from "react";
import Setting from "../../assests/icons/setting.svg";

export default function SubNav() {
  return (
    <div className="container my-5 sub_nav row mx-auto h-auto gap-md-0 gap-lg-2">
      <div className="col-lg-1 col-md-6 col-6">
        <p>Resturant</p>
      </div>
      <div className="col-lg-1 col-md-6 col-6">
        <p>Cottage</p>
      </div>
      <div className="col-lg-1 col-md-6 col-6">
        <p>Castle</p>
      </div>
      <div className="col-lg-2 col-md-6 col-6">
        <p>fantast city</p>
      </div>
      <div className="col-lg-1 col-md-6 col-6">
        <p>beach</p>
      </div>
      <div className="col-lg-1 col-md-6 col-6">
        <p>Carbins</p>
      </div>
      <div className="col-lg-1 col-md-6 col-6">
        <p>Off-grid</p>
      </div>
      <div className="col-lg-1 col-md-6 col-6">
        <p>Farm</p>
      </div>
      <div className="col-lg-2 col-md-6 col-12">
        <button>
          Location
          <img src={Setting} alt="" />
        </button>
      </div>
    </div>
  );
}
