import React, { useEffect, useState } from "react";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import InputIcons from "../form/Icons";

import Input from "../form/Input";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { toastSuccess, toastError } from "../../libs/Notifications";
import sendMesage from "../../fetches/sendingMessage";

const inputsInit = {
  name: "",
  email: "",
  message: "",
};
export default function ContactUs({
  color,
  bgColor,
  btnColor,
  number,
  scrollBarThumb,
  scrollBarTrack,
  typePage,
}) {
  const [inputs, setInputs] = useState(inputsInit);

  const [isLoading, setLoading] = useState(false);
  const [box, boxView] = useInView();
  const boxAnim = useAnimation();

  const handler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // border-pink
  // bg-pink-50
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Valdiator
    if (!inputs.name || !inputs.email || !inputs.message) {
      setLoading(false);
      return toastError("Моля попълнете всички полета!");
    }

    const data = await sendMesage(inputs);
    if (data.message) {
      setInputs(inputsInit);
      toastSuccess(data.message);
    }
    if (data.error) {
      toastError(data.error);
    }

    setLoading(false);
  };
  useEffect(() => {
    if (boxView) boxAnim.start("animate");
    if (!boxView) boxAnim.start("initial");
  }, [boxView]);

  return (
    <motion.section
      ref={box}
      animate={boxAnim}
      className={`flex-center border-8 ${color} max-3xl:container  border border-l-8 3xl:mx-96 shadow-lg`}
      id="contactUs"
    >
      <section
        className={`grid lg:grid-cols-2 py-14 lg:py-32  w-full px-5 xl:px-28  bg-white-20`}
      >
        <section className="">
          <h4>
            <span
              className={`border-b-4 ${color} pb-1 text-2xl font-semibold rounded-sm `}
            >
              Свържи се с нас!
            </span>
          </h4>
          <p className="pt-3 lg:max-w-[15rem]">
            Очакваме с нетърпение да се свържем с вас!
          </p>
          <form
            action=""
            className="flex flex-col mt-12 "
            onSubmit={submitHandler}
          >
            <Input
              placeholder="Вашето име"
              id="name"
              val={inputs.name}
              onChange={handler}
              iconType="name"
            />
            <Input
              placeholder="Вашият и-мейл"
              id="email"
              val={inputs.email}
              onChange={handler}
              iconType="email"
            />
            <div className="relative lg:mb-5">
              <div className="absolute left-0 z-10 top-2.5 text-lg">
                <InputIcons iconType="message" />
              </div>
              {/* className="w-full h-2 px-4 pt-2 bg-transparent border-b border-white scrollbar scrollbar-thumb-pink-100 scrollbar-track-pink-200 focus:outline-none" */}

              <textarea
                className={`w-full h-10 px-6 py-2 leading-tight placeholder-transparent bg-transparent border-b appearance-none placeholder:pl-10 peer text-gray-darker focus:outline-none focus:shadow-outline scrollbar ${scrollBarThumb} ${scrollBarTrack}`}
                id="message"
                placeholder="Вашият коментар"
                name="message"
                value={inputs.message}
                onChange={handler}
              />
              <label
                className="absolute   -top-3.5 left-0 block mb-2 text-sm  text-gray-darker peer-placeholder-shown:text-base peer-placeholder-shown:px-6  peer-placeholder-shown:top-1.5 transition-all duration-300"
                htmlFor="comment"
              >
                Вашият коментар
              </label>
            </div>
            <button
              className={`${btnColor} px-10 py-1 mt-4 flex-center text-white`}
              type="submit"
            >
              {isLoading ? <div className="loader"></div> : "Изпрати"}
            </button>
          </form>
        </section>
        <section className="flex flex-col mx-auto space-y-3 mt-7 focus:border-transparent">
          <div className="flex items-center">
            <div className="text-2xl ">
              <HiOutlineMail />
            </div>
            <div className="pl-1">movexbulgaria@gmail.com</div>
          </div>
          <div className="flex items-center">
            <div className="text-xl ">
              <FiPhoneCall />
            </div>
            <div className="pl-1">{number}</div>
          </div>
        </section>
      </section>
    </motion.section>
  );
}
