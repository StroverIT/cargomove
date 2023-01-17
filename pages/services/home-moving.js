import Head from "next/head";
import Image from "next/image";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import { listAllExceptOne } from "../../utils/services";

export default function HomeMoving() {
  return (
    <>
      <Head>
        <title>Професионално преместване на дома </title>
        <meta
          name="description"
          content="Ние се гирижим за вашите вещи, сякаш са наши. Безпроблемно преместване. Професионално преместване на дома. Преместване на мебели, лични вещи, битова техника и още много."
        />
        <meta property="og:title" content="Професионално преместване на дома" />
        <meta property="og:description" content=" " />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className="container font-sans">
          <div className="flex-center">
            <Title title="Преместване на дома " size="text-4xl" />
          </div>
          <section className="mt-2 container">
            {/* <h3 className="text-xl font-medium">Какво предлагаме:</h3> */}
            <section className="lg:px-56">
              <section>
                <h2 className="mt-1 text-lg font-semibold">
                  Професионални услуги за преместване на дома в България
                </h2>
                <div className="relative mb-2 -ml-5 md:w-96 w-44 h-44 md:h-96 image-circle  float-left ">
                  <Image
                    src="/pages-images/home-moving/firstPhoto.webp"
                    alt="Професионално преместване на дома - нашият екип гарантира комфортна и безопасна преместване на вашите вещи"
                    fill
                    className="object-contain image-circle "
                  />
                </div>
                {/* <p>
                  Преместване на дома е голяма промяна в живота на всяка семейна
                  единица и трябва да се осъществява с голяма внимателност и
                  планиране.
                  <br />
                  Нашият екип от професионалисти може да ви помогне да се справите
                  с всички аспекти на преместването на дома, като опаковка,
                  пренос, монтаж и демонтаж на мебели и други вещи.
                  <br />
                  Ние предлагаме и допълнителни услуги като харектеризане на вещи,
                  съхранение и транспортиране на ценни предмети.
                  <br />
                  Предварително свържете се с нас за да планираме преместването на
                  дома ви и да осигурим комфортно и безопасно преместване на
                  вашите вещи.
                  <br />
                  Нашата компания предлага гарантирано качество и ниски цени на
                  преместване на дома в България.
                </p> */}
                <p>
                  Преместването на дома е една от най-големите промени, които
                  може да се случат в живота на всеки човек.
                </p>
                <p>
                  Това е момент, когато трябва да се осъществят множество
                  действия, като опаковка и пренос на вещите, реорганизиране на
                  жилището и множество други.
                </p>
                <p>
                  Това може да бъде доста натоварващо и стресово, особено ако не
                  се планира правилно.
                </p>
                <p>
                  Но има и друг начин - да се използват професионалните услуги
                  за преместване на дома.
                </p>
                <p>
                  Нашият екип от професионалисти може да Ви помогне да се
                  справите с всички аспекти на преместването на дома, като
                  опаковка, пренос, монтаж и демонтаж на мебели и други вещи.
                </p>
                {/* <p>
                  Ние предлагаме и допълнителни услуги като харектеризане на вещи,
                  съхранение и транспортиране на ценни предмети.
                </p> */}
                <p>
                  Свържете се с нас предварително за да планираме преместването
                  на дома Ви и да осигурим комфортно и безопасно преместване на
                  вашите вещи.
                </p>
                <p>
                  Нашата компания предлага гарантирано качество и ниски цени на
                  преместване на дома в България.
                </p>
                <p>
                  Не изпускайте момента за преместване на дома да бъде стресоно
                  и натоварващо.
                </p>
                <p>
                  Свържете се с нашия екип и ние ще ви помогнем да осъществите
                  преместването на дома с максимална лекота и минимално
                  натоварване.
                </p>
                <p>
                  Нашият екип се състои от висококвалифицирани и опитни
                  специалисти, които ще ви осигурят максимална защита за вашите
                  вещи и оборудване по време на преместването.
                </p>
                <p>
                  Използвайки нашите услуги за преместване на дома, може да се
                  справите с всички трудности и рискове, свързани с
                  преместването на дома.
                </p>
                <p>
                  Ние ще ви помогнем да се адаптирате към новото място и да се
                  насладите на новия свят. Не се колебайте да се свържете с нас
                  и да поръчате нашите услуги за преместване на дома.
                </p>
                {/* <p>
                  Предварително свържете се с нас за да обсъдим вашите нужди и да
                  подготвим персонализиран план за преместване на дома.
                </p> */}
                <p>
                  Ние ще ви помогнем да се организирате и да избегнете грешките,
                  които често се случват при самостоятелно преместване.
                </p>
                <p>
                  Ние ще ви осигурим максимална защита за вашите вещи и
                  оборудване и да ви помогнем да изпълните преместването на дома
                  в рамките на вашите бюджет и времеви планове.
                </p>
                <p>
                  Ние предлагаме висококачествени услуги за преместване на дома,
                  като опаковка, монтаж, демонтаж на мебели, транспортиране и
                  съхранение.
                </p>
                <p>
                  Ние работим с надеждни и опитни партньори, за да осигурим
                  безопасно и ефективно преместване на вашия дом.
                </p>
                <p>
                  Не изпускайте момента за преместване на дома да бъде стресово
                  и натоварващо.
                </p>
                <p>
                  Свържете се с нашия екип и ние ще ви помогнем да осъществите
                  преместването на дома с максимална лекост и минимално
                  натоварване.
                </p>
              </section>
              <section>
                <h2 className="mt-1 text-lg font-semibold">
                  Накратко за нашата услуга - &quot;Преместване на дома&quot;
                </h2>
                <p>
                  {/* Услугите ни по преместване на дома се отличават с качество и
                  достъпност! Строгите практики за наемане на персонал решават
                  казуса по безопасността на Вас и вашите вещи! Срещате трудност в
                  преместването на вашето имущество? Тук ние идваме на помощ.
                  Нашата мисия е да удовлетворим вашите изисквания и с помощта на
                  нашите експерти да улесним процесът по преместване, така че
                  сложното събитие за Вас, да се превърне в едно комфортно
                  преживяване. Ние от Мувекс България в качеството си на
                  професионалисти в сверата на хамалските и транспортни услуги
                  държим да свършим работата си с вниманеие към детайлите, така че
                  Вие да останете доволни. */}
                  Услуги за преместване на дома с високо качество и достъпни
                  цени - Мувекс България. Сигурност и забележителни практики за
                  наемане на персонал за решаване на вашите проблеми с
                  преместване. Ние помагаме да улесним процеса на преместване за
                  вас. Експерти в сверата на хамалски и транспортни услуги -
                  Мувекс България. Внимание към детайлите за да останете
                  доволни.
                </p>
                <h2 className="mt-1 text-lg font-semibold">
                  Какво е необходимo за преместване на дома?
                </h2>
                <ul>
                  <li>- Бусове с или без падаща платформа</li>
                  <li>- Специализирани ленти за движение на тежести</li>
                  <li>- Опаковки и материали за транспорт</li>
                  <li>- Транспортни колички за големи превози</li>
                  <li>- Професионален опит в транспортната индустрия</li>
                </ul>
              </section>
              <section>
                <h2 className="mt-1 text-lg font-semibold">
                  Как да улесним процеса? - Ето как:
                </h2>
                <p>
                  {/* Препоръчително е да се свържете предварително няколко дни преди
                  самата дата на преместване с нашия екип с цел оптимизиране на
                  процеса по преместване на дома. В разговора се уточняват
                  въпроси, като това имате ли нужда от опаковане на вашите вещи,
                  подходящото за Вас време за преместване и запознаване от наша
                  страна с детайлите по преместването на вашия дом. При по голям
                  обем е необходимо предварително уговаряне за извършване на оглед
                  от мястото на изнасяне и внасяне по възможност. */}
                  Предварително свържете се с нашия екип за оптимизиране на
                  процеса на преместване на дома
                  <br />
                  Уточнете въпроси за опаковка, време и детайли на преместването
                  <br />
                  Предварително уговорете за оглед при по-големи обеми
                  <br />
                  Преместване на домове - Оптимизация на процеса с нашия екип
                  <br />
                  Опаковка на вашите вещи и уточняване на детайли при
                  преместване
                </p>
              </section>
            </section>
            {/* Тука може да се сложи снимка!!!!! */}
          </section>
        </section>
        <section className="lg:mx-36 my-14">
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
        <section className="mt-20 font-sans flex-center">
          <Title title="Вижте и другите ни услуги" size="text-4xl" />
        </section>
        <section className="">
          <SwiperServices service="house" />
        </section>
      </section>
    </>
  );
}
