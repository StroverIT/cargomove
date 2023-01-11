import Head from "next/head";
import React, { useState } from "react";
import { FaViber } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import ContactWithBox from "../components/indexPage/ContactWithBox";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Movex - Контакти - Свържи се с нас </title>
        <meta
          name="description"
          content="Movex - Контакти с нас. Винаги готови да отговорим на вашите въпроси. Може да се свържете с нас чрез телефон, и-мейл, viber, messenger и instagram "
        />
      </Head>
      <main className="container mt-40 rounded-md shadow-lg">
        <div className="xl:grid grid-cols-[27%75%] container py-10">
          <div className="pl-5 border-r border-gray-600">
            <h1 className="pb-4 text-2xl font-semibold">Контакти</h1>
            <ul className="pr-4">
              <li className="flex items-center py-4 gap-x-2">
                <div className="text-2xl text-blue">
                  <FiPhoneCall />
                </div>
                <div className="pl-2">
                  <h2 className="font-medium">Телефон</h2>
                  <p>+359 89 506 3670</p>
                </div>
              </li>
              <li className="flex items-center py-4 border-gray-600 gap-x-2 border-y">
                <div className="text-2xl text-blue">
                  <FaViber />
                </div>
                <div className="pl-2">
                  <h2 className="font-medium">Viber</h2>
                  <p>+359 89 506 3670</p>
                </div>
              </li>
              <li className="flex items-center py-4 gap-x-2">
                <div className="text-3xl text-blue">
                  <HiOutlineMail />
                </div>
                <div className="pl-2">
                  <h2 className="font-medium">И-мейл</h2>
                  <p>movexbulgaria@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="max-xl:mt-4 xl:px-10">
            <h1 className="pb-4 pl-5 text-2xl font-semibold">Пишете ни</h1>
            <ContactWithBox btnColor="bg-blue" />
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
