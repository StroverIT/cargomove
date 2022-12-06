import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import SwiperServices from "../components/SwiperServices";
import Title from "../components/Title";

export default function HomeMoving() {
  return (
    <section className="min-h-screen mt-40 ">
      <section className="container font-sans">
        <section className="flex-center">
          <Title title="Преместване на дома" size="text-4xl" />
        </section>
        <section className="mt-2">
          {/* <h3 className="text-xl font-medium">Какво предлагаме:</h3> */}
          <section className="text-center flex-center">
            <p className=" lg:max-w-3xl">
              Нашите услуги по преместване на дома се отличават с качество и
              достъпност! Преместването на дома Ви се струва трудно събитие,
              което трябва да бъде направено внимателно. Тук ние идваме насреща!
              Високо ценим нашите клиенти да разбират стойността и възможностите
              на нашите услуги. Нашите специалисти по преместване ще се погрижат
              с всичко възможно да направят сложното събитие в едно комфортно
              преживяване, което ще остане спомен за цял живот.
            </p>
          </section>
          {/* Тука може да се сложи снимка!!!!! */}
          <section className="my-14">
            <ContactUs
              color="border-orange"
              btnColor="bg-orange"
              bgColor="bg-orange-50"
              number="+359 89 506 3670"
              scrollBarThumb="scrollbar-thumb-primaryBlue-150"
              scrollBarTrack="scrollbar-track-primaryBlue-500"
              typePage="Web"
              mx="md:mx-10"
            />
          </section>
        </section>
      </section>
      <section className="mt-20 font-sans flex-center">
        <Title title="Вижте и другите ни услуги" size="text-4xl" />
      </section>
      <section className="">
        <SwiperServices home={false} />
      </section>
    </section>
  );
}
