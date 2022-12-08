import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import SwiperServices from "../components/SwiperServices";
import Title from "../components/Title";

export default function OfficeMoving() {
  return (
    <section className="min-h-screen mt-40 ">
      <section className="container font-sans">
        <section className="flex-center">
          <Title title="Преместване на офис/корпорация" size="text-3xl" />
        </section>
        <section className="lg:px-56">
          <h3 className="text-xl font-medium">Какво предлагаме:</h3>
          <p className="lg:max-w-5xl">
            Преместването на офиса може да бъде трудна част за работодателите
            така и за служителите. Процесът по преместване може да бъде сложна
            част, но с помощта на нашите специализирани мениджъри ще може лесно
            и удобно да координираме всеки аспект от преместването Ви. Доверете
            се на нас за преместването от събирането на инвентара,
            разглобяването и сглобяването, опаковането, планирането до
            транспортирането в новият офис. Доверете се на нас да направим
            предстоящия ви преход без стрес.
          </p>
          <p>
            Имате мебели и ненжуни вещи? Предлагаме и услуга по извърляне на
            стари мебели и вещи.
          </p>
        </section>
        {/* <p>ненужни вещи изхвърляне</p> */}
        <section className="my-14 lg:mx-36">
          <ContactUs
            color="border-orange"
            btnColor="bg-orange"
            bgColor="bg-orange-50"
            number="+359 89 506 3670"
            scrollBarThumb="scrollbar-thumb-primaryBlue-150"
            scrollBarTrack="scrollbar-track-primaryBlue-500"
            typePage="Web"
            mx="md:mx-10"
          />
        </section>
      </section>
      <section className="mt-20 font-sans flex-center">
        <Title title="Вижте и другите ни услуги" size="text-4xl" />
      </section>
      <section className="">
        <SwiperServices office={false} />
      </section>
    </section>
  );
}
