import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import Title from "../components/Title";

export default function AboutUs() {
  return (
    <section className="mt-44">
      <section className="container grid grid-cols-2">
        <div className="flex-col flex-center">
          <Title title="Movex Bulgaria" size="text-5xl" />
          <p className="max-w-md mt-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            aliquid unde laboriosam omnis vel doloribus minima eveniet sed
            repellendus ipsum nobis, laborum, ad odio eligendi id tempore
            dolorum itaque officia.
          </p>
        </div>
        <section className="">
          <div>
            <div className="flex-col flex-center">
              <Title title="Принципи на работа" size="text-4xl" />
              <p className="max-w-md mt-5 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt aliquid unde laboriosam omnis vel doloribus minima
                eveniet sed repellendus ipsum nobis, laborum, ad odio eligendi
                id tempore dolorum itaque officia.
              </p>
            </div>
          </div>
          <div></div>
        </section>
      </section>
      <section className="pb-20 mt-10 lg:mt-20">
        <ContactUs
          color="border-orange"
          btnColor="bg-orange"
          bgColor="bg-orange-50"
          number="+359 89 506 3670"
          scrollBarThumb="scrollbar-thumb-primaryBlue-150"
          scrollBarTrack="scrollbar-track-primaryBlue-500"
          typePage="Web"
        />
      </section>
    </section>
  );
}
