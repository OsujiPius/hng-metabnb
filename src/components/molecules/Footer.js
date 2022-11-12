import React from "react";
import Logo from "../../assests/icons/footer-logo.svg";
import Fb from "../../assests/icons/fb.svg";
import Insta from "../../assests/icons/insta.svg";
import Twitter from "../../assests/icons/twitter.svg";

export default function Footer() {
  return (
    <div className="w-100 footer">
      <div className="container row mx-auto h-100">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <img src={Logo} alt="" height={30} />
          <div className="footer_social">
            <img src={Fb} alt="" />
            <img src={Insta} alt="" />
            <img src={Twitter} alt="" />
          </div>
          <p className="text-white mt-5"> &#169; 2022 Metabnb</p>
        </div>
        <div className="col-lg-3 text-start text-sm-center col-md-4 col-sm-6">
          <h3 className="footer_headding">Community</h3>
          <ul className="list-unstyled mt-2">
            <li>NFTs</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>
        <div className="col-lg-3 text-start text-sm-center  col-md-4 col-sm-6">
          <h3 className="footer_headding">Places</h3>
          <ul className="list-unstyled mt-2">
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>
        <div className="col-lg-3 text-start text-sm-center col-md-4 col-sm-6">
          <h3 className="footer_headding">About us</h3>
          <ul className="list-unstyled mt-2">
            <li>Roadmap</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
