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
        <title>
          {" "}
          Преместване на хладилник и бяла техника за София и страната.
        </title>
        <meta
          name="description"
          content={`Професионални услуги за преместване на хладилници и друга бяла техника от всяка точка на България. Качество на изгодни цени.`}
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
                title="Преместване на хладилник и бяла техника"
                size="text-3xl"
              />
            </section>
            <section>
              <section className="">
                <p>
                  Нашата компания разбира уникалните предизвикателства при
                  преместване на големи индустриални тежки хладилници, печки и
                  друга бяла техника, която е от съществено значение за
                  непрекъснатото функциониране на вашето заведение. Нашият
                  опитен екип е специализиран в преместването на индустриални
                  хладилници, фризери, витрини и всякакъв друг вид бяла техника,
                  както и използваме специализирано оборудване и най-добри
                  техники, които гарантират безопасното преместване на вашето
                  оборудване.
                </p>
                <h2 className="mt-4 mb-2 text-lg font-semibold">
                  Защо да изберете нашата услуга?
                </h2>
                <p>
                  Експертиза в областта: Нашия специализиран екип разполага с
                  богат опит и знания в областта на преместването на хладилници
                  и бяла техника. Имаме ресурс за успешно преместване на
                  всякакви модели, използвани в ресторантите.
                </p>
                <p className="mt-2">
                  Специализирано оборудване: Имаме на разположение
                  специализирани транспортни колички, колани за пренос и
                  превозни средства, предвидени специално за преместването на
                  тежка и голяма бяла техника. Това включва механизирани
                  средства за товарене и разтоварване, както и оборудване за
                  стабилизиране и защита на уредите по време на превоза.
                </p>
                <p className="mt-2">
                  Гъвкавост и удобство: Разбираме, че в ресторантната индустрия
                  времето е от съществено значение. Затова сме гъвкави по
                  отношение на графика за преместване, за да минимизираме
                  прекъсванията в работата на вашето заведение.
                </p>
                <p className="mt-2">
                  Безопасност и надеждност: Висок приоритет е опазването на
                  вашата техника, чрез спазване на правилни техники при
                  преместване и подходящо оборудване спрямо индивидуалната
                  ситуация.
                </p>
                <p className="mt-7">
                  Нашата цел е да осигурим на нашите клиенти високо качество на
                  предлаганите услуги и пълна удовлетвореност от начина, по
                  който се грижим за техния бизнес. За повече информация или
                  въпроси относно преместването на вашия индустриален хладилник
                  или друго оборудване, свържете се с нас. С удоволствие ще ви
                  помогнем!
                </p>
              </section>
            </section>

            <div className="fixed top-0 left-0 -z-20">
              <div className="relative w-screen h-screen">
                <Image
                  src="/pages-images/moving-refrigerator/background.webp"
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
