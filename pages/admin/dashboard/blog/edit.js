import React from "react";

import Layout from "../../../../components/pages/admin/dashboard/Layout";
import Head from "next/head";
import User from "../../../../db/models/User";
import { getSession } from "next-auth/react";
import { connectMongo } from "../../../../db/connectDb";

export default function edit() {
  return (
    <>
    <Head>
      <title>Create blog</title>

    </Head>
      <Layout>
        <section className="">blog</section>
      </Layout>
    </>
  );
}


export async function getServerSideProps(context) {
  const { query } = context;
  
  const session = await getSession({ req: context.req });

  await connectMongo();
  
  const user = await User.findOne({ email: session.user.email });
  
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
