import React from "react";

import { connectMongo } from "../db/connectDb";
import GalleryModel from "../db/models/Gallery";
import Image from "next/image";
import { getSession } from "next-auth/react";
import User from "../db/models/User";
import { HiX } from "react-icons/hi";
import { useRouter } from "next/router";

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
    <section className="container mt-40">
      <h3 className="text-3xl">Нашата галерия</h3>

      <section className="flex flex-wrap mt-10">
        {gallery.map((image) => {
          return (
            <article
              key={image._id}
              className="relative flex flex-col items-center justify-center h-[400px] w-[400px]"
            >
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
          );
        })}
      </section>
    </section>
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
