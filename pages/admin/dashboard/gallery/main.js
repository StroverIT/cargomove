import React, { useEffect, useState } from "react";
import Layout from "../../../../components/pages/admin/dashboard/Layout";
import Head from "next/head";
import Image from "next/image";
import ZoomImage from "../../../../components/ZoomImage";
import { HiX } from "react-icons/hi";
import User from "../../../../db/models/User";
import { getSession } from "next-auth/react";
import { connectMongo } from "../../../../db/connectDb";
import Input from "../../../../components/form/Input";
import { toastError, toastSuccess } from "../../../../libs/Notifications";
import ImageUpload from "../../../../components/form/ImageUpload";

export default function Main() {
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState([
    // {files, alt: ""}
  ]);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (imagePreview) {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
    } else {
      const body = document.querySelector("body");
      body.style.overflowY = "scroll";
    }
  }, [imagePreview]);
  const submitHandler = async () => {
    setLoading(true)
    const formData = new FormData();

    images.forEach((image, i) => {
      formData.append("media", image.files);
      formData.append("alt", image.alt);
    });

    const res = await fetch(`/api/gallery/create`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json()
    if(data.message){
      toastSuccess(data.message)
    }
    if(data.error){
      toastError(data.error)
    }
    setLoading(false)

  };

  const changeHandler = (e) => {
    let files = [...e.target.files].map((img) => {
      return {
        files: img,
      };
    });
    setImages(files);
  };
  const handleClose = (e) => {
    const target = e.target;
    if (
      target.id == "close" ||
      target.nodeName == "svg" ||
      target.nodeName == "path"
    ) {
      setImagePreview(null);
    }
  };
  const changeAltHandler = (e, index) => {
    const value = e.target.value;

    setImages(
      images.map((image, imgI) => {
        if (imgI == index) {
          return { ...image, alt: value };
        }
        return image;
      })
    );
  };

  return (
    <>
      <Head>
        <title>Create blog</title>
      </Head>
      <Layout>
        <section className="">
          <ImageUpload 
          onChange={changeHandler}
          />

          <button
            className={`bg-blue px-10 py-1  flex-center text-white`}
            type="button"
            onClick={submitHandler}
          >
            {isLoading ? <div className="loader"></div> : "Изпрати"}
          </button>
        </section>
        <article className="flex flex-wrap p-10 gap-x-10">
          {images.map((data, i) => {
            return (
              <div key={data.name}>
                <div
                  className="relative cursor-pointer w-96 h-96"
                  onClick={() => setImagePreview(data.files)}
                >
                  <Image
                    alt="none"
                    fill={true}
                    src={URL.createObjectURL(data.files)}
                    className="object-contain"
                  />
                </div>

                <label
                  htmlFor={`message-${i}`}
                  class="block mb-2 text-sm font-medium text-[#111827] dark:text-white"
                >
                  Описание
                </label>
                <textarea
                  id={`message-${i}`}
                  rows="4"
                  class="block p-2.5 w-full text-sm text-[#111827] bg-[#f9fafb] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => changeAltHandler(e, i)}
                ></textarea>
              </div>
            );
          })}
        </article>

        {imagePreview && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-dark-50/50 z-[9999]">
            <div
              class="relative h-screen w-screen"
              id="close"
              onClick={handleClose}
            >
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                {/* <Image
                  alt="none"
                  fill={true}
                  src={URL.createObjectURL(imagePreview)}
                  className="object-contain"
                /> */}
                <div className="relative mt-40 bg-white/10">
                  <div
                    className="absolute top-0 right-0 text-4xl text-secondary "
                    id="close"
                    onClick={handleClose}
                  >
                    <HiX />
                  </div>

                  <ZoomImage image={URL.createObjectURL(imagePreview)} />
                </div>
              </div>
            </div>
          </div>
        )}
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
