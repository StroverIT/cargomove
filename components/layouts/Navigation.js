import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
import { BsTelephoneForward } from "react-icons/bs";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full text-white z-50">
      {/* <section className="bg-white w-full h-10 text-dark">
        <div className="container flex-center gap-x-10 h-full">
          <div className="flex-center">
            <div>
              <BsTelephoneForward />
            </div>
            <div className="pl-1">+359 89 506 3670</div>
          </div>
          <div className="flex-center gap-x-2">
            <div className="text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=100087968948910"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="text-xl">
              <a
                href="https://www.instagram.com/movexbulgaria/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section className="container flex justify-between">
        <div>Логото</div>
        <section className="flex items-center justify-center gap-x-5">
          {/* <div>
            <Hamburger toggle={setMenuOpen} toggled={menuOpen} size={20} />
          </div> */}
          <section className="">
            <ul className="flex items-center justify-center gap-x-10 text-xl">
              <li>Начало</li>
              <li>Услуги</li>

              <li>Контакти</li>
              <li>За нас</li>
            </ul>
          </section>
        </section>
      </section>
    </nav>
  );
}
