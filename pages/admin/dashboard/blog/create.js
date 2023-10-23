import React, { useEffect, useState } from "react";

// Next things
import Head from "next/head";
import dynamic from "next/dynamic";

// Components
import Layout from "../../../../components/pages/admin/dashboard/Layout";
import Input from "../../../../components/form/Input";
import TextArea from "../../../../components/form/TextArea";
import ImageUpload from "../../../../components/form/ImageUpload";

// Next-auth
import { getSession } from "next-auth/react";

// Mongodb
import User from "../../../../db/models/User";
import { connectMongo } from "../../../../db/connectDb";

// Notifications
import { toastError, toastSuccess } from "../../../../libs/Notifications";

// This is the blog
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

// UTILS
import { handler } from "../../../../utils/forms";

export default function Blog() {
  const [blogValues, setBlogValues] = useState("");
  const [inputData, setInputData] = useState({
    title: "",
    media: null,
    imageAlt: "",
    metaTitle: "",
    metaDescription: ""
  });

  const [isLoading, setLoading] = useState(false);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (file) setInputData((prev) => ({ ...prev, media: file }));
  };
  const submitHandler = async () => {
    setLoading(true);

    const formData = new FormData();

    // Formating data
    const newString = blogValues
      .replace(`<ol>`, `<ol class="list-decimal">`)
      .replace("<ul>", `<ul class="list-disc">`)
      .replace("<h1>", `<h1 class="text-2xl">`)
      .replace("<h2>", `<h2 class="text-xl">`)
      .replace("<h3>", `<h3 class="text-lg">`);

    formData.append("blogData", newString);

    Object.keys(inputData).forEach(key => formData.append(key, inputData[key]));

    // Fetching data
    const res = await fetch(`/api/blog/create`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    // Notifications
    if (data.message) {
      toastSuccess(data.message);
    }
    if (data.error) {
      toastError(data.error);
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Create blog</title>
      </Head>
      <Layout>
        <section className="flex flex-col gap-y-6">
          <div class="grid  gap-x-10 items-center justify-center lg:grid-cols-2">
            <div>
              <ImageUpload onChange={changeHandler} multiple={false} />
            </div>
            <div class="mt-10">
              <Input
                id="imageAlt"
                val={inputData.imageAlt}
                placeholder="Meta-Описание на снимката"
                iconType="title"
                onChange={(e) => handler(e, setInputData)}
              />
            </div>
          </div>
          <Input
            id="metaTitle"
            val={inputData.metaTitle}
            placeholder="Meta-Заглавие"
            iconType="title"
            onChange={(e) => handler(e, setInputData)}
          />
          <TextArea
            data={inputData}
            setData={setInputData}
            name="metaDescription"
            holder="Мета Описание"
          />

          <Input
            id="title"
            placeholder="Заглавие"
            iconType="title"
            val={inputData.title}
            onChange={(e) => handler(e, setInputData)}
          />

          {/* This is the blog data */}
          <ReactQuill
            theme="snow"
            value={blogValues}
            onChange={setBlogValues}
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
