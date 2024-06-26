import React from "react";

import { getSession } from "next-auth/react";

import PageContainer from "../../../components/pages/admin/dashboard/PageContainer";

// Mongodb
import User from "../../../db/models/User";
import { connectMongo } from "../../../db/connectDb";
import { FaTools } from "react-icons/fa";
import Container from "../../../components/pages/admin/dashboard/Container";

const imageDataList = {
  gallery: {
    className: "h-10 w-10 mr-2",
    url: "image-gallery.png",
    alt: "Няма още",
  },
  blog: {
    className: "h-10 w-10 mr-2",
    url: "blogging.png",

    alt: "Няма още",
  },
};
export default function Index() {
  return (
    <section className="">
      <section className="container grid gap-6 my-5 lg:grid-cols-3 lg:mt-10 gap-y-10">
        <Container icon="home" text={"Начало"} link={"/"} />

        <PageContainer
          icon="undefined"
          text="Галери"
          link="gallery/main"
          imageData={imageDataList.gallery}
        />
        <PageContainer
          icon="undefined"
          text="Блог"
          link="blog/create"
          imageData={imageDataList.blog}
        />
        <PageContainer icon="tools" text="Услуги" link="services/create" />
      </section>
    </section>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const session = await getSession({ req: context.req });

  await connectMongo();

  const user = await User.findOne({ email: session?.user?.email });

  if (user?.role != "admin" || !user || !session) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  return {
    props: { session, query },
  };
}
