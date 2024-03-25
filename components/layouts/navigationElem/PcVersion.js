import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import DropDown from "./DropDown";

import { data as aboutUsData } from "../../data/aboutUsNav";
import { FaPhoneAlt } from "react-icons/fa";
import { data as serviceLinks } from "../../../components/data/services";

const PcVersion = ({
  servicePcState,
  setServicePcState,
  aboutUsState,
  setAboutUsState,
}) => {
  // ${isOnMain ? "bg-dark" : "bg-dark-50"}
  return (
    <section
      className={` hidden lg:flex py-2 bg-blur mx-14 xl:mx-36 mt-2 rounded-2xl `}
    >
      <section className="container relative items-center justify-between hidden h-full lg:flex">
        <div className="absolute select-none ">
          <Link href="/" scroll={false}>
            <div className="relative h-20 select-none w-[22rem]">
              <Image
                src="/logoNew.svg"
                alt="logo"
                layout="fill"
                className="object-contain select-none"
              />
            </div>
          </Link>
        </div>
        <div className="relative invisible w-64 h-20">test</div>
        <section className="flex items-center justify-center gap-x-5">
          {/* <div>
          <Hamburger toggle={setMenuOpen} toggled={menuOpen} size={20} />
        </div> */}
          <section className="">
            <ul className="flex items-center justify-center text-xs gap-x-10">
              <li>
                <Link href="/pricing" scroll={false}>
                  Цени
                </Link>
              </li>

              <DropDown
                title="Услуги"
                links={serviceLinks}
                state={servicePcState}
                setState={setServicePcState}
              />

              <DropDown
                state={aboutUsState}
                setState={setAboutUsState}
                title="Ресурси"
                links={aboutUsData}
              />

              <li>
                <Link href="/blog" scroll={false}>
                  БЛОГ
                </Link>
              </li>
              <li className="px-5 py-2 rounded-sm bg-blue">
                <Link
                  href="tel:+359895063670"
                  className="flex items-center font-semibold uppercase rounded-lg bg-blue"
                >
                  <div className="mr-2">
                    <FaPhoneAlt />
                  </div>
                  <div>позвъни сега</div>
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default PcVersion;
