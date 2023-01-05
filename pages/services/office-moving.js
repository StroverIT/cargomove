import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";

export default function OfficeMoving() {
  return (
    <section className="min-h-screen mt-40 ">
      <section className="container font-sans">
        <section className="flex-center">
          <Title title="Преместване на офис/корпорация" size="text-3xl" />
        </section>
        <section className="lg:px-56">
          <p className="lg:max-w-5xl">
            Независимо дали планирате преместване на офиса или вътрешно
            разместване, Мувекс България разполага с експертен опит и набор
            превозни средства, сплотен екип и ефективни традиционни планове за
            успешно реализиране на преместването ви. Широката ни гама
            специализирани услуги по преместване на търговски обекти и офиси,
            съчетана с професионализъм, ще опрости процедурата по преместване.
          </p>
          <p className="lg:max-w-5xl">
            Екипа ни е наясно с това, че повечето компании не местят офисите си
            често, което означава, че когато те го направят ще се нуждаят от
            професионалисти. Ние високо ценим клиентите си , затова държим да
            обърнем внимание към детайлите и да бъдем максимално ефективни с
            нашите услуги.
          </p>
          <p className="lg:max-w-5xl">
            Доверете се на нас да преместим вашия офис от планирането,
            опаковането на инвентара, натоварването, разглобяването –
            сглобяването до транспортирането в новия офис. Насладете се на
            предстоящия ви преход без допълнителен стрес.
          </p>
          <p className="lg:max-w-5xl">
            Необходим е безплатен предварителен оглед от наш служител в удобно
            за вас време. След извършен оглед и изясняване на условията,
            изготвяме оферта по имейл. За по-големи корпоративни премествания
            възможност за подписване на договор, за срок на изпълнение и
            фиксирана цена без промяна. Издаване на приемо-предавателен протокол
            за преместените вещи без нанесени щети преместени в уговорения срок.
            Предпочитан начин на плащане след извършена работа е по банков път.
          </p>
        </section>
        {/* <p>ненужни вещи изхвърляне</p> */}
        <section className="my-14 lg:mx-36">
          <ContactUs
            color="border-orange"
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
      <section className="mt-20 font-sans flex-center">
        <Title title="Вижте и другите ни услуги" size="text-4xl" />
      </section>
      <section className="">
        <SwiperServices service="office" />
      </section>
    </section>
  );
}
