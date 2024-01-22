import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import Image from "next/image";

export default function CleaningOfApartmentsAndHouses() {
  return (
    <>
      <Head>
        <title>Товаро-разтоварни услуги за гр. София и България.</title>
        <meta
          name="description"
          content={`Професионални товаро разтоварни услуги от КАРГО МУУВ – надеждност и ефективност в претоварването на стоки, натоварване и разтоварване. Оптимизирайте вашата логистика с нашите експресни решения!`}
        />
        <meta
          property="og:title"
          content="Товаро-разтоварни услуги за гр. София и България."
        />
        <meta property="og:description" content="" />
      </Head>
      <div className="min-h-screen mt-40 ">
        <section className=" lg:px-56 3xl:px-[30rem]">
          <section className="container px-5 py-10 bg-white rounded-lg md:px-14">
            <section className="flex-center">
              <Title title="Товаро-разтоварни услуги" size="text-3xl" />
            </section>
            <section className="">
              <p className="mb-4">
                В &ldquo;КАРГО МУУВ&ldquo;, ние осъзнаваме, че всяка стъпка в
                процеса на товарене и разтоварване на стока е важна за успеха на
                вашия бизнес. Затова предлагаме комплексен подход, който обхваща
                всичко - от бързото и безопасно товарене и разтоварване на
                стоки, през управление на складовите процеси, до
                специализираните операции за опаковане и палетизиране. Нашият
                екип от професионалисти използва най-съвременните технологии и
                оборудване, за да осигури, че вашите стоки са безопасно и
                ефективно обработени.
              </p>
              <p className="mb-4">
                Разбираме и значението на детайлите като маркиране и
                етикетиране, които са ключови за логистичния процес, за да ви
                помогнем да оптимизирате вашите операции. Всеки аспект от нашата
                работа е насочен към осигуряването на високо качество и
                надеждност, като в същото време се стремим да предлагаме гъвкави
                и персонализирани решения, които да отговарят на уникалните
                изисквания на вашия бизнес.
              </p>
              <p>
                Ние целим да сме партньор, на който да разчитате, че всеки
                елемент от вашата товаро-разтоварна операция е изпълнен с
                прецизност и внимание към детайла. Тук сме, за да ви помогнем
                във всяка стъпка по процеса на товаро-разтоварна дейност.
              </p>
            </section>
          </section>
          <div className="fixed top-0 left-0 -z-20">
            <div className="relative w-screen h-screen">
              <Image
                src="/blog/20181024_143404.jpg"
                fill
                alt="Нашата фирма предлага висококачествени Транспортни услуги за безопасно и ефективно преместване на вашия дом или офис"
                className="object-cover"
              />
            </div>
          </div>
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
          <SwiperServices service="loading" />
        </section>
      </div>
    </>
  );
}
