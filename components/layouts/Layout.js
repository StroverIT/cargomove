import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { globalContext } from "../globalContext";

export default function Layout({ children }) {
  const heroRef = useRef(null);
  const [scrollData, setScrollData] = useState(0);

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
    <globalContext.Provider value={{ heroRef, scrollData }}>
      <div className="flex flex-col justify-between h-screen">
        <Navigation />
        {children}
        <Footer />
      </div>
    </globalContext.Provider>
  );
}
