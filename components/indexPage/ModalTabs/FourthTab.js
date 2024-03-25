import React from "react";

export default function FourthTab({ isOurServiceUsed, handlerWithName }) {
  return (
    <div>
      <h3 class="mb-7">Премествали ли сте се с CargoMove преди?</h3>
      <div className="flex flex-wrap text-white gap-x-10 gap-y-4">
        <button
          onClick={() => handlerWithName("isOurServiceUsed", "yes")}
          type="button"
          className={`flex items-center px-8 py-2 font-semibold uppercase rounded-lg lg:text-lg ${
            isOurServiceUsed == null
              ? "bg-green/50"
              : isOurServiceUsed === "yes"
              ? "bg-green"
              : "bg-green/50"
          }`}
        >
          Да
        </button>
        <button
          onClick={() => handlerWithName("isOurServiceUsed", "no")}
          type="button"
          className={`flex items-center px-8 py-2 font-semibold uppercase rounded-lg lg:text-lg ${
            isOurServiceUsed == null
              ? "bg-secondary/50"
              : isOurServiceUsed === "no"
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
