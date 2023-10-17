import React from "react";

export default function Prices({ title, price, per, list, isCustomPrice }) {
  return (
    <article className="flex flex-col justify-between p-10 border rounded-md w-80 border-primary-100 hover:shadow-lg">
      <div>
        <div class="flex-center flex-col text-center">
          <h3 className="mt-2 text-2xl font-medium ">{title}</h3>
          <div className="w-16 h-[1px] bg-primary-100 my-4"></div>
          <p className="mb-2 text-2xl text-primary-100">
            {isCustomPrice ? "Цена по договаряне" : `от ${price} лв./${per}`}
          </p>
        </div>
        <ul className="ml-5 list-disc">
          {list.map((data) => {
            return <li key={data}>{data}</li>;
          })}
        </ul>
      </div>
      <a href="tel:+359895063670" className="py-2 mt-10 text-xl font-semibold text-white rounded-full flex-center bg-primary-100">
      
     Обади се
      
      </a>
    </article>
  );
}
