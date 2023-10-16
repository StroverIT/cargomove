import React from "react";
import Link from "next/link";


import ImageContainer from "../../../../Icons/ImageContainer";
import Icons from "../../../../Icons/Icons";

export default function MenuItem({
  submenu,
  link,
  name,
  subMenuState,
  subMenuSetState,
  condition,
  icon,
  imageData
}) {
  
  return (
    <Link href={`${submenu ? "" : link}`}>
      <div
        className={`font-semibold  text-sm px-2 py-3 cursor-pointer transition-colors  duration-300    
    ${
      condition || subMenuState
        ? "border-l-4 border-[#3b82f6] bg-[#cbd5e1] pl-5 "
        : " transition-colors  hover:bg-[#9ca3af]/40 pl-6"
    }`}
        onClick={() => submenu && subMenuSetState(!subMenuState)}
      >
        <section className="flex items-center justify-between">
          <section className="flex items-center">
            <ImageContainer size="text-xl" icon={icon} imageData={imageData}/>
            <div className={`pl-2`}>{name}</div>
          </section>
          {submenu && (
            <section className={`${subMenuState ? "rotate-90" : ""}`}>
              <Icons iconType="rightArrow" />
            </section>
          )}
        </section>
      </div>
    </Link>
  );
}
