import React, { useState } from "react";

import DropDown from "../../../components/generic/DropDownWithSelection";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import bg from "date-fns/locale/bg";

registerLocale("bg", bg);

const options = [
  "едностанен",
  "двустаен",
  "тристаен",
  "многостаен",
  "къща",
  "офис",
  "мезонет"
];
export default function SecondTab() {
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelection] = useState(options[0]);
  return (
    <div>
        <h3 className="mb-8">Започнете безпроблемното си движение. <br/>Получете безплатна оферта за минути!</h3>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <div className="flex flex-col">
            <label className="mb-4 text-sm" htmlFor="date">
              Дата на местене
            </label>
            <DatePicker
              name="date"
              className="h-full p-2 py-2 mr-4 border border-gray-500 rounded-lg"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              locale="bg"
            />
          </div>
          <div>
            <h2 className="pb-4 text-sm" name="dropdown">
              Размер на мястото
            </h2>
            <DropDown
              className="border-gray-500"
              name="dropdown"
              options={options}
              selected={selected}
              setSelection={setSelection}
            />
          </div>
        </div>
    </div>
  );
}
