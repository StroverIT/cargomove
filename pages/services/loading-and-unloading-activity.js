import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";

export default function CleaningOfApartmentsAndHouses() {
  return (
    <>
      <Head>
        <title>Товаро-разтоварни дейности</title>
        <meta
          name="description"
          content={` Товаро-разтоварване на тирове и контейнери в складови бази и много други .Разтоварване, приемане за съхранение в открити площи или складове.`}
        />
        <meta property="og:title" content="Товаро-разтоварни дейности" />
        <meta property="og:description" content="" />
      </Head>
      <div className="min-h-screen mt-40 ">
        <section className="container font-sans">
          <section className="flex-center">
            <Title title="Товаро-разтоварни дейности" size="text-3xl" />
          </section>
          <section className="lg:px-56">
            <h2 className="mt-2 text-xl font-medium">Какво предлагаме:</h2>
            <p>
              Процесът по товарене и разтоварване на стока може да бъде
              трудоемка и рискована задача. Ние &quot;Мувекс България&quot;,
              предоставяме услугата за товарене и разтоварване на стоки, като
              имаме за цел да спестим вашето неудобство от
              товаро-разтоварването. Този вид услуга е подходяща, когато Вие
              имате транспортно средство, но имате нужда от опцията
              &quot;товарещ персонал&quot; да помогне за натоварването или
              разтоварването на вашите вещи. Професионалния екип от товарачи
              същевременно ще ускори процеса по натоварване или разтоварване,
              спестявайки вашето неудобство и време.
            </p>
            <h2 className="mt-2 text-xl font-medium">Как работи:</h2>
            <p>
              Ако сте наели камион, очаквате доставка на стока, ще пристигне
              тир/контейнер. Не искате или не можете да се справите изцяло сами
              с физическия труд, необходим ви е &quot;товарещ персонал&quot;,
              тук ние се отзоваваме! Наемането на професионални товарачи ще
              улесни и ускори процеса. Нашият екип от професионалисти ще
              подреди, сортира, опакова и натовари/разтовари вашия контейнер,
              хенгер, камион и пр. Богатия опит ще осигури ефективно, успешно и
              без щети товаро-разтоварване.
            </p>
          </section>
          <section className="my-14 lg:mx-36">
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
