import React, { useEffect, useState } from "react";
import Layout from "../../../../components/pages/admin/dashboard/Layout";
import Head from "next/head";
import Image from "next/image";
import ZoomImage from "../../../../components/ZoomImage";
import { HiX } from "react-icons/hi";

export default function Main() {
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
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

    images.forEach((image,i)=>{
      formData.append("media", image)
    })
    
    const res = await fetch(`/api/gallery/create`, {
      method: "POST",
      body: formData,
    });
    console.log(res);
  };

  const changeHandler = (e) => {
    let files = [...e.target.files];
    setImages(files);
  };
  const handleClose = (e)=>{
    const target = e.target
    if(target.id == "close" || target.nodeName == "svg" || target.nodeName == "path"){
      setImagePreview(null)
    }
  }
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
        <article className="flex flex-wrap gap-x-10">
          {images.map((data) => {
            return (
              <div
                key={data.name}
                className="relative cursor-pointer w-96 h-96"
                onClick={() => setImagePreview(data)}
              >
                <Image
                  alt="none"
                  fill={true}
                  src={URL.createObjectURL(data)}
                  className="object-contain"
                />
              </div>
            );
          })}
        </article>

        {imagePreview && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-dark-50/50" >
            <div class="relative h-screen w-screen" id="close" onClick={handleClose}>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                {/* <Image
                  alt="none"
                  fill={true}
                  src={URL.createObjectURL(imagePreview)}
                  className="object-contain"
                /> */}
                <div className="relative mt-40 bg-white/10" >
              <div className="absolute top-0 right-0 text-4xl text-secondary " id="close" onClick={handleClose}><HiX/></div>

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
