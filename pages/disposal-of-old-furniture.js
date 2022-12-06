import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import SwiperServices from "../components/SwiperServices";
import Title from "../components/Title";

export default function DisposalOfOldFurniture() {
  return (
    <div className="min-h-screen mt-40">
      <section className="container font-sans">
        <section className="flex-center">
          <Title
            title="Изхвърляне и извозване на стари мебели"
            size="text-3xl"
          />
        </section>
        {/* Много често се случва да пазим с години стари вещи, мебели и други
            предмети в мазето или на тавана. С годините те се натрупват и се стига
            до момента, в който се чудите как да се отървете от тях и да ги
            изхвърлите. Понякога, за съжаление, някои недобросъвестни съседи
            изхвърлят боклука си направо в мазето. */}
        <section>
          <section className="text-center flex-center">
            <p className="mt-2 lg:max-w-3xl">
              С използването на тази услуга, oт Movex Bulgaria Ви предоставяме
              повече свободно време, липса на главоболие, непокътнати мебели,
              лесна възможност да продатете мебелите или да ги подарите.
            </p>
          </section>
          <h3 className="mt-2 text-xl font-medium">Какво очакваме от вас:</h3>
          <p className="">
            На място даа ни кажете кои мебели желаете да бъдат изхвърлени
          </p>
          <h3 className="mt-2 text-xl font-medium">Какво предлагаме:</h3>
          <p className="lg:max-w-3xl">
            Огромен опит в разглобяването,изнасянето и извозването на стари
            мебели до депо за отпадъци. Експресно пренасяне на старите мебели.
            Ако очаквате нови мебели, ще погрижим старите и ненужни мебели да
            бъдат възможно по-бързо изместени от новите прекрасни и стегнати
            мебели.
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
        <SwiperServices oldFurniture={false} />
      </section>
    </div>
  );
}
