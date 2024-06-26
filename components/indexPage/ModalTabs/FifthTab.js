import React from "react";

export default function FifthTab({ inputs, handler }) {
  return (
    <div>
      <h2>
        Има ли нещо друго за вашето преместване, което смятате, че трябва да
        знаем?
      </h2>
      <textarea
        className="w-full p-4 mt-2 border border-gray-500 rounded-xl"
        placeholder=""
        name="addressDetails"
        value={inputs.addressDetails}
        onChange={handler}
      ></textarea>
    </div>
  );
}
