import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import Title from "../Title";

import { data } from "../data/services";
import { FaPhoneAlt } from "react-icons/fa";

export default function Services() {
  return (
    <div className="mt-10 lg:mt-20 bg-gray-550" id="services">
      <section className="container py-10">
        <div className="mb-16 text-center flex-center">
          <Title title="Какво предлагаме" size="text-4xl lg:text-5xl" />
        </div>
        <section className="grid gap-10 lg:grid-cols-3">
          {data.filter(service=> !service.excludeFromHomePage).map((service, index) => {
            return (
              <Service
                title={service.title}
                key={service._id}
                index={index}
                image={service.image}
                link={service.link}
                p={service.p}
              />
            );
          })}
        </section>
        <div className="mt-10 flex-center">
          <Link
            href="tel:+359895063670"
            className="flex items-center px-10 py-3 font-semibold text-white uppercase rounded-lg lg:text-lg bg-blue"
          >
            <div className="mr-3">
              <FaPhoneAlt />
            </div>
            <div>позвъни сега</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

function Service({ title, index, image, link, p }) {
  return (
    <Link href={`${link}`} scroll={false}>
      <div className="transition-all bg-white shadow-lg cursor-pointer text-dark hover:shadow-lg hover:scale-110 rounded-xl">
        <section className="h-48 px-5 pt-4">
          <section className="flex justify-between">
            <div className="text-4xl text-blue">0{index + 1}</div>
            <div className="relative w-10 h-10">
              <Image src={`/icons/${image}`} alt="test" layout="fill" />
            </div>
          </section>
          <h2 className="pt-2 text-xl font-medium">{title}</h2>
          <p className="mt-1 font-sans ">{p}</p>
        </section>
      </div>
    </Link>
  );
}
