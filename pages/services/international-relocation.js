import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import Image from "next/image";

export default function InternationalRelocation() {
  return (
    <>
      <Head>
        <title>Международно преместване на дома и офиса</title>
        <meta
          name="description"
          content={`Международно преместване на дома и офиса в ЕС. Висококачествено координиране и управление, професионално обучен екип. Вземи своята оферта!`}
        />
        <meta
          property="og:title"
          content="Международно преместване – CargoMove ЕООД"
        />
        <meta property="og:description" content="" />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className="lg:px-56 3xl:px-[30rem]">
          <section className="container px-5 py-10 bg-white rounded-lg md:px-14">
            <section className=" flex-center">
              <Title title="Международно преместване за ЕС" size="text-3xl" />
            </section>
            {/* Преместване на дома и/или офиса в друга държава. */}
            <section className=" ">
              {/* <h3 className="text-xl font-medium">Какво предлагаме:</h3> */}
              <p className="mt-1 ">
                Стремим се към предоставянето на висококачествено
                координиране и управление на международни премествания и
                транспорт. Работим усърдно с широка аудитория от договорени
                доставчици на транспортни услуги, доказани и отговарящи на всички
                стандарти и изисквания в ЕС. Това от друга страна позволява на нас
                да бъдем гъвкави, за да отговорим на вашите нужди и изисквания. По
                този начин ще осигурим на вас качество и достъпност, гаранция и
                надеждност. Абсолютен приоритет на „CargoMove“ е да опази целостта
                на вашия багаж.{" "}
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
            <section className="my-14 ">
              <ContactUs
                color="border-blue"
                btnColor="bg-blue"
                bgColor="bg-blue-50"
                number="+359 89 506 3670"
                scrollBarThumb="scrollbar-thumb-primaryBlue-150"
                scrollBarTrack="scrollbar-track-primaryBlue-500"
                typePage="Web"
                mx=""
              />
            </section>
          </section>
        </section>
        <div className="fixed top-0 left-0 -z-20">
          <div className="relative w-screen h-screen">
            <Image
              src="/blog/truck-driver-inspecting-vehicle-trailer-tires-before-driving.jpg"
              fill
              alt="Нашата фирма предлага висококачествени Транспортни услуги за безопасно и ефективно преместване на вашия дом или офис"
              className="object-cover"

            />
          </div>
        </div>
        {/* <section className="mt-20 font-sans flex-center">
          <Title title="Вижте и другите ни услуги" size="text-4xl" />
        </section> */}
        <section className="">
          <SwiperServices service="international" />
        </section>
      </section>
    </>
  );
}
