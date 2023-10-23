import React from "react";

export default function ImageUpload({holder="Upload File", onChange, name="image", multiple= true}) {
  return (
    <>
      <label
        class="block mb-2 text-sm font-medium text-[#111827] dark:text-white"
        for="file_input"
      >
        {holder}
      </label>
      <input
        class="block w-full text-sm text-[#111827] border border-[#d1d5db] rounded-lg cursor-pointer bg-[#f9fafb] dark:text-[#9ca3af] focus:outline-none dark:bg-[#374151] dark:border-[#4b5563] dark:placeholder-[#9ca3af]"
        id="file_input"
        name={name}
        type="file"
        multiple={multiple}
        onChange={onChange}
      />
    </>
  );
}
