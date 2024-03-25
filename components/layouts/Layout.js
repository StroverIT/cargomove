import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { globalContext } from "../globalContext";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { excludeNavigationUsingIncludes } from "../../config/navigation";

export default function Layout({ children }) {
  const router = useRouter();
  const heroRef = useRef(null);
  const footerRef = useRef(null);

  const [scrollData, setScrollData] = useState(0);
  const [isNavigationOpen, setNavigationOpen] = useState(true);
  const handleScroll = (event) => {
    setScrollData(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <globalContext.Provider value={{ heroRef, scrollData, footerRef, setNavigationOpen}}>
      <div className="flex flex-col justify-between h-screen">
        {!router.route.includes(excludeNavigationUsingIncludes) &&
          isNavigationOpen && <Navigation />}
          
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              const html = document.querySelector("html");

              window.scrollTo({ top: 0 });
              html.style.scrollBehavior = "smooth";
            }
          }}
        >
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.5,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {!router.route.includes(excludeNavigationUsingIncludes) && <Footer />}
      </div>
    </globalContext.Provider>
  );
}
