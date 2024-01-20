import { Reorder, useMotionValue } from "framer-motion";
import Image from "next/image";
import React from "react";
import { HiX } from "react-icons/hi";
import useRaisedShadow from "./useRaisedShadow";

export default function Item({ image, user, i, deleteImageHandler}) {

  
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={image} key={image._id} id={image._id} drag style={{ boxShadow }}>
        <article className="relative flex flex-col items-center justify-center h-[300px] w-[300px]">
          <Image
            src={image.imageUrl}
            alt={image.alt}
            fill={true}
            className="object-cover rounded-md"
          />
          {user?.role == "admin" && (
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
        {user?.role == "admin" && (
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
              className="block p-2.5 w-full text-sm text-[#111827] bg-[#f9fafb] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </article>
        )}
    </Reorder.Item>
  );
}
