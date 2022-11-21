import React, { useEffect, useState } from "react";

import Image from "next/legacy/image";
import { useScroll, motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 h-[90vh] bg-white w-screen -z-20"></div>

      <div className="">
        <div className="h-[90vh] relative rounded-b-[10rem] overflow-hidden">
          <div className="top-0 left-0 w-screen -z-20">
            <div className="relative z-10 w-full h-screen pl-20 bg-[url('/bgImage2.jpg')] rounded-b-[10rem] paralax">
              {/* <Image
                src="/bgImage2.jpg"
                layout="fill"
                alt="bg image"
                objectFit="cover"
                className="bg-right rounded-b-[15rem]"
              /> */}
            </div>
          </div>
          <div className="container bg-white ">
            <div className="absolute bg-index h-screen w-[50vw] top-0 left-0 z-10"></div>
            <div className="absolute z-20 text-white -translate-y-1/2 top-1/2">
              <div className="">
                <h1 className="max-w-sm text-5xl font-semibold">
                  Хамалски и транспортни услуги
                </h1>
                <p className="max-w-sm mt-5 text-xl">
                  Ние не просто преместваме вашите неща, ние преместваме вашите
                  спомени
                </p>
                <div className="mt-9">
                  <button className="px-10 py-2 text-lg rounded-full bg-orange">
                    Звъннете сега
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
