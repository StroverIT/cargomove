import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";
export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-orange w-full">
      <section className="flex  justify-between container">
        <div>Логото</div>
        <section className="flex justify-center items-center gap-x-5">
          <div>
            <Hamburger toggle={setMenuOpen} toggled={menuOpen} size={20} />
          </div>
          <section className="flex justify-center items-center gap-x-2">
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
          </section>
        </section>
      </section>
    </nav>
  );
}
