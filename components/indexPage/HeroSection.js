import React, { useContext, useEffect, useState } from "react";

import Image from "next/legacy/image";
import { FaPhoneAlt } from "react-icons/fa";

import { globalContext } from "../globalContext";
import Link from "next/link";
import ModalWrapper from "../generic/ModalWrapper";
import ModalData from "./ModalData";

export default function HeroSection() {

  const { heroRef, setNavigationOpen } = useContext(globalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      setNavigationOpen(false);
    } else {
      setNavigationOpen(true);
    }
  }, [isModalOpen]);
  return (
    <>
      <div className="" ref={heroRef} id="index">
        <div className="fixed top-0 left-0 h-[90vh] bg-white w-screen -z-20"></div>
        <div className="">
          <div className="h-screen lg:h-[87vh] relative lg:rounded-b-[10rem] overflow-hidden">
            <div className="top-0 left-0 w-screen -z-20">
              <div className="relative z-10 w-full h-screen pl-20  bg-[url('/miro.jpg')] lg:rounded-b-[10rem] paralax hidden lg:block"></div>
              <div className="fixed -z-10 ">
                <div className="relative w-screen h-screen">
                  <Image
                    src="/miro.jpg"
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
                  <h1 className="text-3xl font-semibold uppercase lg:max-w-md lg:text-4xl">
                    Професионалисти по преместване
                  </h1>
                  <p className="max-w-2xl mt-1 font-sans lg:mt-2 max-lg:max-w-md lg:text-2xl text-white-50">
                    Персонализирани решения за вашия бизнес и лични нужди.
                    Хамалски услуги създадени за вашия комфорт.
                  </p>
                  <div className="flex mt-8 lg:mt-9 max-sm:flex-col gap-y-4 gap-x-4">
                    <Link
                      href="tel:+359895063670"
                      className="flex items-center px-8 py-2 font-semibold uppercase rounded-lg lg:text-lg bg-blue"
                    >
                      <div className="mr-3">
                        <FaPhoneAlt />
                      </div>
                      <div>позвъни сега</div>
                    </Link>
                    {/* <button
                      className="flex px-8 py-2 font-semibold text-white border-4 rounded-xl border-blue"
                      onClick={() => setIsModalOpen(true)}
                      type="button"
                    >
                      Направи запитване
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalWrapper
        isModalOpen={isModalOpen}
        closeModalHandler={closeModalHandler}
        isFullScreen={true}
      >
        <ModalData closeModalHandler={closeModalHandler} />
      </ModalWrapper>
    </>
  );
}
