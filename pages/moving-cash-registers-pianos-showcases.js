import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import SwiperServices from "../components/SwiperServices";
import Title from "../components/Title";

export default function CleaningBasementsAndAttics() {
  return (
    <section className="min-h-screen mt-40 ">
      <section className="container font-sans">
        <section className="flex-center">
          <Title title="Почистване на мазета и тавани" size="text-3xl" />
        </section>
        <section>
          <section className="text-center flex-center">
            <p className="lg:max-w-2xl">
              Когато се местите в ново жилище или просто искате мазето и таванът
              да са чисти и подредени, ние ще се погрижим със строителните
              отпадъци, за да си върнете нужното пространство и бъдещи битови
              потребности
            </p>
          </section>
          <h3 className="mt-2 text-xl font-medium">Какво предлагаме:</h3>
          <p className="lg:max-w-3xl">
            Изнасяне на битови отпадъци, боклуци на тавана, в мазето, бараката,
            гаража, от апартамента и изхвърляне на стари и ненужни мебели.
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
        <SwiperServices basement={false} />
      </section>
    </section>
  );
}
