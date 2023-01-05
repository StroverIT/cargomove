import React, { useContext, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLocationArrow } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
import { BsTelephoneForward } from "react-icons/bs";
import { globalContext } from "../globalContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Logo from "../Logo";
import { BiRightArrow } from "react-icons/bi";
import { TbBus } from "react-icons/tb";
import { HiX } from "react-icons/hi";
import { data } from "../data/services";
// transition: {
//   type: "spring",
//   duration: 1,
//   bounce: 0.3,
//   delay: 0.4,
// },
const hamburgerList = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
  },
};
export default function Navigation() {
  const router = useRouter();

  const { heroRef, scrollData } = useContext(globalContext);
  const pathname = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnMain, setIsOnMain] = useState(false);
  const [servicePcState, setServicePcState] = useState(false);

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
  }, [scrollData]);
  useEffect(() => {
    setMenuOpen(false);
    if (pathname != "/") {
      setIsOnMain(true);
    } else {
      setIsOnMain(false);
    }
    setServicePcState(false);
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
      className={`${
        isOnMain ? "bg-dark box3" : "bg-dark-50 box2"
      } fixed top-0 left-0 z-50 w-full text-white py-6 uppercase font-medium box2`}
    >
      {/* <section className="w-full h-10 bg-white text-dark">
        <div className="container h-full flex-center gap-x-10">
          <div className="flex-center">
            <div>
              <BsTelephoneForward />
            </div>
            <div className="pl-1">+359 89 506 3670</div>
          </div>
          <div className="flex-center gap-x-2">
            <div className="text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=100087968948910"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="text-xl">
              <a
                href="https://www.instagram.com/movexbulgaria/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section className="container relative items-center justify-between hidden lg:flex">
        <div className="absolute -left-10">
          <div className="relative h-96 w-96 ">
            <Image
              src="/LOGOv2-01.svg"
              alt="logo"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative invisible w-64 h-28">test</div>
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
              <li
                className=" group"
                onMouseEnter={(e) => setServicePcState(true)}
                onMouseLeave={(e) => setServicePcState(false)}
              >
                <div className="cursor-pointer flex-center">
                  <span className="">Услуги</span>
                  <span
                    className={`pl-1 group-hover:rotate-90 transition-transform text-lg`}
                  >
                    <TbBus />
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  {servicePcState && (
                    <motion.div
                      initial="initialState"
                      animate="animateState"
                      exit="exitState"
                      transition={{
                        duration: 0.5,
                        type: "spring",
                      }}
                      variants={{
                        initialState: {
                          y: "-100vh",
                          zIndex: -10,
                        },
                        animateState: {
                          y: 0,
                          zIndex: 0,
                        },
                        exitState: {
                          y: "-100vh",
                          zIndex: -10,
                        },
                      }}
                      className="relative flex flex-col w-full h-full "
                    >
                      <div className="absolute top-0 w-[26.5rem] h-10  -left-16"></div>
                      <ul className="absolute flex-col  py-4 pl-10 list-disc w-[26.5rem] rounded-md bg-blue-100 top-10 -left-16 flex  shadow-2xl">
                        {data.map((list, i) => {
                          return (
                            <Link href={list.link} key={i} scroll={false}>
                              <motion.li
                                variants={{
                                  hidden: (i) => ({
                                    opacity: 0,
                                    y: -50 * i,
                                    zIndex: -10,
                                  }),
                                  visible: (i) => ({
                                    opacity: 1,
                                    y: 0,
                                    zIndex: 0,

                                    transition: {
                                      delay: i * 0.05,
                                    },
                                  }),
                                }}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                                className="px-2 py-2 transition-colors cursor-pointer hover:bg-white hover:text-blue-150"
                              >
                                {list.title}
                              </motion.li>
                            </Link>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              {pathname == "/" && (
                <li>
                  <a href="#faq">Въпроси</a>
                </li>
              )}
              {pathname != "/aboutUs" && (
                <li>
                  <Link href="/aboutUs" scroll={false}>
                    За нас
                  </Link>
                </li>
              )}
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
      <section className="container justify-between flex-center lg:hidden ">
        <div className="relative w-16 h-16 ">
          <Image
            src="/LOGODODO-01.svg"
            alt="logo"
            layout="fill"
            className="object-contain"
          />
        </div>
        <section className="flex items-center justify-center gap-x-5 ">
          <div className="flex gap-x-2">
            <a
              href="tel:+359895063670"
              className="h-8 px-4 mt-2 text-sm rounded-sm bg-blue flex-center "
            >
              позвъни
            </a>

            <div className="relative z-20">
              <Hamburger toggle={setMenuOpen} toggled={menuOpen} size={30} />
            </div>
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
                    <li onClick={handleNav.bind({}, "#index")}>
                      <Link href="/" scroll={false}>
                        Начало
                      </Link>
                    </li>

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

                    <li>
                      <Link href="/aboutUs" scroll={false}>
                        За нас
                      </Link>
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
          <AnimatePresence mode="wait">
            {servicePcState && (
              <motion.div
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                  duration: 0.5,
                  type: "spring",
                }}
                variants={{
                  initialState: {
                    y: "-100vh",
                  },
                  animateState: {
                    y: 0,
                  },
                  exitState: {
                    y: "-100vh",
                  },
                }}
                className="fixed top-0 left-0 z-[999] flex flex-col w-full h-screen"
              >
                <section className="w-full h-screen bg-blue-100 flex-center">
                  <section className="container relative">
                    <section
                      className="absolute right-0 text-xl bg-white rounded-md top-5 text-blue-150"
                      onClick={() => setServicePcState(false)}
                    >
                      <HiX />
                    </section>
                    <ul className="flex-col p-10 text-sm ">
                      {data.map((list, i) => {
                        return (
                          <Link href={list.link} key={i} scroll={false}>
                            <motion.li
                              variants={{
                                hidden: (i) => ({
                                  opacity: 0,
                                  y: -50 * i,
                                  zIndex: -10,
                                }),
                                visible: (i) => ({
                                  opacity: 1,
                                  y: 0,
                                  zIndex: 0,
                                  transition: {
                                    delay: i * 0.05,
                                  },
                                }),
                              }}
                              initial="hidden"
                              animate="visible"
                              custom={i}
                              className="py-2 pl-2 transition-colors cursor-pointer hover:bg-white hover:text-blue-150"
                            >
                              {list.title}
                            </motion.li>
                          </Link>
                        );
                      })}
                    </ul>
                  </section>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </section>
    </nav>
  );
}
