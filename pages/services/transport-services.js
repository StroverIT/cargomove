import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";

export default function DisposalOfOldFurniture() {
  return (
    <div className="min-h-screen mt-40">
      <section className="container font-sans">
        <section className="flex-center">
          <Title title="Транспортни услуги" size="text-3xl" />
        </section>
        {/* Много често се случва да пазим с години стари вещи, мебели и други
            предмети в мазето или на тавана. С годините те се натрупват и се стига
            до момента, в който се чудите как да се отървете от тях и да ги
            изхвърлите. Понякога, за съжаление, някои недобросъвестни съседи
            изхвърлят боклука си направо в мазето. */}
        <section className="lg:px-56">
          <section className="text-center flex-center">
            <p className="mt-2 text-xl lg:max-w-3xl">
              Ефективни и ефикасни решения създадени за вас и вашата доставка
            </p>
          </section>

          <p className="mt-4 lg:max-w-3xl">
            Мувекс България е отлично позициониран с изградени мрежи от доверени
            партньори, за да поддържа вашите разнообразни нужди от доставки и
            товарен транспорт. Комбинацията от опит и обхват предоставя на вас
            гарантирана висококачествена транспортна услуга в рамките на
            страната и ЕС.
          </p>
          <p className="mt-4 lg:max-w-3xl">
            За нас успешната спедиция не означава само доставен товар, а именно
            внимание към детайлите. Стремим се да доставим възможно най-добрите
            услуги и решения. Нашия опит и превантивните мерки, предотвратяват
            потенциални проблеми при транспортирането на товари.
          </p>
          <p className="mt-4 lg:max-w-3xl">
            Затова ние отделяме време да се запознаем с индивидуалната ситуация
            на всеки клиент. Разбираме какви специфични нужди са необходими и
            създаваме индивидуално решение. Предоставянето на подходящо решение,
            отговарящо на вашите нужди и цели, е наш приоритет, за да изпитате
            истински предимствата!
          </p>
          <p className="mt-4 lg:max-w-3xl">
            Мувекс България предоставя решения за локални доставки в страната,
            както и комплексни товари с обем до 40 м3. Подходящи превозни
            средства за вашия товар от 18м3 с падаща или без падаща платформа.
            Предлагаме достъпна услуга подходяща за фирмени магазини и частни
            клиенти, за изпращане на по-малки товари от сегмента на мебели,
            дивани, бяла техника и прочие с регулярна транспортна линия Варна –
            Шумен – В.Търново – Троян – София и обратно, като регулярното
            отпътуване на групажните товари става всеки вторник и доставянето на
            товарите всеки четвъртък. Необходимо е предварително запитване,
            можете да се свържете с нашия екип чрез мобилен телефонен номер,
            контактна ф-ма в сайта или чрез съобщение на Viber.
          </p>
        </section>
        <section className="my-14 lg:mx-36">
          <ContactUs
            color="border-blue"
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
        <SwiperServices service="transport" />
      </section>
    </div>
  );
}
