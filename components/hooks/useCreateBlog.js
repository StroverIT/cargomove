import React, { useState } from "react";
import { toastError, toastSuccess } from "../../libs/Notifications";

export default function useCreateBlog({ route, blogDataDB, id}) {
  const [blogValues, setBlogValues] = useState(
    blogDataDB?.blogData?.html || ""
  );
  const [inputData, setInputData] = useState({
    title: blogDataDB?.title || "",
    media: null,
    imageAlt: blogDataDB?.imageData?.alt || "",
    metaTitle: blogDataDB?.meta?.title || "",
    metaDescription: blogDataDB?.meta?.description || "",
  });
  const [isLoading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);

    const formData = new FormData();

    // Formating data
    const newString = blogValues
      .replace(`<ol>`, `<ol class="list-decimal">`)
      .replace("<ul>", `<ul class="list-disc">`)
      .replace("<h1>", `<h1 class="text-2xl">`)
      .replace("<h2>", `<h2 class="text-xl">`)
      .replace("<h3>", `<h3 class="text-lg">`);

    formData.append("blogData", newString);
    formData.append("blogId", id )
    Object.keys(inputData).forEach((key) =>
      formData.append(key, inputData[key])
    );

    // Fetching data
    const res = await fetch(`/api/blog/${route}`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    // Notifications
    if (data.message) {
      toastSuccess(data.message);
    }
    if (data.error) {
      toastError(data.error);
    }

    setLoading(false);
  };
  return {
    blogValues,
    setBlogValues,
    inputData,
    setInputData,
    isLoading,
    submitHandler,
  };
}
