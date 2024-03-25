import React from "react";
import { usePlacesWidget } from "react-google-autocomplete";

const options = {
  types: ["address", "geocode", "establishment"],
  componentRestrictions: {country: 'bg'}

};

export default function FirstTab({ inputs, handler, handlerWithName }) {
  const { ref } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACES_API_KEY,
    onPlaceSelected: (place) => {
      handlerWithName("movingFrom", place.formatted_address);
    },
  });
  const { ref: ref2 } = usePlacesWidget({
    language: "bg",

    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACES_API_KEY,
    onPlaceSelected: (place) =>
      handlerWithName("movingTo", place.formatted_address),
    options,
  });
  return (
    <>
      <h3 className="mb-4">
        Вземете своята оферта - тя включва всичко и винаги е гарантирана
      </h3>
      <div className="flex flex-wrap gap-x-10 gap-y-4">
        <div>
          <label className="text-sm">Адрес от:</label>
          <input
            name="movingFrom"
            type="text"
            className="w-full px-2 py-5 text-sm text-black border rounded-lg h-7 placeholder:text-gray-500 text-dark "
            placeholder="От"
            value={inputs.movingFrom}
            onChange={handler}
            ref={ref}
          />
        </div>
        <div>
          <label className="text-sm">За адрес:</label>
          <input
            name="movingTo"
            ref={ref2}
            type="text"
            className="w-full px-2 py-5 text-sm text-black border rounded-lg h-7 placeholder:text-gray-500 text-dark"
            placeholder="До"
            value={inputs.movingTo}
            onChange={handler}
          />
        </div>
      </div>
    </>
  );
}
