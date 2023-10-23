import React, { useState } from "react";

// Next things
import Head from "next/head";

// Components
import Layout from "../../../../components/pages/admin/dashboard/Layout";
import Form from "../../../../components/admin/blog/Form";

// Next-auth
import { getSession } from "next-auth/react";

// Mongodb
import User from "../../../../db/models/User";
import { connectMongo } from "../../../../db/connectDb";



// Custom Hooks
import useCreateBlog from "../../../../components/hooks/useCreateBlog";

export default function Blog() {
  const {
    blogValues,
    setBlogValues,
    inputData,
    setInputData,
    isLoading,
    submitHandler,
  } = useCreateBlog({ route: "create" });

  return (
    <>
      <Head>
        <title>Create blog</title>
      </Head>
      <Layout>
        <section className="flex flex-col gap-y-6">
          <Form
            blogValues={blogValues}
            setBlogValues={setBlogValues}
            inputData={inputData}
            setInputData={setInputData}
          />
          <button
            className={`bg-blue px-10 py-1  flex-center text-white`}
            type="button"
            onClick={submitHandler}
          >
            {isLoading ? <div className="loader"></div> : "Изпрати"}
          </button>

          {/* <div dangerouslySetInnerHTML={{ __html: previewValues }} /> */}
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
