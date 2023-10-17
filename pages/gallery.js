import React from "react";

import { connectMongo } from "../db/connectDb";
import GalleryModel from "../db/models/Gallery";
import Image from "next/image";

export default function Gallery({ gallery }) {
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
              <Image src={image.imageUrl} alt={image.alt} fill={true} className="object-contain" />
            </article>
          );
        })}
      </section>
    </section>
  );
}

export async function getServerSideProps(context) {
  await connectMongo();

  const gallery = await GalleryModel.find({});

  return {
    props: { gallery: JSON.parse(JSON.stringify(gallery)) },
  };
}
