import React from "react";

export default function DropDownWithSelection({
  selection,
  setSelection,
  options,
  name,
  className = "border-gray-300",
}) {
  return (
    <select
      name={name}
      id="countries"
      class={`${className} bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      onChange={(e) => {
        const val = e.target.value;
        setSelection(val);
      }}
      value={selection}
    >
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

{
  /* <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label> */
}
