import Image from "next/legacy/image";
import React from "react";
import Title from "../Title";

export default function Pricing() {
  return (
    <section className="relative pt-10  mt-10 font-sans bg-white" id="pricing">
      <section className=" ">
        <div className="flex-center mt-5">
          <Title title="Нашите цени" size="text-5xl md:text-6xl" />
        </div>
        <section className="grid    lg:gap-10 mt-10 lg:mt-20">
          <section className="">
            <div className="grid md:grid-cols-2  shadow-lg">
              <div className="p-5 md:p-16 border-y border-orange-150 max-md:order-2">
                <h3 className="max-md:text-center text-2xl md:text-2xl mb-4">
                  Хамалски и товаро-разтоварни
                </h3>
                <ul className="flex flex-col max-w-xl text-lg gap-y-2 list-disc	 ml-10">
                  <li>Цени от 20 лв на час.</li>
                  <li>
                    При повикване извън София - по договаряне (пътн разх и др)
                  </li>
                  <li>
                    За тежки предмети над 100кг. по договаряне. (каси, витрини,
                    пиана, камини, камъни и др.)
                  </li>
                </ul>
              </div>
              <div className="flex-center bg-orange-150 ">
                <div className="relative w-20 h-20 md:w-56 md:h-56">
                  <Image
                    src="/icons/moving.png"
                    alt="хамалски услуги за вас!"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 shadow-lg">
              <div className="p-5 md:p-16  border-b border-orange-150 max-md:order-2">
                <h3 className=" max-md:text-center text-2xl mb-4">
                  Транспортни услуги
                </h3>
                <ul className="flex flex-col max-w-xl text-lg gap-y-2 list-disc	 ml-10 ">
                  <li> Камион до 3.5 т 30лв/ч -35лв/ч</li>
                  <li>
                    Kамион 19куб.м 35лв/ч Транспорт с камион до 16куб 30лв
                  </li>
                  <li>
                    Транспортни услуги за страната от 0,90ст./ км, услугата се
                    заплаща в 2-те посоки. При повикване на хамали цена по
                    договаряне.
                  </li>
                </ul>
              </div>
              <div className="flex-center bg-orange-300 ">
                <div className="relative w-20 h-20 md:w-56 md:h-56">
                  <Image
                    src="/icons/delivery-truck (1).png"
                    alt="хамалски услуги за вас!"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="mt-10 lg:mt-10">
          <aside className="sticky text-center flex-center top-56">
            <ul className="flex flex-col italic gap-y-2">
              <li> Безплатен оглед в рамките на гр. София</li>
              <li> Минимално време на ангажираност 2ч.</li>
              <li>Монтаж / демонтаж, Опаковане и др по договаряне</li>
            </ul>
          </aside>
        </section>
        <div className="py-10 flex-center">
          <a
            href="tel:+359895063670"
            className="py-4 text-2xl font-semibold text-white uppercase rounded-lg px-14 bg-orange"
          >
            позвъни сега
          </a>
        </div>
      </section>
    </section>
  );
}
