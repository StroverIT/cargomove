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
    const formData = new FormData();

    images.forEach((image, i) => {

      formData.append("media", image.files);
      formData.append("alt", image.alt)
    });

    const res = await fetch(`/api/gallery/create`, {
      method: "POST",
      body: formData,
    });
    console.log(res);
  };

  const changeHandler = (e) => {
    let files = [...e.target.files].map(img=> {
      return {
        files: img
      }
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
          <label
            class="block mb-2 text-sm font-medium text-[#111827] dark:text-white"
            for="file_input"
          >
            Upload file
          </label>
          <input
            class="block w-full text-sm text-[#111827] border border-[#d1d5db] rounded-lg cursor-pointer bg-[#f9fafb] dark:text-[#9ca3af] focus:outline-none dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af]"
            id="file_input"
            name="image"
            type="file"
            multiple
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
                <Input
                  placeholder="Описание"
                  id="alt"
                  val={data.alt}
                  onChange={(e)=> changeAltHandler(e, i)}
                  iconType="message"
                />
              </div>
            );
          })}
        </article>

        {imagePreview && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-dark-50/50">
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
