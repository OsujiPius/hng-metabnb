import React from "react";
import HeroImg from "../../assests/images/hero-img.svg";

export default function Hero() {
  return (
    <div className="h-auto">
      <div class="w-100 container row mx-auto h-100">
        <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center flex-column py-5">
          <h1 className="hero_heading">
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p className="hero_subtext">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="w-100 mt-3">
            <input
              type="text"
              className="hero_input"
              placeholder="Search for location"
            />
            <button className="hero_button">Search</button>
          </div>
        </div>
        <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center py-5">
          <img src={HeroImg} alt="hero-img" className="hero_img" />
        </div>
      </div>
    </div>
  );
}
