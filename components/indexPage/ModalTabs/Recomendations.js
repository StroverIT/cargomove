import React from "react";

export default function Recomendations({handler, recomendedName}) {
  return (
    <div>
      <h3 className="mb-6 ">Кой ви препоръча?</h3>
      <label className="text-sm">Две имена:</label>
      <input
        name="recomendedName"
        type="text"
        className="w-full px-2 py-5 text-sm text-black border rounded-lg h-7 placeholder:text-gray-500 text-dark "
        placeholder="Иван Георгиев"
        value={recomendedName}
        onChange={handler}
      />
    </div>
  );
}
