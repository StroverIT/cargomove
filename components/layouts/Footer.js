import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiGlobalLine } from "react-icons/ri";
import newsletterSend from "../../fetches/newsletterSend";
import { toastError, toastSuccess } from "../../libs/Notifications";
export default function Footer() {
  const router = useRouter();

  const [input, setInputs] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [colors, setColors] = useState({
    bgColor: "",
    button: "",
    markers: "",
    copyRight: "",
  });

  const handler = (e) => {
    setInputs(e.target.value);
  };
  const newsLetterHandler = async () => {
    setLoading(true);

    const data = await newsletterSend({ email: input });
    if (data.message) {
      setInputs("");
      toastSuccess(data.message);
    }
    if (data.error) {
      toastError(data.error);
    }

    setLoading(false);
  };

  return (
    <footer className={`bg-dark   pt-2 z-10 w-full`}>
      <section className={` pb-10`}>
        <section className="flex flex-col-reverse xl:grid xl:grid-cols-[30%70%]  container text-white gap-x-28">
          <section>
            <h5 className="mt-5 mb-3 font-semibold uppercase ">
              Абонирай се за нашите оферти
            </h5>
            <input
              type="text"
              className="w-full px-2 py-5 text-sm text-black border-none rounded-sm h-7 placeholder:text-dark text-dark"
              placeholder="Email"
              value={input}
              onChange={handler}
            />
            <div className="mt-2 flex-center">
              <button
                className={`bg-orange w-full py-1 rounded-sm flex-center`}
                onClick={newsLetterHandler}
              >
                {isLoading ? <div className="loader"></div> : "Абонирай ме!"}
              </button>
            </div>
            <h5 className="mt-8 font-semibold uppercase">Социални мрежи</h5>
            <div className="flex mt-2 gap-x-5">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="transition-transform cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                  <div className="text-2xl">
                    <BsFacebook />
                  </div>
                  {/* <div className="pl-2">Facebook</div> */}
                </div>
              </a>
              <a
                href="https://www.instagram.com/movexbulgaria/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="transition-all cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                  <div className="text-2xl">
                    <BsInstagram />
                  </div>
                  {/* <div className="pl-2">Instagram</div> */}
                </div>
              </a>
            </div>
          </section>

          <section className="grid-cols-[20%40%40%] justify-center xl:grid ">
            <section>
              <h5 className="mt-5 text-lg font-semibold">Услуги</h5>
              <ul className={`list-disc  ${colors.markers} leading-8 ml-4`}>
                <li className="cursor-default">
                  <a href="#pricing">
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Транспортни
                    </span>
                  </a>
                </li>
                <li className="cursor-default">
                  <a href="#pricing">
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Хамалски
                    </span>
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h5 className="mt-5 text-lg font-semibold">За Movex</h5>
              <ul className={`list-disc ${colors.markers} pb-1 leading-8 ml-4`}>
                <li className="cursor-default">
                  <Link href="/aboutUs" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      За нас
                    </span>
                  </Link>
                </li>

                <li className="cursor-default">
                  <Link href="/terms-and-conditions" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Условия за ползване
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/privacy-policy" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Защита на лични данни
                    </span>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="">
              <div>
                <h5 className="mt-5 text-lg font-semibold text-left">
                  Контакти
                </h5>
                <div className="ml-1 border-l border-border">
                  <ul className="pl-4 leading-8">
                    <li className="flex items-center">
                      <FiPhoneCall />
                      <span className="pl-1">+359 89 506 3670</span>
                    </li>
                    <li className="flex items-center">
                      <HiOutlineMail />
                      <span className="pl-1">movexbulgaria@gmail.com</span>
                    </li>
                    <li className="flex items-center">
                      <RiGlobalLine /> <span className="pl-1">movex.bg</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
      <section
        className={`bg-gray-250 flex-center py-5 text-white flex-wrap max-sm:flex-col relative flex-col`}
      >
        <div className="flex sm:pl-1">
          <div className="flex-center">
            <AiOutlineCopyright />
            2022 Movex.
          </div>
          <div className="pl-1">Всички права запазени.</div>
        </div>
        <div className="text-sm text-center lg:absolute right-10">
          Изработен от -{" "}
          <a
            className="underline"
            href="https://www.strover.bg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strover
          </a>
        </div>
      </section>
    </footer>
  );
}
