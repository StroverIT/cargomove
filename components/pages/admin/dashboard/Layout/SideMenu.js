import React, { useState } from "react";
import Menu from "./Menu";

const SideMenu = ({ links }) => {
  return (
    <section className="sticky flex flex-col h-40 border-gray-300 lg:border-r-4 max-lg:w-screen top-14 lg:pt-10 lg:min-h-screen">
      <div className="sticky top-36">
        {links.map((data) => {
          // this must be fixed !!!
          return (
            <Menu
              key={data.link}
              name={data.name}
              link={data.link}
              submenu={data.submenu}
              icon={data.icon}
              imageData={data.imageData}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SideMenu;
