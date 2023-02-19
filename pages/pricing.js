import Head from "next/head";
import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import SwiperServices from "../components/SwiperServices";
import Title from "../components/Title";

export default function CleaningOfApartmentsAndHouses() {
  return (
    <>
      <Head>
        <title>Цени за хамалски услуги - София</title>
        <meta
          name="description"
          content={`Хамалски, товаро-разтоварни и транспортни услуги. Вижте как се образуват нашите цени. Имаме както фиксирани, така и цени на часова ставка.`}
        />
        <meta property="og:title" content="Ценоразпис на нашите услуги" />
        <meta
          property="og:description"
          content="Търсите прозрачни и конкурентни цени за предстоящото си преместване? 
        Страницата за ценообразуване на нашите услуги за преместване и 
        транспорт предоставя цялата информация, от която се нуждаете, за да вземете информирани решения.
         Ние предлагаме набор от опции за ценообразуване, които да отговарят на вашия бюджет, 
         независимо дали се местите на място или на дълги разстояния. Нашият екип ще работи с вас,
          за да персонализирате план, който отговаря на вашите нужди и гарантира безпроблемно преместване. 
          Свържете се с нас днес, за да научите повече и да започнете пътуването си за преместване."
        />
      </Head>
      <div className="min-h-screen mt-40 ">
        <section className="container font-sans">
          <section className="flex-center">
            <Title
              title="Хамалски, товаро-разтоварни и транспортни услуги"
              size="text-3xl"
            />
          </section>
          {/* Извозване на строителни отпадъци в чували до сметище
            Първокласно обслужване на всички наши клиенти за извозване на отпадъци
            Гъвкаво работно време, няма нужда да променяте графика си за нас
            Най-висок клас услуги, оборудване и превозни средства за извозване на отпадъци
      
          Достъпни цени и много специални оферти за количества и редовни клиенти
      
          По-евтина алтернативна на извозването на отпадъци с контейнери */}
          <section className="lg:px-56">
            <h2 className="mt-2 text-2xl font-medium text-center">
              Как се образуват нашите цени за хамалски услуги?
            </h2>
            <h2 className="mt-2 text-xl font-medium">
              Фиксирана цена на хамалски услуги:
            </h2>
            <p>
              Ние от Мувекс България можем да Ви предложим опция - фиксирана
              цена, след извършване на безплатен оглед от нашият екип. По време
              на огледа екипа се запознава с особеностите на вашия обект, като
              размерите на стълбищата, асансьорите, разстоянието от входа до
              товарния транспорт и други детайли. Тази опция е перфектния избор
              за цялостни премествания на офиси, сгради, мероприятия и други
              обемни поръчки. След извършен оглед ще имаме възможността да ви
              предоставим ценово предложение изградено на база вашия обем на
              багаж, нужните опаковъчни материали (аерофолио, стреч фолио,
              кашони...), необходимия брой работници и товарния транспорт.
            </p>
            <h3 className="mt-2 text-xl font-medium">Цена на часова ставка:</h3>
            <p>
              Вие имате точна преценка за нужното време по преместване на вашия
              багаж, ние имаме точната оферта за Вас. Сами можете да изберете
              размера на товарния транспорт и необходимия брой хамали според
              вашите нужди и обем на багажа. Услугата часова ставка е с
              минимално време на ангажираност от два часа, долен праг под който
              не можем по-надолу. Предимствата на този вид услуга дава
              възможност да използвате, колкото Ви е необходимо. Услугата на час
              е идеален вариант при преместване на дребна покъщина, офис
              размествания, преместване от етаж на етаж и прочие.
            </p>
            <h2 className="mt-2 text-2xl font-medium text-center">
              Часова ценова листа
            </h2>
            <section className="">
              <section>
                <h3 className="mt-2 text-xl font-medium">
                  Цени на хамалски услуги
                </h3>
                <ul className="ml-5 list-disc">
                  <li>Цена за Работник на час от 20 лв. </li>
                  <li>
                    В цената не е включено качване на тежки предмети над 100 кг.
                  </li>
                  <li>Качване над 2-ри етаж се таксува допълнително</li>
                  <li>Минимално заплащане от 2 часа</li>
                </ul>
              </section>
              <section>
                <h2 className="mt-2 text-xl font-medium">
                  Цени на транспортни услуги
                </h2>
                <ul className="ml-5 list-disc">
                  <li>
                    Цена за престой + транспортиране в рамките на града от
                    30лв/ч
                  </li>
                  <li>Цена от 0.99лв на километър при по дълги разстояния.</li>
                  <li>Качване над 2-ри етаж се таксува допълнително</li>
                  <li>Минимално заплащане от 2 часа</li>
                  <li> Транспорта се заплаща в двете посоки</li>
                </ul>
              </section>
              <section>
                <h2 className="mt-2 text-xl font-medium">
                  Цени за тежки предмети
                </h2>
                <p className="max-w-md">
                  Предмети от естеството на каси, витрини, пиана, котлета,
                  камини, генератори, сървъри и други тежки предмети
                </p>
                <p>Цена по договаряне</p>
              </section>
            </section>
            {/* <ul className="ml-5 list-disc">
              <li>Извозване на строителните отпадъци в чували до сметище. </li>
              <li>
                Първокласно обслужване на всички наши клиенти за извозване на
                отпадъци
              </li>
              <li>
                Гъвкаво работно време, за да не се налага промяна на Вашият
                график.
              </li>
              <li>Достъпни цени</li>
              <li>Алтернатива за по-евтино извозване на отпадъци с контейнери</li>
            </ul> */}
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
          <SwiperServices construction={false} />
        </section>
      </div>
    </>
  );
}
