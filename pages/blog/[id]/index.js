import Head from "next/head";
import Image from "next/image";
import React from "react";

// Components
import Title from "../../../components/Title";

// MongoDB
import User from "../../../db/models/User";
import Blog from "../../../db/models/Blog";

import { connectMongo } from "../../../db/connectDb";
import { getSession } from "next-auth/react";
import { ObjectId } from "mongodb";
import { isObjectEmpty } from "../../../utils/helpers";

const Index = ({ blogData }) => {

  if (!blogData) {
    return <div className="h-full mt-40 text-2xl flex-center text-secondary">Грешка при обработката на данни</div>;
  }
  return (
    <>
      <Head>
        <title>{blogData.meta.title}</title>
        <meta
          name="description"
          content={blogData.meta.description}
        />
      </Head>
      <main className="mt-40 mb-14">
        <section className="container">
          <div className="flex-center">
            <Title
              title={blogData.title}
              size="text-3xl"
            />
          </div>
          <section className="flex-col mt-5 flex-center">
            <section
              className="max-w-3xl"
              dangerouslySetInnerHTML={{ __html: blogData.blogData.html }}
            ></section>
          </section>
        </section>
      </main>
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const { query } = context;
  const { id } = query;
  const session = await getSession({ req: context.req });

  await connectMongo();

  const user = await User.findOne({ email: session?.user?.email });
  let blogData = await Blog.findOne({ _id: new ObjectId(id) });

  return {
    props: {
      session,
      query,
      user: JSON.parse(JSON.stringify(user)),
      blogData: JSON.parse(JSON.stringify(blogData)),
    },
  };
}
