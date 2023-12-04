import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="max-md:hidden fixed bottom-[200px] right-0 bg-dark-50/20 flex flex-col gap-5 p-2 text-2xl">
      <Icon
        icon={<FaFacebookF />}
        url={"https://www.facebook.com/cargomovebg"}
      />

      <Icon
        icon={<FaInstagram />}
        url={"https://www.instagram.com/cargomoveds"}
      />
    </div>
  );
}

function Icon({ icon, url }) {
  return (
    <Link href={url} target="_blank" className="transition-transform hover:scale-110">
      {icon}
    </Link>
  );
}
