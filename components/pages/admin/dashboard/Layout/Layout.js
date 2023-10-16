import React from "react";

// Components

import SideMenu from "./SideMenu";

const mainLink = "/admin";
const layoutLink = "/dashboard";

const imageDataList = {
  gallery: {
    className: "h-8 w-8 mr-2",
    url: "image-gallery.png",
    alt: "Няма още",
  },
  blog: {
    className: "h-8 w-8 mr-2",
    url: "blogging.png",

    alt: "Няма още",
  },
};
const sideMenuLinks = [
  // {
  //     name: "Статистики",
  //     link: `${mainLink}${layoutLink}/dashboard`,
  //     submenu: [
  //         {
  //             name: "Анализи",
  //             link: `/analytics`
  //         },
  //         {
  //             name: "Продажби",
  //             link: "/sales"
  //         }
  //     ]
  // },
  {
    name: "Галерия",
    link: `${mainLink}${layoutLink}/gallery/main`,
    icon: "undefined",
    imageData: imageDataList.gallery,
  },
  {
    name: "Блог",
    link: `${mainLink}${layoutLink}/blog`,
    icon: "undefined",
    imageData: imageDataList.blog,
    submenu: [
      {
        name: "Създай",
        link: "/create",
      },
      {
        name: "Редактирай",
        link: "/edit",
      },
    ],
  },
];
const Layout = ({ children }) => {
  return (
    <section className="h-screen mt-36">
      <section className="flex space-x-10 ">
        <SideMenu links={sideMenuLinks} />

        <section className="mt-7">{children}</section>
      </section>
    </section>
  );
};

export default Layout;
