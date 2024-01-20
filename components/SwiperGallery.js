import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation, Thumbs, FreeMode } from "swiper";
// Icons
import Image from "next/image";
import { HiX } from "react-icons/hi";

export default function SwiperGallery({ data, setCurrentImage }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const hideGallery = () => {
    setCurrentImage(null);
  };
  return (
    <secton className="">
      <Swiper
        navigation={true}
        modules={[Navigation, Thumbs]}
        spaceBetween={30}
        loop={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null  }}
        className="h-[90%] mySwiper2 cursor-grab bg-dark/50"
        onClick={hideGallery}
      >
          <div className="fixed top-0 right-0 text-3xl bg-secondary"><HiX/></div>

        <div className="relative h-full flex-center">
          {data.map((image) => {
            return (
              
              <div
                key={image.img}
                className="flex items-center justify-center h-full"
              >
                <SwiperSlide className="relative flex-center">
                  <div className="relative h-full w-[60%]">
                    <Image
                      src={image.img}
                      fill
                      className="object-contain"
                      alt={image.alt}
                    />
                  </div>

                </SwiperSlide>
              </div>
            );
          })}
        </div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[10%] mySwiper2 cursor-grab bg-dark/50"
      >
        {data.map((image) => {
          return (
            <SwiperSlide key={image.img}>
              <div className="relative h-full w-[90%]">
                <Image
                  src={image.img}
                  fill
                  className="object-cover"
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </secton>
  );
}
