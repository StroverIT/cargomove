import React, { useEffect, useRef, useState } from "react";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaViber } from "react-icons/fa";
import InputIcons from "../form/Icons";

import Input from "../form/Input";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { toastSuccess, toastError } from "../../libs/Notifications";
import sendMesage from "../../fetches/sendingMessage";
import Script from "next/script";

import ReCAPTCHA from "react-google-recaptcha";
import { handler } from "../../utils/forms";
import { BsWhatsapp } from "react-icons/bs";
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
  mx = "3xl:mx-96",
}) {
  const [inputs, setInputs] = useState(inputsInit);

  const [isLoading, setLoading] = useState(false);
  const [box, boxView] = useInView();
  const boxAnim = useAnimation();

 
  const recaptchaRef = useRef(null);
  // border-pink
  // bg-pink-50
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   recaptchaRef.current.execute();
  // };
  const submitHandler = async (e) => {

    e.preventDefault()
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    // if (!captchaCode) {
    //   return;
    // }
    try {
      // const response = await fetch("/api/register", {
      //   method: "POST",
      //   body: JSON.stringify({ captcha: captchaCode }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
        // If the response is ok than show the success alert
        console.log("Email registered successfully");
        setLoading(true);
        // Execute the reCAPTCHA when the form is submitted

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
    
    } catch (error) {
      console.log(error?.message || "Something went wrong");
    } 
  };
  useEffect(() => {
    if (boxView) boxAnim.start("animate");
    if (!boxView) boxAnim.start("initial");
  }, [boxView]);

  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        id="my-script"
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      ></Script> */}
      <motion.section
        ref={box}
        animate={boxAnim}
        className={`flex-center border-8 ${color} max-3xl:container  border border-l-8 ${mx} shadow-lg`}
        id="contactUs"
      >
        <section
          className={`lg:grid lg:grid-cols-2 py-14 lg:py-20  w-full px-5 xl:px-20  bg-white-20`}
        >
          <section className="">
            <h3>
              <span
                className={`border-b-4 ${color} pb-1 text-2xl font-semibold rounded-sm `}
              >
                Свържи се с нас!
              </span>
            </h3>

            <form
              action=""
              className="flex flex-col mt-10 "
              onSubmit={submitHandler}
            >
              {/* <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onReCAPTCHAChange}
              /> */}
              <Input
                placeholder="Вашето име"
                id="name"
                val={inputs.name}
                onChange={(e)=> handler(e, setInputs) }
                iconType="name"
              />
              <Input
                placeholder="Вашият и-мейл"
                id="email"
                val={inputs.email}
                onChange={(e)=> handler(e, setInputs) }
                iconType="email"
              />
              <div className="relative lg:mb-3">
                <div className="absolute left-0 z-10 top-2.5 text-lg">
                  <InputIcons iconType="message" />
                </div>
                {/* className="w-full h-2 px-4 pt-2 bg-transparent border-b border-white scrollbar scrollbar-thumb-pink-100 scrollbar-track-pink-200 focus:outline-none" */}
                <textarea
                  className={`w-full h-24 px-6 py-2 leading-tight placeholder-transparent bg-transparent border-b appearance-none placeholder:pl-10 peer  focus:outline-none focus:shadow-outline scrollbar ${scrollBarThumb} ${scrollBarTrack}`}
                  id="message"
                  placeholder="Вашият коментар"
                  name="message"
                  value={inputs.message}
                  onChange={(e)=> handler(e, setInputs) }
                />
                <label
                  className="absolute  z-10 -top-3.5 left-0 block mb-2 text-sm  text-gray-darker peer-placeholder-shown:text-base peer-placeholder-shown:px-6  peer-placeholder-shown:top-1.5 transition-all duration-300"
                  htmlFor="comment"
                >
                  Вашият коментар
                </label>
              </div>
              <button
                className={`${btnColor} px-10 py-1  flex-center text-white`}
                type="submit"
              >
                {isLoading ? <div className="loader"></div> : "Изпрати"}
              </button>
            </form>
          </section>
          <section className="flex flex-col mx-auto space-y-7 mt-7 focus:border-transparent">
            <div className="flex items-center ">
              <a href="mailto:cargomovebg@gmail.com">
                <section className="flex-center">
                  <div className="text-3xl">
                    <HiOutlineMail />
                  </div>
                  <div className="pl-1 text-lg font-semibold max-sm:text-sm">cargomovebg@gmail.com</div>
                </section>
              </a>
            </div>
            <div className="flex items-center">
              <a href="tel:+359895063670">
                <section className="flex-center">
                  <div className="text-2xl ">
                    <FiPhoneCall />
                  </div>
                  <div className="pl-1 text-lg font-semibold max-sm:text-sm">{number}</div>
                </section>
              </a>
            </div>
            <div className="flex items-center text-[#7f6bf4] font-semibold">
              <a href="viber://chat?number=%2B359895063670">
                <section className="flex-center">
                  <div className="text-3xl ">
                    <FaViber />
                  </div>
                  <div className="pl-1 text-lg">Viber</div>
                </section>
              </a>
            </div>
            <div className="flex items-center text-[#25d366] font-semibold">
              <a href="https://api.whatsapp.com/send?phone=359895063670">
                <section className="flex-center">
                  <div className="text-3xl ">
                    <BsWhatsapp />
                  </div>
                  <div className="pl-1 text-lg ">Whatsapp</div>
                </section>
              </a>
            </div>
          </section>
        </section>
      </motion.section>
    </>
  );
}
