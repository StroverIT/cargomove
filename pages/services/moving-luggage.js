import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import Image from "next/image";

export default function CleaningBasementsAndAttics() {
  return (
    <>
      <Head>
        <title> Преместване на багаж за София и цялата страна</title>
        <meta
          name="description"
          content={`Карго Муув предлага изгодни надеждни услуги за преместване на багаж в София и страната. Професионално пренасяне на багаж на ниски цени.`}
        />
        <meta
          property="og:title"
          content="Преместване на пиана, каси, витрини"
        />
        <meta property="og:description" content="" />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className=" lg:px-56 3xl:px-[30rem]">
          <section className="container px-5 py-10 bg-white rounded-lg md:px-14">
            <section className="flex-center">
              <Title
                title="Преместване на багаж за София и страната."
                size="text-3xl"
              />
            </section>
            <section>
              <section className="">
                <p>
                  Във времена, когато промяната е непрекъсната част от нашия
                  живот, надеждният партньор за преместване на багаж се оказва
                  не само удобство, но и необходимост. Ние предлагаме услуги за
                  преместване на багаж, както в границите на София така и в
                  цялата страна, осигурявайки безпроблемен преход към вашия нов
                  дом.
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  Какво е необходимо за преместване на багаж?
                </h2>
                <p>
                  Преместването на багаж може да е трудоемка задача, но ние от
                  Карго Муув сме специализирани по преместване на багаж и
                  разбираме важността от внимателното и професионално отношение
                  с вашите вещи. Ние имаме индивидуален план за всяко
                  преместване, за да гарантираме висококачествено преместване на
                  клиентите си.
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  Индивидуален подход
                </h2>
                <p>
                  Услугите ни по преместване на багаж обхващат всичко необходимо
                  – от опаковъчни материали, през транспортирането до
                  разопаковането и подреждането на вашите вещи в новото ви
                  жилище. Разбираме, че всяко преместване е уникално и затова
                  предлагаме гъвкави решения, адаптивни към вашите специфични
                  нужди и изисквания.
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  Защо да изберете нашата услуга по преместване на багаж?
                </h2>
                <p>
                  Избирайки нашата услуга за преместване на багаж, получавате
                  персонализиран подход, висококачествено обслужване и
                  непрекъсната надеждност. Целта ни е да осигурим един
                  безпроблемен гладък преход към новият ви дом.
                </p>
              </section>
            </section>

            <div className="fixed top-0 left-0 -z-20">
              <div className="relative w-screen h-screen">
                <Image
                  src="/pages-images/moving-luggage/background.webp"
                  fill
                  alt="Нашата фирма предлага висококачествени Транспортни услуги за безопасно и ефективно преместване на вашия дом или офис"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </section>
        <section className="container my-14 lg:px-36">
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

        {/* <section className="mt-20 font-sans flex-center">
          <Title title="Вижте и другите ни услуги" size="text-4xl" />
        </section> */}
        <section className="">
          <SwiperServices service="piano" />
        </section>
      </section>
    </>
  );
}
