import React from "react";

export default function FifthTabWithNoUsedBefore({
    recomended,
  handlerWithName,
}) {
  return (
    <div>
      <h3 class="mb-7">Някой препоръча ли ви CargoMove?</h3>
      <div className="flex text-white gap-x-10">
        <button
          onClick={() => handlerWithName("recomended", "yes")}
          type="button"
          className={`flex items-center px-8 py-2 font-semibold uppercase rounded-lg lg:text-lg ${
            recomended == null
              ? "bg-green/50"
              : recomended === "yes"
              ? "bg-green"
              : "bg-green/50"
          }`}
        >
          Да
        </button>
        <button
          onClick={() => handlerWithName("recomended", "no")}
          type="button"
          className={`flex items-center px-8 py-2 font-semibold uppercase rounded-lg lg:text-lg ${
            recomended == null
              ? "bg-secondary/50"
              : recomended === "no"
              ? "bg-secondary"
              : "bg-secondary/50"
          }
        `}
        >
          Не
        </button>
      </div>
    </div>
  );
}
