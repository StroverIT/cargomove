import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import Image from 'next/image';

export default function CleaningOfApartmentsAndHouses() {
  return (
    <>
      <Head>
        <title>
          Товаро-разтоварна дейност и хамалски услуги за София и областта.
        </title>
        <meta
          name="description"
          content={` Товаро-разтоварни услуги за тирове, контейнери и други. Приемане, разтоварване и подреждане на стоката в складови бази. Претоварване на стока от тир в тир.`}
        />
        <meta
          property="og:title"
          content="Товаро-разтоварна дейност и хамалски услуги за София и областта."
        />
        <meta property="og:description" content="" />
      </Head>
      <div className="min-h-screen mt-40 ">
        <section className=' lg:px-56 3xl:px-[30rem]'> 
        <section className="container px-5 py-10 bg-white rounded-lg  md:px-14">
          <section className="flex-center">
            <Title title="Товаро-разтоварни дейности" size="text-3xl" />
          </section>
          <section className="">
            <h2 className="mt-2 text-xl font-medium">Какво предлагаме:</h2>
            <p>
              Процесът по товарене и разтоварване на стока може да бъде
              трудоемка и рискована задача. Ние &quot;CargoMove&quot;,
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
          
        </section>
        <div className="fixed top-0 left-0 -z-20">
          <div className="relative w-screen h-screen">
            <Image
              src="/blog/20181024_143404.jpg"
              fill
              alt="Нашата фирма предлага висококачествени Транспортни услуги за безопасно и ефективно преместване на вашия дом или офис"
              className="object-cover"

            />
          </div>
        </div>
       
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
          <SwiperServices service="loading" />
        </section>
      </div>
    </>
  );
}
