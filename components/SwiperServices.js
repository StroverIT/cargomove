import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
// Icons
import { HiOfficeBuilding } from "react-icons/hi";
import Image from "next/legacy/image";
import Link from "next/link";

export default function SwiperServices({
  home = true,
  office = true,
  international = true,
  oldFurniture = true,
  construction = true,
  basement = true,
}) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        " text-lg bg-orange rounded-full text-white py-2 px-4 lg:mr-10 " +
        '">' +
        (index + 1) +
        "</span>"
      );
    },
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.95,
          },
        }}
        pagination={pagination}
        modules={[Pagination]}
        className="h-full pt-5 bg-white border max-lg:border-x cursor-grab border-gray rounded-b-xl mySwiper"
      >
        {home && (
          <SwiperSlide>
            <SwiperSlideFn
              icon="house.png"
              title="Преместване на дома"
              link="home-moving"
            />
          </SwiperSlide>
        )}

        {office && (
          <SwiperSlide>
            <SwiperSlideFn
              icon="office.png"
              title="Преместване на офиса"
              link="office-moving"
            />
          </SwiperSlide>
        )}

        {international && (
          <SwiperSlide>
            <SwiperSlideFn
              icon="europe.png"
              title="Международно преместване"
              link="international-relocation"
            />
          </SwiperSlide>
        )}

        {oldFurniture && (
          <SwiperSlide>
            <SwiperSlideFn
              icon="icons8-disposal-64.png"
              title="Транспортни услуги"
              link="disposal-of-old-furniture"
            />
          </SwiperSlide>
        )}

        {construction && (
          <SwiperSlide>
            <SwiperSlideFn
              icon="moving.png"
              title="Товаро-разтоварни дейности"
              link="loading-and-unloading-activity"
            />
          </SwiperSlide>
        )}

        {basement && (
          <SwiperSlide>
            <SwiperSlideFn
              icon="cargo-mover.png"
              title="Преместване на пиана"
              link="moving-cash-registers-pianos-showcases"
            />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}
function SwiperSlideFn({ icon, title, p, isBorder = true, link }) {
  return (
    <Link href={`/${link}`}>
      <section className="relative flex flex-col h-64 p-5 pb-24 flex-center">
        <div className="relative w-16 h-16 mb-2">
          <Image
            src={`/icons/${icon}`}
            alt="quality"
            layout="fill"
            className="object-contain"
          />
        </div>
        <section className="pl-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="max-w-xs text-sm text-gray-250">{p}</p>
        </section>
        {isBorder && (
          <section className="w-1 sm:h-full bg-gray rotate-[20deg] absolute right-0 top-0 rounded-full border border-gray"></section>
        )}
      </section>
    </Link>
  );
}
