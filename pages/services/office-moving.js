import Head from "next/head";
import Image from "next/image";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperGallery from "../../components/SwiperGallery";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";

import { officeMovingImages } from "../../components/data/office-moving-images";

export default function OfficeMoving() {
  return (
    <>
      <Head>
        <title>Преместване на офис | Оглед и планиране</title>
        <meta
          name="description"
          content={`Преместване на офис | Бизнес пренасяне на вещи, мебели | Опаковане, монтаж и демонтаж ☎️ +359 89 506 3670 `}
        />

        <meta property="og:title" content="Професионално преместване на дома" />
        <meta property="og:description" content=" " />
      </Head>

      <section className="min-h-screen mt-40 ">
        <section className="font-sans ">
          <section className="">
            <section className="container lg:px-56">
              <div className=" flex-center">
                <Title title="Преместване на офис" size="text-3xl" />
              </div>
              <section className="lg:max-w-5xl">
                {/* <div>
                  Преместването на офис е важно решение за всяка фирма, която иска
                  да започне нов етап в бизнеса си.
                </div>
                <div>
                  Нашият екип от професионалисти може да ви помогне да се справите
                  с всички аспекти на преместването на офис, като опаковка,
                  пренос, монтаж и демонтаж на мебели и други офисни уреди.
                </div>
                <div>
                  Ние предлагаме и допълнителни услуги като оптимизация на
                  планирането на работното място, харектеризане на вещи,
                  съхранение и транспортиране на ценни документи.
                </div>
                <div>
                  Предварително свържете се с нас за да планираме преместването на
                  офиса ви и да осигурим комфортно и безопасно преместване на
                  вашите вещи.
                </div>
                <div>
                  Нашата компания предлага гарантирано качество и ниски цени на
                  преместване на офис в България.
                </div> */}
                <p>
                  Преместването на офиси е ключова стъпка за всяка развиваща се
                  компания, целяща да улесни своите работни условия. Нашият
                  професионален екип може да Ви помогне да се справите с всички
                  аспекти на преместването на офиса като опаковка, пренос,
                  монтаж и демонтаж на мебели и други вещи. Ние предлагаме бързи
                  и ефективни услуги за преместване на офиси, с цел да се
                  намалят усилията на вашият бизнес. Компанията ни има богат
                  опит в преместване на офиси и гарантира висококачествени
                  услуги на конкурентни цени.
                  <br />
                  Свържете се с нас предварително, за да планираме преместването
                  на вашия офис и да осигурим комфортно и безопасно преместване
                  на вашите вещи и оборудване.
                </p>
              </section>
            </section>
            <section className="my-10">
              <div className=" flex-center">
                <Title title="Нашата галерия" size="text-3xl" />
              </div>
              <SwiperGallery data={officeMovingImages} link="office-moving/" />
            </section>

            <section className="container mt-4 lg:px-56">
              <div className="flex-center">
                <Title title="Какво е необходимо" size="text-2xl" />
              </div>

              <h2 className="mt-2 text-lg font-semibold">Оглед</h2>

              <p className="lg:max-w-5xl">
                Необходим е безплатен предварителен оглед от наш служител в
                удобно за вас време. След извършен оглед и изясняване на
                условията, изготвяме оферта по имейл. За по-големи корпоративни
                премествания възможност за подписване на договор, за срок на
                изпълнение и фиксирана цена без промяна.
                <br />
                Издаване на приемо-предавателен протокол за преместените вещи
                без нанесени щети преместени в уговорения срок. Предпочитан
                начин на плащане след извършена работа е по банков път.
              </p>

              <h2 className="text-lg font-semibold">Планиране</h2>
              <p className="lg:max-w-5xl">
                Независимо дали планирате преместване на офиса или вътрешно
                разместване, Мувекс България разполага с експертен опит и набор
                превозни средства, сплотен екип и ефективни традиционни планове
                за успешно реализиране на преместването ви. Широката ни гама
                специализирани услуги по преместване на търговски обекти и
                офиси, съчетана с професионализъм, ще опрости процедурата по
                преместване.
              </p>
              <div className="flex-center mt-4">
                <Title title="Какво предлагаме" size="text-2xl" />
              </div>
              <h2 className="mt-2 text-lg font-semibold">
                Екип от професионалисти
              </h2>
              <p className="lg:max-w-5xl">
                Екипа ни е наясно с това, че повечето компании не местят офисите
                си често, което означава, че когато те го направят ще се нуждаят
                от професионалисти. Ние високо ценим клиентите си , затова
                държим да обърнем внимание към детайлите и да бъдем максимално
                ефективни с нашите услуги.
              </p>
              <h2 className="mt-2 text-lg font-semibold">Ангажираност</h2>
              <p className="lg:max-w-5xl">
                Доверете се на нас да преместим вашия офис от планирането,
                опаковането на инвентара, натоварването, разглобяването –
                сглобяването до транспортирането в новия офис. Насладете се на
                предстоящия ви преход без допълнителен стрес.
              </p>
              <section className="my-14 ">
                <ContactUs
                  color="border-blue"
                  btnColor="bg-blue"
                  bgColor="bg-blue-50"
                  number="+359 89 506 3670"
                  scrollBarThumb="scrollbar-thumb-primaryBlue-150"
                  scrollBarTrack="scrollbar-track-primaryBlue-500"
                  mx="md:mx-10"
                />
              </section>
            </section>
          </section>

          {/* <p>ненужни вещи изхвърляне</p> */}
        </section>

        <section className="mt-20 font-sans flex-center">
          <Title title="Вижте и другите ни услуги" size="text-4xl" />
        </section>
        <section className="">
          <SwiperServices service="office" />
        </section>
      </section>
    </>
  );
}
