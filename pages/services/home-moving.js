import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import { listAllExceptOne } from "../../utils/services";

export default function HomeMoving() {
  return (
    <>
      <Head>
        <title>Movex - Професионално преместване на дома </title>
        <meta
          name="description"
          content="Ние се гирижим за вашите вещи, сякаш са наши. Безпроблемно преместване. Професионално преместване на дома. Преместване на мебели, лични вещи, битова техника и още много."
        />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className="container font-sans">
          <section className="flex-center">
            <Title title="Преместване на дома " size="text-4xl" />
          </section>
          <section className="mt-2">
            {/* <h3 className="text-xl font-medium">Какво предлагаме:</h3> */}
            <section className="lg:px-56">
              <p>
                Услугите ни по преместване на дома се отличават с качество и
                достъпност! Строгите практики за наемане на персонал решават
                казуса по безопасността на Вас и вашите вещи! Срещате трудност в
                преместването на вашето имущество? Тук ние идваме на помощ.
                Нашата мисия е да удовлетворим вашите изисквания и с помощта на
                нашите експерти да улесним процесът по преместване, така че
                сложното събитие за Вас, да се превърне в едно комфортно
                преживяване. Ние от Мувекс България в качеството си на
                професионалисти в сверата на хамалските и транспортни услуги
                държим да свършим работата си с вниманеие към детайлите, така че
                Вие да останете доволни.
              </p>
              <h2 className="mt-1 text-lg font-semibold">
                Какво е необходимo за преместване на дома?
              </h2>
              <ul>
                <li>- Бус/камион с или без падащ борд/платформа</li>
                <li>- Специализирани ленти за вдигане на тежести</li>
                <li>- Опаковъчни материали</li>
                <li>- Транспортна количка в случай на по-голям преход</li>
                <li>- Професионален опит</li>
              </ul>
              <h2 className="mt-1 text-lg font-semibold">
                Как да улесним процеса? - Ето как:
              </h2>
              <p>
                Препоръчително е да се свържете предварително няколко дни преди
                самата дата на преместване с нашия екип с цел оптимизиране на
                процеса по преместване на дома. В разговора се уточняват
                въпроси, като това имате ли нужда от опаковане на вашите вещи,
                подходящото за Вас време за преместване и запознаване от наша
                страна с детайлите по преместването на вашия дом. При по голям
                обем е необходимо предварително уговаряне за извършване на оглед
                от мястото на изнасяне и внасяне по възможност.
              </p>
            </section>
            {/* Тука може да се сложи снимка!!!!! */}
            <section className="lg:mx-36 my-14">
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
          </section>
        </section>
        <section className="mt-20 font-sans flex-center">
          <Title title="Вижте и другите ни услуги" size="text-4xl" />
        </section>
        <section className="">
          <SwiperServices service="house" />
        </section>
      </section>
    </>
  );
}
