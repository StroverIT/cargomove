import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import Title from "../Title";

const data = [
  {
    title: "Преместване на дома",
    image: "icons8-relocation-64.png",
    link: "home-moving",
    _id: "xzcz12341",
  },
  {
    title: "Преместване на офиса",
    image: "icons8-relocation-64.png",
    link: "office-moving",

    _id: "21asfdasd",
  },
  {
    title: "Международно преместване",
    image: "icons8-disposal-64.png",
    link: "international-relocation",

    _id: "1231",
  },
  {
    title: "Изхвърляне и извозване на стари мебели",
    image: "icons8-disposal-64.png",
    link: "disposal-of-old-furniture",
    _id: "1231sada",
  },
  // cleaning-of-apartments-and-houses
  {
    title: "Изхвърляне на строителни отпадъци",
    image: "icons8-cleaning-64.png",

    link: "disposal-of-construction-waste",
    _id: "asfacxzv12",
  },

  // {
  //   title: "Кърти, чисти, извозва",
  //   image: "icons8-drill-64.png",
  //   _id: "zdzxc1231",
  // },
  {
    title: "Почистване на мазета и тавани",
    image: "icons8-cleaning-64.png",
    link: "cleaning-basements-and-attics",
    _id: "xZczx1231",
  },
];
export default function Services() {
  return (
    <div className="mt-10 lg:mt-20 bg-gray-550" id="services">
      <section className="container py-10">
        <div className="mb-16 text-center flex-center">
          <Title title="Какво предлагаме?" size="text-4xl lg:text-5xl" />
        </div>
        <section className="grid gap-10 lg:grid-cols-3">
          {data.map((service, index) => {
            return (
              <Service
                title={service.title}
                key={service._id}
                index={index}
                image={service.image}
                link={service.link}
              />
            );
          })}
        </section>
        <div className="mt-10 flex-center">
          <a
            href="tel:+359895063670"
            className="py-4 text-lg font-semibold text-white uppercase rounded-lg px-14 bg-orange"
          >
            позвъни сега
          </a>
        </div>
      </section>
    </div>
  );
}

function Service({ title, index, image, link }) {
  return (
    <Link href={`/${link}`} scroll={false}>
      <div className="transition-all bg-white shadow-lg cursor-pointer text-dark hover:shadow-lg hover:scale-110 rounded-xl">
        <section className="h-40 px-5 pt-4">
          <section className="flex justify-between">
            <h5 className="text-4xl text-orange">0{index + 1}</h5>
            <div className="relative w-10 h-10">
              <Image src={`/icons/${image}`} alt="test" layout="fill" />
            </div>
          </section>
          <h3 className="pt-2 text-xl italic">{title}</h3>
        </section>
      </div>
    </Link>
  );
}
