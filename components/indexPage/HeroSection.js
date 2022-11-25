import React, { useContext, useEffect, useState } from "react";

import Image from "next/legacy/image";
import { useScroll, motion } from "framer-motion";

import { globalContext } from "../globalContext";

export default function HeroSection() {
  const { heroRef } = useContext(globalContext);

  return (
    <div className="" ref={heroRef} id="index">
      <div className="fixed top-0 left-0 h-[90vh] bg-white w-screen -z-20"></div>

      <div className="">
        <div className="h-screen lg:h-[87vh] relative lg:rounded-b-[10rem] overflow-hidden">
          <div className="top-0 left-0 w-screen -z-20">
            <div className="relative z-10 w-full h-screen pl-20  	 bg-[url('/bgImage2.jpg')] lg:rounded-b-[10rem] paralax hidden lg:block"></div>
            <div className="fixed -z-10 ">
              <div className="relative w-screen h-screen">
                <Image
                  src="/bgImage2.jpg"
                  layout="fill"
                  alt="bg image"
                  objectFit="cover"
                  className="bg-right lg:hidden paralax"
                />
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="absolute bg-index h-screen w-[100vw] top-0 left-0 z-10"></div>
            <div className="absolute z-20 w-full text-white -translate-y-1/2 max-md:-translate-x-1/2 top-1/2 max-md:left-1/2 max-md:px-2">
              <div className="pt-20 max-md:flex-col max-md:text-center max-md:flex-center">
                <h1 className="text-3xl font-semibold lg:max-w-md lg:text-6xl">
                  Хамалски и транспортни услуги
                </h1>
                <p className="max-w-sm mt-1 font-sans lg:mt-6 max-lg:max-w-xs lg:text-xl text-white-50">
                  Ние не просто преместваме вашите неща, ние преместваме вашите
                  спомени
                </p>
                <div className="mt-8 lg:mt-9">
                  <a
                    href="tel:+359895063670"
                    className="px-10 py-2 font-semibold uppercase rounded-sm lg:text-lg bg-orange"
                  >
                    позвъни сега
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
