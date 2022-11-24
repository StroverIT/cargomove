import Image from "next/legacy/image";
import React from "react";
import { FiTruck } from "react-icons/fi";

export default function Title({
  title,
  size,

  lineColor = "bg-orange-100",
}) {
  return (
    <div className="">
      <h3 className={`${size} text-center font-medium`}>{title}</h3>

      <div className="mt-2 flex-center">
        <div className={`h-1 w-full ${lineColor}`}></div>
        <div className="relative h-10 px-3 mx-2 text-xl w-14">
          <Image
            src="/icons/ezgif.com-gif-maker.gif"
            alt="moving truck"
            layout="fill"
          />
          {/* <FiTruck /> */}
        </div>
        <div className={`h-1 w-full ${lineColor}`}></div>
      </div>
    </div>
  );
}
