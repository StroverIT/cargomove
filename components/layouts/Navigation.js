import React, { useContext, useEffect, useState } from "react";

import { Twirl as Hamburger } from "hamburger-react";
import { globalContext } from "../globalContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import { data } from "../data/services";
import PcVersion from "./navigationElem/PcVersion";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail, HiX } from "react-icons/hi";
import { TbBus } from "react-icons/tb";
import { FaViber } from "react-icons/fa";
import DropDownMobile from "./navigationElem/DropDownMobile";
import { data as aboutUsData } from "../data/aboutUsNav";
import SocialIcons from "./navigationElem/SocialIcons";

export default function Navigation() {
  const router = useRouter();

  const { heroRef, scrollData, footerRef } = useContext(globalContext);
  const pathname = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnMain, setIsOnMain] = useState(false);

  const [servicePcState, setServicePcState] = useState(false);
  const [aboutUsState, setAboutUsState] = useState(false);

  const [secondNavTelephone, setSecondNavTelephone] = useState(true);

  const handleNav = (hash, e) => {
    e.preventDefault();
    setMenuOpen(false);
    let timer;
    if (hash) {
      const item = document.querySelector(hash);

      timer = setTimeout(() => {
        if (item) {
          item.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 250);
    }
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    if (heroRef.current) {
      if (scrollData >= heroRef.current.offsetHeight - 86) {
        setIsOnMain(true);
      } else setIsOnMain(false);
    }

    if (footerRef.current) {
      const footer = footerRef.current;
      const screenHeight = screen.height;
      const footerDistance = footer.offsetTop - screenHeight;

      if (scrollData <= footerDistance) {
        setSecondNavTelephone(true);
      } else setSecondNavTelephone(false);
    }
  }, [scrollData]);
  useEffect(() => {

    setMenuOpen(false);
    if (pathname != "/") {
      setIsOnMain(true);
    } else {
      setIsOnMain(false);
    }
    
    // Drop down menus
    setServicePcState(false);
    setAboutUsState(false)
  }, [router]);
  useEffect(() => {
    const body = document.querySelector("body");
    if (menuOpen) {
      body.style.overflow = "hidden";
    } else if (!menuOpen) {
      body.removeAttribute("style");
    }
  }, [menuOpen]);
  return (
    <nav
      className={` fixed top-0 left-0 z-50 w-full text-white  uppercase font-medium  transition-colors `}
    >
        <SocialIcons/>

      <PcVersion
        pathname={pathname}
        servicePcState={servicePcState}
        setServicePcState={setServicePcState}
        data={data}
        isOnMain={isOnMain}
        aboutUsState={aboutUsState}
        setAboutUsState={setAboutUsState}
      />
      {/* MOBILE VERSION */}
      <section className="py-6 lg:hidden bg-blur">
        <div className="container relative justify-between flex-center">
          <div className="absolute h-20 w-72 ">
            <Link href="/">
              <Image
                src="/logoNew.svg"
                alt="logo"
                layout="fill"
                className="object-contain"
              />
            </Link>
          </div>
          <div className="relative invisible w-64 ">test</div>
          <section className="flex items-center justify-center gap-x-5 ">
            <div className="flex gap-x-2">
              {/* <a
                href="tel:+359895063670"
                className="h-8 px-4 mt-2 text-sm rounded-sm bg-blue flex-center "
              >
                позвъни
              </a> */}
              <button className="relative z-20" aria-label="Navigation menu">
                <Hamburger
                  toggle={setMenuOpen}
                  toggled={menuOpen}
                  size={30}
                  label="Hamburger menu"
                />
              </button>
            </div>
            <AnimatePresence mode="wait">
              {menuOpen && (
                <motion.section
                  initial="initialState"
                  animate="animateState"
                  exit="exitState"
                  transition={{
                    duration: 0.5,
                    type: "spring",
                  }}
                  variants={{
                    initialState: {
                      y: "100vh",
                    },
                    animateState: {
                      y: 0,
                    },
                    exitState: {
                      y: "-100vh",
                    },
                  }}
                  className="fixed top-0 left-0 h-screen bg-dark"
                >
                  <section className="w-screen h-screen flex-center">
                    <ul className="flex flex-col items-center justify-center text-2xl gap-y-6">

                      <li
                        className=" group"
                        onClick={(e) => setServicePcState(true)}
                      >
                        <div className="cursor-pointer flex-center">
                          <span className="">Услуги</span>
                          <span
                            className={`pl-1 group-hover:rotate-90 transition-transform text-lg`}
                          >
                            <TbBus />
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link href="/pricing" scroll={false}>
                          Цени
                        </Link>
                      </li>
                      {pathname == "/" && (
                        <li onClick={handleNav.bind({}, "#faq")}>
                          <a href="#">Въпроси</a>
                        </li>
                      )}
                      <li
                        className=" group"
                        onClick={(e) => setAboutUsState(true)}
                      >
                        <div className="cursor-pointer flex-center">
                          <span className="">Ресурси</span>
                          <span
                            className={`pl-1 group-hover:rotate-90 transition-transform text-lg`}
                          >
                            <TbBus />
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link href="/blog" scroll={false}>
                          БЛОГ
                        </Link>
                      </li>
                    </ul>
                  </section>
                </motion.section>
              )}
            </AnimatePresence>
            <DropDownMobile
              links={data}
              state={servicePcState}
              setState={setServicePcState}
            />
            <DropDownMobile
              links={aboutUsData}
              state={aboutUsState}
              setState={setAboutUsState}
            />
          </section>
        </div>
      </section>
      <AnimatePresence mode="wait">
        {secondNavTelephone && (
          <motion.section
            key="subsectionMenuTel"
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.9,
            }}
            variants={{
              initialState: {
                y: "100vw",
              },
              animateState: {
                opacity: 1,
                y: 0,
              },
              exitState: {
                y: "100vw",
              },
            }}
            className="fixed bottom-0 w-full bg-dark lg:hidden"
          >
            <div className="flex items-center justify-between py-4 text-2xl max-sm:px-10 text-blue-250 sm:container">
              <div>
                <a
                  href="tel:+359895063670"
                  aria-label="Button for calling on telehone"
                >
                  <FiPhoneCall />
                </a>
              </div>

              <div>
                <a
                  href="mailto:cargomovebg@gmail.com"
                  aria-label="Button for writting on email"
                >
                  <HiOutlineMail />
                </a>
              </div>
              <div>
                <a
                  href="viber://chat?number=+359895063670"
                  aria-label="Button for calling on viber"
                >
                  <FaViber />
                </a>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </nav>
  );
}
