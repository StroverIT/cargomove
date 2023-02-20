import Head from "next/head";
import Image from "next/image";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperGallery from "../../components/SwiperGallery";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";

import { officeMovingImages } from "../../components/data/office-moving-images";
import { BsCheckLg } from "react-icons/bs";

export default function OfficeMoving() {
  return (
    <>
      <Head>
        <title>Преместване на офис | Оглед и планиране</title>
        <meta
          name="description"
          content={`Преместване на офис | Решение за вашия бизнес – професионално обучен екип с дългогодишен опит. Висококачествени опаковъчни материали, монтаж и демонтаж.`}
        />

        <meta property="og:title" content="Професионално преместване на дома" />
        <meta property="og:description" content=" " />
      </Head>

      <section className="min-h-screen mt-40 ">
        <section className="font-sans ">
          <section className="">
            <section className="lg:px-56 3xl:px-[30rem]">
              <section className="container px-5 py-10 bg-white rounded-lg md:px-14">
                <div className="flex-center">
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
                  <h2 className="mt-2 text-lg font-semibold">
                    Разширява ли се компанията ви?
                  </h2>
                  <p>
                    Знаем че преместването на офис може да бъде неприятна и
                    стресираща задача. Ние от “Мувекс България” разбираме
                    предизвикателствата идващи с преместването на вашия бизнес,
                    по тази причина предлагаме набор от услуги, които да
                    помогнат на компании и държавни институции от всякакъв
                    размер да преместят и транспортират инвентара си. Ето защо
                    сме тук, за да ви помогнем и направим процеса по преместване
                    на офис, възможно най-ефективен, лесен, бърз и без стрес!
                  </p>
                </section>
                <h2 className="mt-2 text-lg font-semibold">Качество</h2>
                <p className="lg:max-w-5xl">
                  Услугите които предоставяме към нашите клиенти, държим винаги
                  да бъдат изпълнени качествено с внимание към детайла, като
                  целим абсолютно минимизиране на времето за преместване, за да
                  спестим максимално смущенията на вашите системи. Екипа е
                  наясно с това, че повечето компании не местят офисите си
                  често, което означава, че когато те го направят ще се нуждаят
                  от професионалисти. В Мувекс България имаме изпитан и тестван
                  подход към преместването на офиса. Строгите практики за подбор
                  на персонал, позволяват на нас да предоставим възможно
                  най-ефективни услуги за вас.
                </p>
                <h2 className="text-lg font-semibold">Експертиза и опит</h2>
                <p className="lg:max-w-5xl">
                  Независимо дали планирате преместване или вътрешно
                  разместване, нашите мениджъри на проекти ще се справят с всеки
                  аспект от преместването на вашия офис. Ще работим в тясно
                  сътрудничество с вас, за да изградим персонализиран план за
                  преместване отговарящ на вашите индивидуални нужди и бюджет.
                  Нашият добре подготвен екип има натрупан дългогодишен опит в
                  индустрията, знания и умения, както и адекватен подход спрямо
                  различни ситуации.
                </p>
                <h2 className="mt-2 text-lg font-semibold">
                  Екип от професионалисти
                </h2>
                <p className="lg:max-w-5xl">
                  Екипа ни е наясно с това, че повечето компании не местят
                  офисите си често, което означава, че когато те го направят ще
                  се нуждаят от професионалисти. Ние високо ценим клиентите си ,
                  затова държим да обърнем внимание към детайлите и да бъдем
                  максимално ефективни с нашите услуги.
                </p>
                <h2 className="mt-2 text-lg font-semibold">Ангажираност</h2>
                <p className="lg:max-w-5xl">
                  Доверете се на нас да преместим вашия офис от планирането,
                  опаковането на инвентара, натоварването, разглобяването –
                  сглобяването до транспортирането в новия офис. Насладете се на
                  предстоящия ви преход без допълнителен стрес.
                </p>
                <h2 className="mt-2 text-lg font-semibold">
                  Нашите услуги по преместване на офис включват:
                </h2>
                <ul className="flex flex-col mt-2 gap-y-2">
                  <li>
                    <h3 className="flex items-center font-semibold">
                      <span className="pr-1 text-green">
                        <BsCheckLg />
                      </span>
                      План и консултация:
                    </h3>{" "}
                    Ще работим в сътрудничество с вас, за да разработим подробен
                    индивидуален план за вашето преместване. Ще разясним ваши
                    въпроси относно преместването на офиса.
                  </li>
                  <li>
                    <h3 className="flex items-center font-semibold">
                      <span className="pr-1 text-green">
                        <BsCheckLg />
                      </span>
                      Опаковка:
                    </h3>{" "}
                    Ние ще осигурим висококачествени опаковъчни материали, нужни
                    за преместване на вашия офис. Ще се погрижим за надеждното
                    опаковане на чупливите предмети, както и внимателното им
                    натоварване.
                  </li>
                  <li>
                    <h3 className="flex items-center font-semibold">
                      <span className="pr-1 text-green">
                        <BsCheckLg />
                      </span>
                      Монтаж и демонтаж на мебели:
                    </h3>{" "}
                    Екипа ще разглоби и сглоби при нужда, всички ваши офис
                    мебели с цел оптимизиране на преместването. Включва бюра,
                    шкафове за документи, етажерки и други.
                  </li>
                  <li>
                    <h3 className="flex items-center font-semibold">
                      <span className="pr-1 text-green">
                        <BsCheckLg />
                      </span>
                      Транспортиране:
                    </h3>{" "}
                    Разполагаме с добре оборудвана съвременна техника за
                    преместване на офис, за да гарантираме безопасност и
                    ефективност при преместване.{" "}
                  </li>
                  <li>
                    <h3 className="flex items-center font-semibold">
                      <span className="pr-1 text-green">
                        <BsCheckLg />
                      </span>
                      Товарене и разтоварване:
                    </h3>{" "}
                    Нашите опитни работници ще се погрижат за внимателно и
                    грижливо натоварване и разтоварване на вашето офис
                    оборудване и мебели.
                  </li>
                </ul>
                <div className="fixed top-0 left-0 -z-20">
                  <div className="relative w-screen h-screen">
                    <Image
                      src="/pages-images/office-moving/.jpg"
                      fill
                      alt="Нашата фирма предлага висококачествени Транспортни услуги за безопасно и ефективно преместване на вашия дом или офис"
                      className=""
                    />
                  </div>
                </div>
              </section>
            </section>
            {/* <section className="my-10">
              <div className=" flex-center">
                <Title title="Нашата галерия" size="text-3xl" />
              </div>
              <SwiperGallery data={officeMovingImages} link="office-moving/" />
            </section> */}

            <section className="container my-14 lg:px-36">
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

          {/* <p>ненужни вещи изхвърляне</p> */}
        </section>
        <div className="fixed top-0 left-0 -z-20">
          <div className="relative w-screen h-screen">
            <Image
              src="/pages-images/office-moving/background.webp"
              fill
              alt="Нашата фирма предлага висококачествени Транспортни услуги за безопасно и ефективно преместване на вашия дом или офис"
              className=""
            />
          </div>
        </div>
        {/* <section className="py-10 mt-20 font-sans bg-white flex-center">
          <Title title="Вижте и другите ни услуги" size="text-4xl" />
        </section> */}
        <section className="">
          <SwiperServices service="office" />
        </section>
      </section>
    </>
  );
}
