import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import { listAllExceptOne } from "../../utils/services";

export default function HomeMoving() {
  return (
    <>
      <Head>
        <title>Професионално преместване на дома </title>
        <meta
          name="description"
          content="Професионални услуги по преместване на дома, висококачествени опаковъчни материали и консумативи, монтаж – демонтаж. Качество и достъпност!"
        />
        <meta property="og:title" content="Професионално преместване на дома" />
        <meta property="og:description" content=" " />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className=" lg:px-56 3xl:px-[30rem]">
          <section className="container px-5 py-10 bg-white rounded-lg  md:px-14">
            <div className="flex-center">
              <Title title="Преместване на дома " size="text-4xl" />
            </div>
            <section className="container mt-2">
              {/* <h3 className="text-xl font-medium">Какво предлагаме:</h3> */}
              <section className="">
                <section>
                  <h2 className="mt-1 text-lg font-semibold">
                    Професионални услуги за преместване на дома
                  </h2>
                  <div className="relative float-left mb-2 -ml-5 md:w-96 w-44 h-44 md:h-96 image-circle ">
                    <Image
                      src="/pages-images/home-moving/firstPhoto.webp"
                      alt="Професионално преместване на дома - нашият екип гарантира комфортна и безопасна преместване на вашите вещи"
                      fill
                      className="object-contain image-circle "
                    />
                  </div>
                  {/* <p>
                    Преместване на дома е голяма промяна в живота на всяка семейна
                    единица и трябва да се осъществява с голяма внимателност и
                    планиране.
                    <br />
                    Нашият екип от професионалисти може да ви помогне да се справите
                    с всички аспекти на преместването на дома, като опаковка,
                    пренос, монтаж и демонтаж на мебели и други вещи.
                    <br />
                    Ние предлагаме и допълнителни услуги като харектеризане на вещи,
                    съхранение и транспортиране на ценни предмети.
                    <br />
                    Предварително свържете се с нас за да планираме преместването на
                    дома ви и да осигурим комфортно и безопасно преместване на
                    вашите вещи.
                    <br />
                    Нашата компания предлага гарантирано качество и ниски цени на
                    преместване на дома в България.
                  </p> */}
                  <p>
                    Преместването на дома може да бъде неприятна и трудна
                    задача. Обикновено се появяват много въпроси относно
                    преместване на дома, като планиране, опаковане, транспорт и
                    други. Екипът на „временно“ ясно може да даде отговор на
                    въпросите ви. Една професионална фирма за преместване на
                    дома може да се погрижи за всички детайли, така че
                    удовлетвори вашите изисквания и да улесни процеса по
                    преместване, като свали тежестта от раменете ви.
                  </p>
                </section>
                <section>
                  <h2 className="mt-1 text-lg font-semibold">
                    Избор на най-добра оферта
                  </h2>
                  <p>
                    Важен детайл при избора на фирма за преместване е нейния
                    рейтинг и надеждността. Когато наемате фирма за преместване,
                    необходимо е да се свържете предварително с цел да получите
                    подробна ценова оценка, която включва необходимите за вас
                    услуги по преместване на дома. След прозрачност на оферта от
                    преместваща компания, можете да изберете най-добрата цена за
                    преместване.
                  </p>
                </section>
                <div className="relative mb-2 mr-10   md:w-[30rem] w-44 h-56 md:h-56 image-circle  float-left md:float-right mt-10 md:-mr-64 ">
                  <Image
                    src="/blog/buble-wrap.webp"
                    alt="Професионално преместване на дома - нашият екип гарантира комфортна и безопасна преместване на вашите вещи"
                    fill
                    className=" image-circle"
                  />
                </div>
                <section className="mt-12 md:mt-20 md:ml-10 md:-mr-28">
                  <h2 className="mt-1 text-xl font-semibold md:text-right">
                    Опаковане
                  </h2>
                  <p className="md:text-right">
                    временно ще осигури всички нужни за преместване опаковъчни
                    материали, като паралелно с това се погрижи за надеждното
                    опаковане на вещите, така че да минимализира максимално
                    риска от нарушаване на целостта им.
                  </p>
                </section>
                <div className="relative float-left mb-2 mr-10 md:w-96 w-44 h-44 md:h-96 image-circle">
                  <Image
                    src="/pages-images/home-moving/sprinter.webp"
                    alt="Професионално преместване на дома - нашият екип гарантира комфортна и безопасна преместване на вашите вещи"
                    fill
                    className=" image-circle testing"
                  />
                </div>
                <section className="mt-10 md:mt-20">
                  <h2 className="mt-1 text-xl font-semibold">
                    Товарене и превоз
                  </h2>
                  <p>
                    Опитните хамали ще се погрижат да натоварят и транспортират
                    предметите до новият ви дом ефективно, бързо, лесно и
                    безопасно с внимание към всеки детайл. Ако имате повече от
                    един адрес за разтоварване ще съобразим начина на товарене
                    според последователността на разтоварване.
                  </p>
                </section>
                <section className="">
                  <h2 className="mt-1 text-xl font-semibold">
                    Как се отличават нашите услуги
                  </h2>
                  <p>
                    Услугите ни по преместване на дома се отличават с качество и
                    достъпност! Строгите практики за наемане на персонал решават
                    казуса по безопасността на Вас и вашите вещи! Срещате
                    трудност в преместването на вашето имущество? Тук идваме на
                    помощ. Мисията ни е да удовлетворим вашите изисквания и с
                    помощта на подбрани професионални хамали да улесним процесът
                    по преместване, така че сложното и неприятно събитие за вас,
                    да се превърне в едно комфортно преживяване, което да остане
                    хубав спомен за цял живот. Ние от временно в качеството си
                    на професионалисти в сферата на хамалските услуги и
                    транспорта, държим да свършим работата си с внимание към
                    детайлите и Вие да останете доволни.
                  </p>
                </section>
                <section className="mt-4">
                  <h2 className="mt-1 text-xl font-semibold">
                    Как да улесним процеса?
                  </h2>
                  <p>
                    Препоръчително е да се свържете предварително няколко дни
                    преди самата дата на преместване с екипа ни за да
                    оптимизираме процеса по преместване на дома. В разговора се
                    уточняват въпроси, като това дали имате нужда от опаковане
                    на вашите вещи, подходящо за Вас време за преместване и
                    запознаване от наша страна с детайлите по преместване на
                    дома. При по голям обем е необходимо предварително уговаряне
                    за извършване на оглед от мястото на изнасяне и внасяне по
                    възможност.
                  </p>
                </section>
                <section className="mt-4">
                  <h2 className="mt-1 text-xl font-semibold">
                    Нашите услуги по преместване на дома:
                  </h2>
                  <section className="mt-2">
                    <div className="mb-2">
                      <h3 className="flex items-center font-semibold">
                        <span className="pr-1 text-green">
                          <BsCheckLg />
                        </span>
                        Транспорт:
                      </h3>
                      <p>
                        Разполагаме с надеждни камиони за преместване и
                        висококачествено оборудване, за да осигурим лесно и
                        безопасно транспортиране.
                      </p>
                    </div>
                    <div className="mb-2">
                      <h3 className="flex items-center font-semibold">
                        <span className="pr-1 text-green">
                          <BsCheckLg />
                        </span>
                        Опаковане и разопаковане:
                      </h3>
                      <p>
                        Ще се погрижим да опаковаме внимателно и сигурно вашите
                        вещи с висококачествени опаковъчни материали, за да
                        гарантираме защита по време на преместването и
                        транспортирането.
                      </p>
                    </div>
                    <div className="mb-2">
                      <h3 className="flex items-center font-semibold">
                        <span className="pr-1 text-green">
                          <BsCheckLg />
                        </span>
                        Товарене и разтоварване:
                      </h3>
                      <p>
                        Нашите експерти по преместване ще натоварят и укрепят
                        внимателно вашия багаж. При разтоварване хамалите ще
                        внесат и поставят вещите в съответните стаи.
                      </p>
                    </div>
                    <h3 className="flex items-center font-semibold ">
                      <span className="pr-1 text-green">
                        <BsCheckLg />
                      </span>
                      Разглобяване и сглобяване:
                    </h3>
                    <p>
                      Предлагаме допълнителна услуга по разглобяване и
                      сглобяване на вашите мебели.
                    </p>
                  </section>
                </section>
              </section>
              {/* Тука може да се сложи снимка!!!!! */}
            </section>
          </section>
        </section>
        <section className="container my-14 lg:px-36">
          <ContactUs
            color="border-blue"
            btnColor="bg-blue"
            bgColor="bg-blue-50"
            number="+359 временно"
            scrollBarThumb="scrollbar-thumb-primaryBlue-150"
            scrollBarTrack="scrollbar-track-primaryBlue-500"
            mx="md:mx-10"
          />
        </section>
        <div className="fixed top-0 left-0 -z-20">
          <div className="relative w-screen h-screen">
            <Image
              src="/pages-images/home-moving/background.jpg"
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
          <SwiperServices service="house" />
        </section>
      </section>
    </>
  );
}
