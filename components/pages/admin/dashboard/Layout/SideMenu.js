import React, { useState } from "react";
import Menu from "./Menu";



const SideMenu = ({links}) => {
    
  return (
    <section className="items-start min-h-screen pt-10 border-r-4 border-gray-300 min-w">
      <section className="sticky top-36 ">
      {
        links.map((data)=>{
          // this must be fixed !!!
          return <Menu key={data.link} name={data.name}  link={data.link} submenu={data.submenu} icon={data.icon} imageData={data.imageData}/>
        })
      }
        
     
      </section>
    </section>
  );
};

export default SideMenu;





