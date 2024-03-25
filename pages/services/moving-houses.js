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
        <title> Преместване на къщи с Карго Муув за цялата страна</title>
        <meta
          name="description"
          content={`Осигурете си комфортно преместване на вашата къща с Карго Муув. Персонализирани решения за преместване на къщи, внимание към детайла при всяко преместване на мебели.`}
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
                title="Преместване на къщи за София и цялата страна."
                size="text-3xl"
              />
            </section>
            <section>
              <section className="">
                <p>
                  Вие сте пред ново начало в живота си и преместването на къщата
                  ви не трябва да бъде пречка по пътя към него. Ние сме тук за
                  да превърнем този процес в лек бриз, изпълнен с увереност и
                  спокойствие. Предоставяме цялостно решение за преместване на
                  мебели и лични вещи, осигурявайки гладък преход към вашето
                  ново място. Вашето доверие в нашите услуги е ключът към
                  безпроблемното преместване, където всяка стъпка е организирана
                  и изпипана до последния детайл.
                </p>
                <p className="mt-6">
                  Разбираме че всяко преместване на къща е уникално. Ето защо
                  ние предлагаме персонализирани решения, които да отговорят
                  точно на вашите нужди. Независимо дали става въпрос за голяма
                  семейна къща или за по-малък дом, нашият екип от
                  професионалисти е обучен да подхожда с внимание и грижа за
                  всяко едно преместване на мебели.
                </p>
                <p className="mt-6">
                  Нашата мисия е да направим процеса по преместване на къща,
                  колкото се може по-ефективен и безпроблемен. За да постигнем
                  това ние използваме най-новите технологии и методи за
                  планиране, които ни позволяват да оптимизираме всяка фаза от
                  вашето преместване на къща. Целта ни не е само да пренесем
                  вещи от точка А до точка Б, ние искаме да осигурим
                  изключително внимание и професионализъм, за да се насладите на
                  вълнението от новото начало.
                </p>
                <h2 className="mt-4 text-lg font-semibold">
                  Защо да изберете нашата услуга по преместване на къщи?
                </h2>
                <p className="mt-1">
                  Професионализъм и надеждност по преместване на къщи с нашите
                  опитни екипи. Предлагаме персонализирани решения адаптирани
                  към вашите нужди, осигурявайки пълно обслужване от пакетиране
                  до разопаковане. Възползвайте се от нашите конкурентни цени за
                  висококачествени услуги и ще превърнем преместването в лесна и
                  приятна задача.
                </p>
              </section>
            </section>

            <div className="fixed top-0 left-0 -z-20">
              <div className="relative w-screen h-screen">
                <Image
                  src="/pages-images/moving-houses/background.webp"
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
