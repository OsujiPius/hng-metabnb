import React from "react";
import Crypto from "../components/atoms/Crypto";
import Hero from "../components/molecules/Hero";
import Inspiration from "../components/molecules/Inspiration";
import NftSection from "../components/molecules/NftSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Crypto />
      <Inspiration />
      <NftSection />
    </div>
  );
}
