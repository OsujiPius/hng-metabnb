import React from "react";
import Crypto from "../components/atoms/Crypto";
import Hero from "../components/molecules/Hero";
import NftSection from "../components/molecules/NftSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Crypto />
      <NftSection />
    </div>
  );
}
