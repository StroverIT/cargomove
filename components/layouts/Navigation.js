import React, { useContext, useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
import { BsTelephoneForward } from "react-icons/bs";
import { globalContext } from "../globalContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
const hamburgerVariants = {
  animate: { transition: { staggerChildren: 0.1, delay: 1 } },
};
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
  }, [router]);
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
      <section className="container justify-between hidden lg:flex">
        <div>Логото</div>
        <section className="flex items-center justify-center gap-x-5">
          {/* <div>
            <Hamburger toggle={setMenuOpen} toggled={menuOpen} size={20} />
          </div> */}
          <section className="">
            <ul className="flex items-center justify-center text-sm gap-x-10">
              <li>
                <Link href="/">Начало</Link>
              </li>
              {pathname == "/" && (
                <li>
                  <a href="#services">Услуги</a>
                </li>
              )}
              {pathname == "/" && (
                <li>
                  <a href="#pricing">Цени</a>
                </li>
              )}
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
              <a href="tel:+359895063670">
                <li className="px-5 py-2 rounded-sm bg-orange">позвъни сега</li>
              </a>
            </ul>
          </section>
        </section>
      </section>
      <section className="container justify-between flex-center lg:hidden ">
        <div>Логото</div>
        <section className="flex items-center justify-center gap-x-5 ">
          <div className="flex gap-x-2">
            <a
              href="tel:+359895063670"
              className="h-8 px-4 mt-2 text-sm rounded-sm bg-orange flex-center "
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
                      <Link href="/">Начало</Link>
                    </li>
                    {pathname == "/" && (
                      <li onClick={handleNav.bind({}, "#services")}>
                        <a href="#">Услуги</a>
                      </li>
                    )}
                    {pathname == "/" && (
                      <li onClick={handleNav.bind({}, "#pricing")}>
                        <a href="#">Цени</a>
                      </li>
                    )}
                    {pathname == "/" && (
                      <li onClick={handleNav.bind({}, "#faq")}>
                        <a href="#">Въпроси</a>
                      </li>
                    )}
                    {pathname == "/" && (
                      <li>
                        <Link href="/aboutUs" scroll={false}>
                          За нас
                        </Link>
                      </li>
                    )}
                  </ul>
                </section>
              </motion.section>
            )}
          </AnimatePresence>
        </section>
      </section>
    </nav>
  );
}
