import React from "react";

import { getSession } from "next-auth/react";


import PageContainer from "../../../components/pages/admin/dashboard/PageContainer";


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

    <section className="mt-40">
      <section className="container grid grid-cols-3 gap-6 mt-5 ">
        <PageContainer
          icon="undefined"

          text="Галери"
          link="gallery/main"
          imageData={imageDataList.gallery}
        />{" "}
        <PageContainer
          icon="undefined"

          text="Блог"
          link="blog/main"
          imageData={imageDataList.blog}
        />
        
      </section>
    </section>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const session = await getSession({ req: context.req });

  if (!session) {
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
