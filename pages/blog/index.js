import Head from "next/head";
import Link from "next/link";
import React from "react";
import Title from "../../components/Title";

import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";
import { ImClock } from "react-icons/im";

import { blogData } from "../../components/data/blog";
const Index = () => {
  return (
    <>
      <Head>
        <title>Хамалски и транспортни услуги - БЛОГ</title>
      </Head>
      <main className="min-h-screen pt-40 pb-20 bg-blog">
        <section className="container">
          <div className="flex-center">
            <Title
              title="Хамалски и транспортни услуги - БЛОГ"
              size="text-3xl"
            />
          </div>
          <section className="grid mt-5 lg:grid-cols-2 place-items-center">
            {blogData.map((data) => {
              return (
                <Box
                  link={data.link}
                  imgUrl={data.imgUrl}
                  key={data._id}
                  paragraph={data.paragraph}
                  title={data.title}
                  date={data.date}
                />
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};

export default Index;

function Box({ children, link, imgUrl, title, paragraph, date }) {
  return (
    <div className="flex flex-col justify-center max-w-lg bg-white rounded-md shadow-xl">
      <div className="container md:px-6 ">
        <Link href={`/blog/${link}`}>
          <h3 className="py-4 font-sans text-2xl font-semibold transition-colors hover:text-blue">
            {title}
          </h3>
        </Link>
      </div>
      <div className="relative w-full h-56 md:h-96">
        <Image
          src={`/blog/${imgUrl}`}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <div className="px-8 max-sm:pt-5">
        <p className="mb-2 card__preview-text">{paragraph}</p>
      </div>
      <div className="px-8 pb-8">
        <Link href={`/blog/${link}`}>
          <span className="flex items-center py-2 font-semibold rounded-md text-blue hover:underline">
            Продължи четенето
            <span className="pt-[0.1rem] pl-1 ">
              <BsArrowRight />
            </span>
          </span>
        </Link>
      </div>
      <div className="flex items-center px-8 py-6 font-semibold bg-gray-100 text-blue">
        <div className="">
          <ImClock />
        </div>
        <div className="pl-1 text-sm">{date}</div>
      </div>
    </div>
  );
}
