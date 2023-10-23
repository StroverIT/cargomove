import React from 'react'
import InputIcons from './Icons'
import { handler } from '../../utils/forms'

export default function TextArea({data, setData, name, holder}) {
  return (
    <div className="relative lg:mb-3">
    <div className="absolute left-0 z-10 top-2.5 text-lg">
      <InputIcons iconType="message" />
    </div>
    {/* className="w-full h-2 px-4 pt-2 bg-transparent border-b border-white scrollbar scrollbar-thumb-pink-100 scrollbar-track-pink-200 focus:outline-none" */}
    <textarea
      className={`w-full h-24 px-6 py-2 leading-tight placeholder-transparent bg-transparent border-b appearance-none placeholder:pl-10 peer  focus:outline-none focus:shadow-outline scrollbar scrollbar-thumb-primaryBlue-150 scrollbar-track-primaryBlue-500`}
      id={name}
      placeholder="Вашият коментар"
      name={name}
      value={data[name]}
      onChange={(e)=> handler(e, setData) }
    />
    <label
      className="absolute  z-10 -top-3.5 left-0 block mb-2 text-sm  text-gray-darker peer-placeholder-shown:text-base peer-placeholder-shown:px-6  peer-placeholder-shown:top-1.5 transition-all duration-300"
      htmlFor={name}
    >
      {holder}
    </label>
  </div>
  )
}
