import React from "react";
import Title from "../Title";
import { blogData } from "../../components/data/blog";
import BlogSwiper from "../swiper/BlogSwiper";

const OurBlog = ({blogDataDB}) => {
  return (
    <section className="my-20 ">
      <div className="flex-col flex-center">
        <Title title="Нашият блог" size="text-4xl" />
      </div>
      <section className="container mt-10 ">
        <BlogSwiper data={blogData} blogDataDB={blogDataDB}/>
      </section>
    </section>
  );
};

export default OurBlog;
