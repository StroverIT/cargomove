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
        <title>Преместване на мебели за София и цялата страна</title>
        <meta
          name="description"
          content={`Преместване на мебели за София и цялата страна се извършва от професионалисти с внимание към всеки детайл. Индивидуални решения за всеки, разумни цени, качество и надеждност.`}
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
                title="Преместване на мебели"
                size="text-3xl"
              />
            </section>
            <section>
              <section className="">
                <p>
                  Разбираме, колко трудоемко може да бъде преместването на
                  вашите мебели, затова ние сме посветени да осигурим
                  най-висококачествените услуги за преместване на мебели, които
                  да ви дават мир и увереност по време на целия процес на
                  преместване. Нашите специалисти по преместване имат
                  дългогодишен опит в индустрията, като тяхната мисия е една: Да
                  ви предоставят не просто услуга, а изключително преживяване,
                  което да надмине вашите очаквания. Нашата ангажираност към
                  качеството и вашето удовлетворение е нещо, което непрекъснато
                  ни мотивира да бъдем по-добри в това, което правим.
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  Какво прави нашата услуга изключителна?
                </h2>
                <p>
                  Персонализиран подход: Разбираме, че всеки клиент е различен.
                  Затова се стремим да осигурим високо ниво на персонализирано
                  обслужване, което да отговаря точно на вашите нужди и
                  изисквания.
                </p>
                <p className="mt-6">
                  Професионализъм и експертиза: Нашите специалисти владеят
                  всички аспекти на преместването на мебелите, което осигурява
                  на вас най-добрите практики и подходящи маневри за максимална
                  ефективност по време на преместване на вашите мебели.
                </p>
                <p class="mt-6">
                  Безопасност и застраховка: Вашата безопасност е приоритет. Ние
                  използваме най-съвременни технологии и методи, за да осигурим
                  безопасност и минимални рискове за повреди. Предлагаме
                  застраховка за допълнителна защита на вашите ценни предмети.
                </p>
                <p class="mt-6">
                  Гъвкавост и Надеждност: Вие сте в контрол! Ние работим по
                  вашите изисквания, като се стремим да се адаптираме към вашия
                  график. Вие заслужавате максимална гъвкавост и
                  професионализъм!
                </p>
                <p class="mt-6">
                  Прозрачност и честност: Ние ценим доверието на клиентите към
                  нас. Не злоупотребяваме с вашето доверие, като целим да няма
                  скрити такси или изненади – само честно и прозрачно
                  обслужване.
                </p>
                <p className="mt-8">
                  Не правете компромиси с качеството на вашето преместване на
                  мебели. Обърнете се към нас, за да получите персонализирана
                  услуга от най-високо качество или безплатен съвет за
                  оптимизиране на вашето преместване.
                </p>
              </section>
            </section>

            <div className="fixed top-0 left-0 -z-20">
              <div className="relative w-screen h-screen">
                <Image
                  src="/pages-images/moving-furniture/background.jpg"
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
