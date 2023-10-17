import React from "react";

import { connectMongo } from "../db/connectDb";
import GalleryModel from "../db/models/Gallery";
import Image from "next/image";
import { getSession } from "next-auth/react";
import User from "../db/models/User";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Gallery({ gallery, user }) {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const deleteImageHandler = async (_id) => {
    const res = await fetch("/api/gallery/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageId: _id,
      }),
    });
    const data = await res.json();

    if (data.message) {
      refreshData();
    }
  };

  return (
    <>
      <Head>
        <title>Галерия - Професионален Транспорт и Услуги за Преместване</title>

        <meta
          name="description"
          content="Разгледайте нашата галерия с изображения, посветена на професионалния транспорт и услугите за преместване. Вижте нашите най-нови проекти, фотографии на превозни средства и успешни миграции. Доверете се на нашите експерти, когато става въпрос за безпроблемно и сигурно преместване на вашите стоки и имущество."
        />
      </Head>
      <section className="container mt-40">
        <h3 className="text-3xl">Нашата галерия</h3>
        <section className="flex flex-wrap mt-10">
          {gallery.map((image, i) => {
            return (
              <article key={image._id}>
                <article className="relative flex flex-col items-center justify-center h-[400px] w-[400px]">
                  <Image
                    src={image.imageUrl}
                    alt={image.alt}
                    fill={true}
                    className="object-contain"
                  />
                  {user.role == "admin" && (
                    <div className="absolute top-0 right-0">
                      <div
                        className="absolute top-0 right-0 text-4xl text-secondary "
                        id="close"
                        onClick={() => deleteImageHandler(image._id)}
                      >
                        <HiX />
                      </div>
                    </div>
                  )}
                </article>
                {user.role == "admin" && (
                  <article>
                    <label
                      htmlFor={`message-${i}`}
                      class="block mb-2 text-sm font-medium text-[#111827] dark:text-white"
                    >
                      Описание
                    </label>
                    <textarea
                      id={`message-${i}`}
                      rows="4"
                      defaultValue={image.alt}
                      class="block p-2.5 w-full text-sm text-[#111827] bg-[#f9fafb] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></textarea>
                  </article>
                )}
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  await connectMongo();

  const session = await getSession({ req: context.req });
  const gallery = await GalleryModel.find({});
  const user = await User.findOne({ email: session.user.email });

  return {
    props: {
      gallery: JSON.parse(JSON.stringify(gallery)),
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
