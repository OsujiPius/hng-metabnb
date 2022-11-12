import React from "react";
import Nfts from "../../assests/images/nft.svg";

export default function NftSection() {
  return (
    <div className="nft">
      <div class="w-100 container row mx-auto h-100">
        <div class="col-lg-6 col-12 d-flex justify-content-center flex-column py-5">
          <h1 className="nft_heading">Metabnb NFTs</h1>
          <p className="nft_subtext">
            Discover our NFT gift cards collection. Loyal <br /> customers gets
            amazing gift cards which are <br />
            traded as NFTs. These NFTs gives our cutomer
            <br />
            access to loads of our exclusive services.
          </p>
          <button className="nft_button">Learn more</button>
        </div>
        <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center py-5">
          <img src={Nfts} alt="nft-img" className="hero_img" />
        </div>
      </div>
    </div>
  );
}
