import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
