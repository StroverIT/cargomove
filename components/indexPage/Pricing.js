import Image from "next/legacy/image";
import React from "react";
import Title from "../Title";

export default function Pricing() {
  return (
    <section
      className="relative pt-10 pb-20 mt-10 font-sans bg-white"
      id="pricing"
    >
      <section className="container ">
        <div className="flex-center">
          <Title title="Нашите цени" size="text-4xl" />
        </div>
        <section className="grid p-10 mt-10 lg:grid-cols-2 lg:gap-10 ">
          <section className="">
            <div>
              <div className="max-lg:flex-center">
                <div className="relative w-24 h-24">
                  <Image
                    src="/icons/moving.png"
                    alt="хамалски услуги за вас!"
                    layout="fill"
                  />
                </div>
              </div>
              <ul className="flex flex-col max-w-xl text-lg gap-y-2">
                <li>
                  Хамалски и товаро-разтоварни услуги на цени от 20 лв на час.
                </li>
                <li>
                  При повикване извън София - по договаряне (пътн разх и др)
                </li>
                <li>
                  За тежки предмети над 100кг. по договаряне. (каси, витрини,
                  пиана, камини, камъни и др.)
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-20">
              <div className="max-lg:flex-center">
                <div className="relative w-24 h-24">
                  <Image
                    src="/icons/delivery-truck (1).png"
                    alt="хамалски услуги за вас!"
                    layout="fill"
                  />
                </div>
              </div>
              <ul className="flex flex-col text-lg gap-y-2">
                <li> Транспортни услуги с камион до 3.5 т 30лв/ч -35лв/ч</li>
                <li>
                  Транспорт с камион 19куб.м 35лв/ч Транспорт с камион до 16куб
                  30лв
                </li>
                <li>
                  Транспортни услуги за страната от 0,90ст./ км, услугата се
                  заплаща в 2-те посоки. При повикване на хамали цена по
                  договаряне.
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-10 lg:mt-24">
            <aside className="sticky text-center flex-center top-56">
              <ul className="flex flex-col italic gap-y-2">
                <li> Безплатен оглед в рамките на гр. София</li>
                <li> Минимално време на ангажираност 2ч.</li>
                <li>Монтаж / демонтаж, Опаковане и др по договаряне</li>
              </ul>
            </aside>
          </section>
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
    </section>
  );
}
