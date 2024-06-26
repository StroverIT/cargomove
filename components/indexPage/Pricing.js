import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import Title from "../Title";

export default function Pricing() {
  return (
    <section className="relative pt-10 mt-10 font-sans bg-white" id="pricing">
      <section className="">
        <div className=" flex-center">
          <Title title="Цени" size="text-5xl md:text-5xl" />
        </div>
        <section className="grid mt-10 lg:gap-10 lg:mt-6">
          <section className="">
            <div className="grid shadow-lg md:grid-cols-2">
              <div className="p-5 md:p-16 border-y border-blue-150 max-md:order-2">
                <h2 className="mb-4 text-2xl max-md:text-center md:text-2xl">
                  Хамалски услуги и товаро-разтоварни дейности
                </h2>
                <ul className="flex flex-col max-w-xl ml-10 text-lg list-disc gap-y-2">
                  <li>Цени от 25 лв на час.</li>
                  <li>При повикване на хамали извън София - по договаряне</li>
                  <li>
                    За тежки предмети над 100кг. по договаряне. (каси, витрини,
                    пиана, камини, камъни и други)
                  </li>
                </ul>
              </div>
              <div className="flex-center bg-blue-150 ">
                <div className="relative w-20 h-20 md:w-56 md:h-56">
                  <Image
                    src="/icons/moving.png"
                    alt="хамалски услуги за вас!"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            <div className="grid shadow-lg md:grid-cols-2">
              <div className="p-5 border-b md:p-16 border-blue-150 max-md:order-2">
                <h2 className="mb-4 text-2xl max-md:text-center">
                  Транспортни услуги
                </h2>
                <ul className="flex flex-col max-w-xl ml-10 text-lg list-disc gap-y-2 ">
                  <li>Камион с падащ борд 20м3 до 3.5 тона от 35 лв/ч </li>
                  <li>Камион бордови-брезент 19м3 до 3.5 тона от 30 лв/ч</li>
                  <li>
                    Товарен бус 17.6м от 30 лв/ч
                  </li>
                  <li>
                    Транспортни услуги за страната от 1.09 ст/км, услугата се
                    заплаща в 2-те посоки. При повикване на хамали цена по
                    договаряне.
                  </li>
                </ul>
              </div>
              <div className="bg-blue-300 flex-center ">
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
          <section className="sticky text-center flex-center top-56">
            <ul className="flex flex-col italic gap-y-2 text-md">
              <li className="text-green">
                Безплатен оглед в рамките на гр. София
              </li>
              <li> Минимално време на ангажираност 2ч.</li>
              <li>Монтаж / демонтаж, Опаковане и др по договаряне</li>
            </ul>
          </section>
        </section>

        <div className="py-10 flex-center">
          <Link
            href="/pricing"
            className="px-10 py-3 text-lg font-semibold text-white uppercase rounded-lg bg-blue"
            scroll={false}
          >
            Виж цени
          </Link>
        </div>
      </section>
    </section>
  );
}
