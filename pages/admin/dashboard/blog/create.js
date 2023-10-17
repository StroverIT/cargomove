import React, { useState } from "react";
import Layout from "../../../../components/pages/admin/dashboard/Layout";
import Head from "next/head";

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
