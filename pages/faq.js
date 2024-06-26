import Head from "next/head";
import React from "react";
// Components
import FaQ from "../components/indexPage/FaQ";
// Data
import { questionData } from "../components/faq/data";
export default function Faq() {
  return (
    <>
      <Head>
        <title>Цени за хамалски услуги - София</title>
        <meta
          name="description"
          content={`Цени на хамалски услуги и хамали за София. Вижте как се образуват нашите цени. Имаме както фиксирани, така и цени на часова ставка.`}
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
      <main className="min-h-screen mt-40 xl:mx-80">
        <FaQ
          data={questionData}
          title={"Въпроси и отговори"}
          titleSize={"text-2xl"}
          headingSize="text-lg"
          subHeadingSize="text-sm"
        />
      </main>
    </>
  );
}
