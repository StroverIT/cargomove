import React from "react";

export default function ThirdTab({ inputs, handler }) {
  return (
    <div>
      <h3 className="mb-2 text-center max-sm:text-sm">На кого да изпратим офертата?</h3>
      <div class="flex-center">
          <h4 className="max-w-2xl text-sm text-center mb-7 max-sm:text-xs">
            Ние приемаме сериозно поверителността и няма да споделяме вашата
            информация. Имаме нужда от него, за да ви изпратим оферта с фиксирана
            ставка.
          </h4>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-4">
        <div>
          <label className="text-sm">Име:</label>
          <input
            name="name"
            type="text"
            className="w-full px-2 py-5 text-sm text-black border rounded-lg h-7 placeholder:text-gray-500 text-dark"
            placeholder="Иван Петров"
            value={inputs.name}
            onChange={handler}
          />
        </div>
        <div>
          <label className="text-sm">И-мейл:</label>
          <input
            name="email"
            type="text"
            className="w-full px-2 py-5 text-sm text-black border rounded-lg h-7 placeholder:text-gray-500 text-dark"
            placeholder="ivan@abv.bg"
            value={inputs.email}
            onChange={handler}
          />
        </div>
        <div>
          <label className="text-sm">Телефон:</label>
          <input
            name="telephone"
            type="text"
            className="w-full px-2 py-5 text-sm text-black border rounded-lg h-7 placeholder:text-gray-500 text-dark"
            placeholder="+359 87 634 7122"
            value={inputs.telephone}
            onChange={handler}
          />
        </div>
      </div>
    </div>
  );
}
