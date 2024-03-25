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
        <title>Преместване на апартамент за София и страната.</title>
        <meta
          name="description"
          content={`Преместване на апартамент в София и страната лесно, бързо и изгодно. Надежден и доказан партньор при преместване на жилища. Качество и надеждност.`}
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
              <Title title="Преместване на апартамент" size="text-3xl" />
            </section>
            <section>
              <section className="">
                <p>
                  Искате да преместите вашия апартамент? Независимо дали става
                  въпрос за ново начало в София или някоя друга точка на
                  страната, Карго Муув е тук за да направи този процес
                  безпроблемен и лесен за вас. С години опит в преместването на
                  дома, нашата фирма предлага надеждност, професионализъм и
                  внимание към детайла, което вие заслужавате.
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  Какво е необходимо за преместване на апартамент?
                </h2>
                <p>
                  Преместването на апартамент може да е трудна задача, но не и
                  когато работите с нас. Ние разполагаме с професионално обучен
                  екип и оборудване, който ще се погрижи за всяка част от
                  процеса по преместване на апартамента – от планирането и
                  опаковането до транспортирането и разопаковането във вашия нов
                  дом.
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  Индивидуален подход
                </h2>

                <p>
                  Всяко преместване на апартамент е уникално. Ние добре
                  разбираме това и предлагаме персонализирани решения, които
                  отговарят спрямо нуждите и изискванията на нашите клиенти.
                  Стараем се да вземем най-доброто решение за вас.
                </p>

                <h2 className="mt-1 text-lg font-semibold">
                  Сигурност и доверие
                </h2>
                <p>
                  Сигурността на вашите вещи е наш приоритет при преместването
                  на апартамент. Използваме най-съвременните пакетажни материали
                  и техника за защита на вашия багаж по време на преместването.
                  Нашите клиенти ни доверяват не само вещите си, но и своето
                  спокойствие, като ние се стремим да оправдаем това с всяко
                  преместване.
                </p>

                <h2 className="mt-1 text-lg font-semibold">
                  Защо да изберете нашата професионална услуга по преместване на
                  апартамент?
                </h2>
                <p>
                  Ние от Карго Муув искаме вие да се чувствате комфортно и
                  уверени, че преместването на апартамент ще бъде извършено с
                  най-голяма грижа и професионализъм. Наш приоритет е да
                  осигурим гладък и безпроблемен преход към новият ви дом.
                </p>
              </section>
            </section>

            <div className="fixed top-0 left-0 -z-20">
              <div className="relative w-screen h-screen">
                <Image
                  src="/pages-images/moving-apartments/background.jpg"
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
