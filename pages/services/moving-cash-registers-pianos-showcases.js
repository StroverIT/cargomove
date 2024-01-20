import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import Image from 'next/image';

export default function CleaningBasementsAndAttics() {
  return (
    <>
      <Head>
        <title>Преместване на пиана, каси, витрини</title>
        <meta
          name="description"
          content={`Фирмата ни предлага услугата "Преместване на пиана, каси, витрини". Няма нужда да се притеснявате за вашите клавиши, в сигурни ръце са!`}
        />
        <meta
          property="og:title"
          content="Преместване на пиана, каси, витрини"
        />
        <meta property="og:description" content="" />
      </Head>
      <section className="min-h-screen mt-40 ">
      <section className=" lg:px-56 3xl:px-[30rem]">
        <section className="container px-5 py-10 bg-white rounded-lg  md:px-14">
          <section className="flex-center">
            <Title
              title="Преместване на пиана, каси, витрини"
              size="text-3xl"
            />
          </section>
          <section>
            <section className="">
              <h2 className="mt-1 text-lg font-semibold">
                Какво трябва да знаете при преместване на пианo и защо не трябва
                да го правите сами.
              </h2>
              <p>
                Преди да сте решили окончателно да преместите пианото си сами,
                имайте предвид, че това е опасна и прецизна задача, която крие
                своите рискове и помислете дали да не повикате професионална
                помощ. Пианата не влизат в стандартен асансьор, ако решите да го
                обърнете по височина, рискувате да повредите музикалния
                инструмент. Опаковката при преместването на пиано е необходимо
                средство освен, ако не искате да го повредите.
              </p>
              <h2 className="mt-1 text-lg font-semibold">
                Какво е необходимо за преместване на пиано?
              </h2>
              <ul>
                <li>- Професионална количка</li>
                <li>- Специализирани ленти за вдигане на тежести</li>
                <li>- Бус/камион с падащ/а борд/платформа</li>
                <li>- Опаковъчни материали.</li>
                <li>- Минимален брой души 4-ма човека.</li>
              </ul>
              <p>
                Да и ние знаем, че е възможно да се премести пианото от двама,
                но докога? Хората, които извършват подобни опити плащат твърде
                висока цена след това, дали от злопоука, контузия и прочие.
                Шансът за подобен сценарий е твърде голям. Оставете счупеното
                пиано след това, Вие готови ли сте да поемете риска?
              </p>
              <h2 className="mt-1 text-lg font-semibold">
                Защо да изберете нашата професионална услуга по преместване на
                пиано?
              </h2>
              <p>
                Ние от CargoMove искаме Вие да се чувствате комфортно и уверени,
                че вашето пиано ще бъде добре опаковано, преместено правилно и
                сигурно натоварено и защитено по време на транспорта. Нашата цел
                е да задоволим вашите желания и изисквания. Позволете ни да
                спестим вашите пари и нерви!
              </p>
            </section>
          </section>
         
          <div className="fixed top-0 left-0 -z-20">
          <div className="relative w-screen h-screen">
            <Image
              src="/blog/woman-playing-piano.jpg"
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
