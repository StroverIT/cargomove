import React from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

// Components
import ImageUpload from "../../form/ImageUpload";
import Input from "../../form/Input";
import TextArea from "../../form/TextArea";

// This is the blog
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

// Utils
import { handler } from "../../../utils/forms";

export default function Form({
  blogValues,
  setBlogValues,
  inputData,
  setInputData,
  setImagePreview = () =>{}
}) {
  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
        setInputData((prev) => ({ ...prev, media: file }));
        setImagePreview(file)
    }
  };

  return (
    <>
      <div class="grid  gap-x-10 items-center justify-center lg:grid-cols-2">
        <div>
          <ImageUpload onChange={changeHandler} multiple={false} />
        </div>
        <div class="mt-10">
          <Input
            id="imageAlt"
            val={inputData.imageAlt}
            placeholder="Meta-Описание на снимката"
            iconType="title"
            onChange={(e) => handler(e, setInputData)}
          />
        </div>
      </div>
      <Input
        id="metaTitle"
        val={inputData.metaTitle}
        placeholder="Meta-Заглавие"
        iconType="title"
        onChange={(e) => handler(e, setInputData)}
      />
      <TextArea
        data={inputData}
        setData={setInputData}
        name="metaDescription"
        holder="Мета Описание"
      />

      <Input
        id="title"
        placeholder="Заглавие"
        iconType="title"
        val={inputData.title}
        onChange={(e) => handler(e, setInputData)}
      />

      {/* This is the blog data */}
      <ReactQuill theme="snow" value={blogValues} onChange={setBlogValues} />
    </>
  );
}
