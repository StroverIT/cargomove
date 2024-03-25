import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import Image from "next/image";

export default function CleaningBasementsAndAttics() {
  return (
    <>
      <Head>
        <title> Преместване на диван за София </title>
        <meta
          name="description"
          content={`Превоз и преместване на диван в София и цялата страна. Осигурете си надеждни и професионални услуги за преместване на вашите мебели.`}
        />
        <meta
          property="og:title"
          content="Преместване на пиана, каси, витрини"
        />
        <meta property="og:description" content="" />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className=" lg:px-56 3xl:px-[30rem]">
          <section className="container px-5 py-10 bg-white rounded-lg md:px-14">
            <section className="flex-center">
              <Title title="Преместване на диван" size="text-3xl" />
            </section>
            <section>
              <section className="">
                <p>
                  Преместването на диван или канапе може да бъде истинско
                  предизвикателство. Нерядко се налага да се справим с тежки и
                  габаритни мебели, които не могат да се преместят лесно. Този
                  процес може да бъде особено неприятен, ако не разполагате с
                  необходимите инструменти и опит. За щастие, има решение, което
                  може да направи този процес значително по-лесен - услугата за
                  преместване на диван.
                </p>
                <p className="mt-6">
                  Качването на диван или канапе изисква специфични умения и
                  оборудване. Трябва да се има предвид, че тези мебели често са
                  изключително тежки и неудобни за преместване. На първо място,
                  трябва да се вземат предвид размерите на стаята, в която се
                  намират мебелите, както и стълбите и вратите, през които
                  трябва да бъдат внесени. Това изисква внимателно планиране, за
                  да сте сигурни, че вашия диван няма да бъде повреден по време
                  на преместване.
                </p>
                <p className="mt-6">
                  Нашите професионалисти в преместването на дивани и
                  канапета разполагат с необходимите умения и оборудване. Те са
                  запознати с най-добрите техники за справяне с големите и тежки
                  мебели и могат да гарантират, че те ще бъдат преместени
                  безпроблемно. Наемайки професионалисти, вие можете да сте
                  сигурни, че вашите мебели са в сигурни ръце.
                </p>
                <p className="mt-6">
                  В заключение, преместването на диван може да бъде комплексен
                  процес. За да избегнете ненужни усложнения и рискове от
                  повреждане на мебелите ви, обърнете се към нас, за да получите
                  услуга от най-високо качество или безплатен съвет за
                  оптимизиране на вашето преместване.
                </p>
              </section>
            </section>

            <div className="fixed top-0 left-0 -z-20">
              <div className="relative w-screen h-screen">
                <Image
                  src="/pages-images/moving-sofa/background.webp"
                  fill
                  alt="Нашата фирма предлага висококачествени Транспортни услуги за безопасно и ефективно преместване на вашия дом или офис"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </section>
        <section className="container my-14 lg:px-36">
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

        {/* <section className="mt-20 font-sans flex-center">
          <Title title="Вижте и другите ни услуги" size="text-4xl" />
        </section> */}
        <section className="">
          <SwiperServices service="piano" />
        </section>
      </section>
    </>
  );
}
