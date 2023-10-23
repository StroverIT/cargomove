import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { TbBus } from "react-icons/tb";
import Image from "next/legacy/image";
import DropDown from "./DropDown";

import { data as aboutUsData } from "../../data/aboutUsNav";

const PcVersion = ({
  pathname,
  servicePcState,
  setServicePcState,
  data,
  isOnMain,
  aboutUsState,
  setAboutUsState,
}) => {
  return (
    <section
      className={` hidden lg:flex py-6 ${isOnMain ? "bg-dark" : "bg-dark-50"}`}
    >
      <section className="container relative items-center justify-between hidden h-full lg:flex">
        <div className="absolute select-none ">
          <div className="relative select-none h-28 w-96">
            <Image
              src="/logoNew.svg"
              alt="logo"
              layout="fill"
              className="object-contain select-none"
            />
          </div>
        </div>
        <div className="relative invisible w-64 h-20">test</div>
        <section className="flex items-center justify-center gap-x-5">
          {/* <div>
          <Hamburger toggle={setMenuOpen} toggled={menuOpen} size={20} />
        </div> */}
          <section className="">
            <ul className="flex items-center justify-center text-sm gap-x-10">
              {pathname != "/" && (
                <li>
                  <Link href="/" scroll={false}>
                    Начало
                  </Link>
                </li>
              )}
              {pathname == "/" && (
                <li>
                  <a href="#">Начало</a>
                </li>
              )}
              <li>
                <Link href="/pricing" scroll={false}>
                  Цени
                </Link>
              </li>

              <DropDown title="Услуги" state={servicePcState} setState={setServicePcState} links={data} />

              <DropDown
                state={aboutUsState}
                setState={setAboutUsState}
                title="За нас"
                links={aboutUsData}
              />
              {pathname == "/aboutUs" && (
                <li>
                  <a href="#" scroll={false}>
                    За нас
                  </a>
                </li>
              )}
              <li>
                <Link href="/blog" scroll={false}>
                  БЛОГ
                </Link>
              </li>
              <li className="px-5 py-2 rounded-sm bg-blue">
                <a href="tel:+359895063670">позвъни сега </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default PcVersion;
