import React, { useState } from "react";
import Layout from "../../../../components/pages/admin/dashboard/Layout";
import Head from "next/head";
import { getSession } from "next-auth/react";
import User from "../../../../db/models/User";
import { connectMongo } from "../../../../db/connectDb";

export default function Blog() {

  const [isLoading, setLoading] = useState(false)
  const submitHandler = ()=>{
      
  }
  return (
    <>
      <Head>
        <title>Create blog</title>
      </Head>
      <Layout>
        <section className="">
          
        <button
            className={`bg-blue px-10 py-1  flex-center text-white`}
            type="button"
            onClick={submitHandler}
          >
            {isLoading ? <div className="loader"></div> : "Изпрати"}
          </button>
        </section>
      </Layout>
    </>
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
