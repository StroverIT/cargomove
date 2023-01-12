import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";

export default function InternationalRelocation() {
  return (
    <>
      <Head>
        <title>Movex Bulgaria - Международно преместване </title>
        <meta
          name="description"
          content={`Movex Bulgaria - международно преместване на домове и офиси за държави в ЕС. Осигурени хамали и транспорт   .Поискай оферта!.`}
        />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className="container">
          <section className="font-sans flex-center">
            <Title title="Международно преместване" size="text-3xl" />
          </section>
          {/* Преместване на дома и/или офиса в друга държава. */}
          <section className="font-sans lg:px-56">
            {/* <h3 className="text-xl font-medium">Какво предлагаме:</h3> */}
            <p className="mt-1 lg:max-w-5xl">
              Ние от Мувекс България се стремим към предоставянето на
              висококачествено координиране и управление на международни
              премествания и транспорт. Работим усърдно с широка аудитория от
              договорени доставчици на транспортни услуги, доказани и отговарящи
              на всички стандарти и изисквания в ЕС. Това от друга страна
              позволява на нас да бъдем гъвкави, за да отговорим на вашите нужди
              и изисквания. По този начин ще осигурим на вас качество и
              достъпност, гаранция и надеждност. Абсолютен приоритет на „Мувекс
              България“ е да опази целостта на вашия багаж.{" "}
            </p>
            <h2 className="mt-4 text-xl font-medium">Как протича процеса?</h2>
            <p className="mt-1 lg:max-w-5xl">
              Необходима е консултация преди преместване.
            </p>
            <p className="mt-1 lg:max-w-5xl">
              Извършване на оглед от наша страна за подробностите на вашето
              преместване, запознаваме се с предметите, които трябва да
              преместим и услугите, от които се нуждаете.
            </p>
            <h2 className="mt-4 text-xl font-medium">Управление.</h2>
            <p className="mt-1 lg:max-w-5xl">
              Вашият мениджър извършил огледа, ще координира логистиката по
              преместване, ще съдейства за необходимата документация, ще
              организира преместването и транспортирането на вашия инвентар.
              Резервиране на вашето преместване стъпки.
            </p>
            <ul className="ml-5 list-disc">
              <li>Получаване на оферта от наш мениджър</li>
              <li>План за изпълнение на преместването</li>
              <li>Уговаряне на дата на събитието</li>
              <li>Финализиране на поръчката</li>
            </ul>
          </section>
          <section className="my-14 lg:mx-36">
            <ContactUs
              color="border-blue"
              btnColor="bg-blue"
              bgColor="bg-blue-50"
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
          <SwiperServices service="international" />
        </section>
      </section>
    </>
  );
}
