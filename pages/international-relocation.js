import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import SwiperServices from "../components/SwiperServices";
import Title from "../components/Title";

export default function InternationalRelocation() {
  return (
    <section className="min-h-screen mt-40 ">
      <section className="container">
        <section className="font-sans flex-center">
          <Title title="Международно преместване" size="text-3xl" />
        </section>
        {/* Преместване на дома и/или офиса в друга държава. */}
        <section className="font-sans">
          {/* <h3 className="text-xl font-medium">Какво предлагаме:</h3> */}
          <section className="text-center flex-center">
            <p className="lg:max-w-lg">
              Ние ще се погрижим за Вашите мебели, ценни вещи, оборудване и
              покъщина.
            </p>
          </section>
          <h3 className="mt-4 text-xl font-medium">
            Кога е нужно професионално международно преместване ?
          </h3>
          <p className="mt-1 lg:max-w-3xl">
              Когато решите да преместите имуществото си във всяка страна от ЕС. 
            Спестяваме Ви време и намаляваме главоболието с опаковането и подреждането. 
            Когато желаете собственосста Ви да пристигне навреме с гарантирано качество. 
          </p>
          <h3 className="mt-2 text-xl font-medium">Какво предлагаме:</h3>
          <p className="mt-1 lg:max-w-3xl">
            Дългодишен и богат опит в международното преместване и транспорт,
            предварителен оглед за вещите, които трябва да се пранасят,
            например:
          </p>
          <ul className="ml-5 list-disc">
            <li>Покъщина</li>
            <li>Мебели</li>
            <li>Офис техника</li>
            <li>Ценни вещи</li>
            <li>Предмети на изкуството</li>
          </ul>
          <p className="mt-1 lg:max-w-5xl">
            Вещите които са набелязани и са необходими документи, обясняваме
            какви документи са нужни, за да напусне страната безпрепятствено
            Транспортираме го с подходящият за целта камион, монтираме мебели и
            помагаме за разместване и подреждане на обзаведенето. Спазваме
            всички изисквания за опаковане на багажа
          </p>
          <p className="mt-1 lg:max-w-5xl">
            В настоящия момент &quot;Movex Bulgaria&quot; предлага услугите си
            за преместване във всяка една държава от Европейския съюз –{" "}
            <span className="">
              Австрия, Франция, Италия, Германия, Испания, Румъния,Холандия,
              Гърция и др.
            </span>
          </p>
          <p className="mt-1 lg:max-w-5xl">
            Цената се определя главно от обема и тонажа на багажа, който трябва
            да се премести и от дестинацията, до която трябва да стигне. За
            повече информация се свържете с нас.
          </p>
          <p className="mt-10 font-medium text-center">
            Ако имате запитвания, с радост ще отговорим на всички Ваши въпроси.
          </p>
        </section>
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
        <SwiperServices international={false} />
      </section>
    </section>
  );
}
