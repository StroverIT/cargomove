import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import SwiperServices from "../components/SwiperServices";
import Title from "../components/Title";

export default function CleaningOfApartmentsAndHouses() {
  return (
    <div className="min-h-screen mt-40 ">
      <section className="container font-sans">
        <section className="flex-center">
          <Title
            title="Хамалски услуги и товаро-разтоварни дейности"
            size="text-3xl"
          />
        </section>
        {/* Извозване на строителни отпадъци в чували до сметище
          Първокласно обслужване на всички наши клиенти за извозване на отпадъци
          Гъвкаво работно време, няма нужда да променяте графика си за нас
          Най-висок клас услуги, оборудване и превозни средства за извозване на отпадъци
        
        Достъпни цени и много специални оферти за количества и редовни клиенти
        
        По-евтина алтернативна на извозването на отпадъци с контейнери */}
        <section className="lg:px-56">
          <h3 className="mt-2 text-xl font-medium">Какво предлагаме:</h3>
          <ul className="ml-5 list-disc">
            <li>Извозване на строителните отпадъци в чували до сметище. </li>
            <li>
              Първокласно обслужване на всички наши клиенти за извозване на
              отпадъци
            </li>
            <li>
              Гъвкаво работно време, за да не се налага промяна на Вашият
              график.
            </li>
            <li>Достъпни цени</li>
            <li>Алтернатива за по-евтино извозване на отпадъци с контейнери</li>
          </ul>
        </section>
        <section className="my-14 lg:mx-36">
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
      <section className="mt-20 font-sans flex-center">
        <Title title="Вижте и другите ни услуги" size="text-4xl" />
      </section>
      <section className="">
        <SwiperServices construction={false} />
      </section>
    </div>
  );
}
