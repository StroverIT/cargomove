import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

// Components
import Title from "../../../components/Title";
import Dashboard from "../../../components/admin/blog/Dashboard";
import Form from "../../../components/admin/blog/Form";

// MongoDB
import User from "../../../db/models/User";
import Blog from "../../../db/models/Blog";

import { connectMongo } from "../../../db/connectDb";
import { ObjectId } from "mongodb";

// NextAuth
import { getSession } from "next-auth/react";

// Hooks
import useCreateBlog from "../../../components/hooks/useCreateBlog";

const Index = ({ blogData, user, id }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const {
    blogValues,
    setBlogValues,
    inputData,
    setInputData,
    isLoading,
    submitHandler,
  } = useCreateBlog({ route: "edit", blogDataDB: blogData, id });

  if (!blogData) {
    return (
      <div className="h-full mt-40 text-2xl flex-center text-secondary">
        Грешка при обработката на данни
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{blogData.meta.title}</title>
        <meta name="description" content={blogData.meta.description} />
      </Head>
      <main className="mt-40 mb-14">
        {user?.role == "admin" && (
          <Dashboard
            blogData={blogData}
            setIsEditMode={setIsEditMode}
            isEditMode={isEditMode}
          />
        )}

        {!isEditMode ? (
          <section className="container">
            <div className="flex-center">
              <Title title={blogData.title} size="text-3xl" />
            </div>
            <section className="flex-col mt-5 flex-center">
              <section
                className="max-w-3xl"
                dangerouslySetInnerHTML={{ __html: blogData.blogData.html }}
              ></section>
            </section>
          </section>
        ) : (
          <section className="container">
            <div className="relative cursor-pointer w-96 h-96">
              <Image
                alt="none"
                fill={true}
                src={
                  imagePreview
                    ? URL.createObjectURL(imagePreview)
                    : blogData.imageData.url
                }
                className="object-contain"
              />
            </div>
            <Form
              blogValues={blogValues}
              setBlogValues={setBlogValues}
              inputData={inputData}
              setInputData={setInputData}
              setImagePreview={setImagePreview}
            />
            <button
              className={`bg-blue px-10 py-1  flex-center text-white`}
              type="button"
              onClick={submitHandler}
            >
              {isLoading ? <div className="loader"></div> : "Изпрати"}
            </button>
          </section>
        )}
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
      id
    },
  };
}
