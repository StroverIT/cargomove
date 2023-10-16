import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Item({ text, isLast, link }) {
  const pathname = usePathname();

  const [isActive, setActive] = useState(false);

  const setOff = () => {
    if (pathname == link) return;
    setActive(false);
  };

  useEffect(() => {
    if (pathname == link) setActive(true);
    else setActive(false);
  }, [pathname]);

  return (
    <Link href={link}>
      <div
        className={`relative cursor-pointer pr-10 ${isLast && "-mb-3"}`}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setOff()}
      >
        <div className="bg-[#cbd5e1] h-[1px] absolute w-6 top-1/2 -translate-y-1/2 -left-4">
          {isActive ? (
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full -right-1 bg-[#0e7490]"></div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="ml-6">{text}</div>
      </div>
    </Link>
  );
}
export default Item;
