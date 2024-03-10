import Head from "next/head";
import React from "react";

// Data
import { blogData } from "../../components/data/blog";

// Components
import Blog from "../../components/indexPage/Blog";
import Title from "../../components/Title";

// DB
import { connectMongo } from "../../db/connectDb";
import BlogDB from "../../db/models/Blog";

const Index = ({ blogDataDB }) => {
  return (
    <>
      <Head>
        <title>Блог - Хубаво е да знаете</title>
        <meta
          name="description"
          content="Разберете какъв тип хора ще пренасят вашите ценни вещи или ще изчистват къщата Ви. 
          Нашите ценности и визия за хамалските и транспортните услуги."
        />
      </Head>
      <main className="min-h-screen pt-40 pb-20 bg-blog">
        <section className="container mt-10">
          <div className="flex-center">
            <Title title="Нашият блог" size="text-4xl" />
          </div>
          <section className="grid mt-5 lg:grid-cols-2 gap-y-10 gap-x-5 max-lg:place-items-center xl:place-items-center grid-auto-rows">
            {blogDataDB?.map((data) => {
              return (
                <Blog
                  imgUrl={data.imageData?.url}
                  link={data._id}
                  key={data._id}
                  paragraph={data.blogData?.html}
                  title={data.title}
                  date={data.createdAt}
                />
              );
            })}
            {blogData.map((data) => {
              return (
                <Blog
                  imgUrl={data.imgUrl}
                  link={data.link}
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

export async function getServerSideProps() {
  await connectMongo();

  let blogDataDB = await BlogDB.find({}).lean();
  if (blogDataDB) {
    blogDataDB = blogDataDB.map((data) => {
      const date = data.createdAt;
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const newDate = `${day}/${month}/${year}`;

      return {
        ...data,
        createdAt: newDate,
      };
    });
    const swapElements = (array, index1, index2) => {
      let temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
      array.join("/");
    };

    blogDataDB = blogDataDB.sort((a, b) => {
      const firstDate = a.createdAt.split("/");
      const secondDate = b.createdAt.split("/");

      swapElements(firstDate, 0, 1);
      swapElements(secondDate, 0, 1);
      return new Date(secondDate) - new Date(firstDate);
    });
  }
  return {
    props: { blogDataDB: JSON.parse(JSON.stringify(blogDataDB)) },
  };
}
