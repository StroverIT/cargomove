import Image from "next/legacy/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className=" no-repeat h-screen w-screen">
      <div className="relative h-screen w-screen ">
        <Image src="/bgImage.jpg" layout="fill" alt="bg image" />
      </div>
      HeroSection
    </div>
  );
}
