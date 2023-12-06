import React, { useEffect, useState } from "react";

import { connectMongo } from "../db/connectDb";
import GalleryModel from "../db/models/Gallery";
import { getSession } from "next-auth/react";
import User from "../db/models/User";
import Head from "next/head";
import { Reorder } from "framer-motion";
import Item from "../components/admin/gallery/view/components/Items";
import { useRouter } from "next/router";
import Image from "next/image";
import { HiX } from "react-icons/hi";

export default function Gallery({ gallery, user }) {
  const router = useRouter();

  const [items, setItems] = useState(gallery);

  const refreshData = () => {
    router.replace(
      {
        pathname: router.asPath,
      },
      undefined,
      { scroll: false }
    );
  };

  useEffect(() => {
    setItems(gallery);
  }, [gallery]);

  const deleteImageHandler = async (_id) => {
    if (confirm("Желаете ли да изтриете снимката?")) {
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
    }
  };
  const reoderImages = async () => {
    if (confirm("Желаете ли да смените местата на снимката?")) {
      const filterOnlyIds = items.map((item) => item._id);

      const res = await fetch("/api/gallery/changeOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: filterOnlyIds,
        }),
      });

      const data = await res.json();

      if (data.message) {
        refreshData();
      }
    }
  };
  const setReoder = (data) => {
    if (user?.role == "admin") {
      setItems(data);
    }
  };
  return (
    <>
      <Head>
        <title>Галерия - Карго Муув</title>

        <meta
          name="description"
          content="Разгледайте нашата галерия с изображения, посветена на професионалния транспорт и услугите за преместване. Вижте нашите най-нови проекти, фотографии на превозни средства и успешни миграции. Доверете се на нашите експерти, когато става въпрос за безпроблемно и сигурно преместване на вашите стоки и имущество."
        />
      </Head>
      <section className="container mt-40 mb-10">
        <h3 className="text-3xl">Нашата галерия</h3>
        {user?.role == "admin" && (
          <div className="fixed top-[160px] right-12 z-50 ">
            <button
              className="px-10 py-2 text-white rounded-lg bg-primary-500"
              onClick={reoderImages}
            >
              Смени местата на снимките
            </button>
          </div>
        )}
        {user?.role == "admin" && (
            <Reorder.Group
              axis="y"
              onReorder={setReoder}
              values={items}
              className="flex flex-wrap items-center justify-center mt-10 gap-x-10"
            >
              {items?.map((image, i) => {
                return (
                  <Item
                    image={image}
                    key={image._id}
                    user={user}
                    i={i}
                    deleteImageHandler={deleteImageHandler}
                  />
                );
              })}
            </Reorder.Group>
        )}
        {user?.role != "admin" && (
            <section
              axis="y"
              onReorder={setReoder}
              values={items}
              className="flex flex-wrap items-center justify-center mt-10 gap-x-10"
            >
              {items?.map((image, i) => {
                return (
                  <article className="relative flex flex-col items-center justify-center h-[300px] w-[300px]"
                  
                  key={image._id}
                  
                  >
                  <Image
                    src={image.imageUrl}
                    alt={image.alt}
                    fill={true}
                    className="object-contain"
                  />
                 
                </article>
                );
              })}
          </section>
        )}
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  await connectMongo();

  const session = await getSession({ req: context.req });
  const gallery = await GalleryModel.find({});
  const user = await User.findOne({ email: session?.user?.email });

  const sortedGallery = gallery.sort((item1, item2) => {
    if (item1.order == undefined) {
      return -1;
    }
    return item1.order - item2.order;
  });
  return {
    props: {
      gallery: JSON.parse(JSON.stringify(sortedGallery)),
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
