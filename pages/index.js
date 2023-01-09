import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import ContactUs from "../components/indexPage/ContactUs";
import FaQ from "../components/indexPage/FaQ";
import HeroSection from "../components/indexPage/HeroSection";
import Pricing from "../components/indexPage/Pricing";
import Services from "../components/indexPage/Services";
import SmallInfo from "../components/indexPage/SmallInfo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Хамалски и транспортни услуги за гр. София, страната и ЕС</title>
        <meta
          name="description"
          content="Movex Bulgaria предлага професионални услуги в сферата на транспорта и
          хамалските услуги, като това включва преместване на дома и офиса, международно преместване, транспортни услуги,
          товаро-разтоварни дейности и преместване на пиана."
        />
      </Head>

      <main className="">
        <HeroSection />
        <section className="bg-gray-550 ">
          <SmallInfo />
          <Services />
          <Pricing />
          <FaQ />
          <section className="pb-20 mt-10 lg:mt-20">
            <ContactUs
              color="border-blue"
              btnColor="bg-blue"
              bgColor="bg-blue-50"
              number="+359 89 506 3670"
              scrollBarThumb="scrollbar-thumb-primaryBlue-150"
              scrollBarTrack="scrollbar-track-primaryBlue-500"
              typePage="Web"
            />
          </section>
        </section>
      </main>
    </div>
  );
}
