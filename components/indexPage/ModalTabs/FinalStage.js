import React from "react";

export default function FinalStage({ handlerWithName, bestTimeForContact }) {
  const selected = "bg-secondary text-white";
  const notSelected = "bg-gray-400 text-dark";
  return (
    <div>
      <h3 className="mb-4">
        Кое е най-удобно време в което да се свържем с вас?
      </h3>
      <div className="grid gap-4 md:grid-cols-2 ">
        <button
          onClick={() => handlerWithName("bestTimeForContact", "asap")}
          type="button"
          className={`flex items-center justify-center px-6 py-3 h-full  font-semibold uppercase rounded-lg text-sm  text-center 
          ${bestTimeForContact == "asap" ? selected : notSelected}
        `}
        >
          Възможно най-скоро
        </button>
        <button
          onClick={() => handlerWithName("bestTimeForContact", "8to12")}
          type="button"
          className={`flex flex-col items-center px-8 py-1 font-semibold uppercase rounded-lg text-sm
              ${bestTimeForContact == "8to12" ? selected : notSelected}
            `}
        >
          <div className="font-semibold">Сутринта</div>
          <div className="text-sm font-normal">(08:00 - 12:00)</div>
        </button>
        <button
          onClick={() => handlerWithName("bestTimeForContact", "12to4")}
          type="button"
          className={`flex flex-col items-center px-8 py-1 font-semibold uppercase rounded-lg text-sm
              ${bestTimeForContact == "12to4" ? selected : notSelected}
            `}
        >
          <div className="font-semibold">Следобяд</div>
          <div className="text-sm font-normal">(12:00 - 16:00)</div>
        </button>
        <button
          onClick={() => handlerWithName("bestTimeForContact", "4to8")}
          type="button"
          className={`flex flex-col items-center px-8 py-1 font-semibold uppercase rounded-lg text-sm
              ${bestTimeForContact == "4to8" ? selected : notSelected}
            `}
        >
          <div className="font-semibold">Вечер</div>
          <div className="text-sm font-normal">(16:00 - 20:00)</div>
        </button>
      </div>
    </div>
  );
}
