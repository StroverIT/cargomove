import React, { useState } from "react";

// Icons
import { HiX } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";

// Notifications
import { toastError, toastSuccess } from "../../../libs/Notifications";
import { useRouter } from "next/router";

export default function Dashboard({ blogData, setIsEditMode, isEditMode }) {
  const router = useRouter();

  // Loading States
  const [deleteLoading, setDeleteLoading] = useState(false);

  //  Handlers
  const deleteHandler = async () => {
    setDeleteLoading(true);
    if (confirm("Желаете ли да изтриете блога?")) {
      const res = await fetch("/api/blog/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: blogData._id,
        }),
      });
      const data = await res.json();
      if (data.message) {
        router.push("/blog")
        toastSuccess(data.message);
      }
      if (data.error) {
        toastError(data.error);
      }
    }
    setDeleteLoading(false);
  };

  return (
    <section className="container flex justify-between">
      <article></article>

      <article className="flex gap-10">
        <div
          className={`cursor-pointer flex-center ${
            isEditMode ? "text-secondary" : "text-primary-trans"
          }`}
          onClick={() => setIsEditMode((prev) => !prev)}
        >
          {isEditMode ? (
            <>
              <HiX /> Откажи Редакцията
            </>
          ) : (
            <>
              <AiFillEdit /> Редактирай
            </>
          )}
        </div>

        <div
          className="cursor-pointer flex-center text-secondary"
          onClick={deleteHandler}
        >
          {deleteLoading ? (
            <div className="loader"></div>
          ) : (
            <>
              <HiX /> Изтрий Блога
            </>
          )}
        </div>
      </article>
    </section>
  );
}
