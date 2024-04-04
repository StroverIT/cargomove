import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { TbBus } from "react-icons/tb";

export default function DropDown({ state, setState, title, links }) {
  const [isSubMenuOpen, setSubMenuOpen] = useState({
    isOpen: false,
    key: null,
  });
  useEffect(() => {
    if (!state) setSubMenuOpen({ isOpen: false, key: null });
  }, [state]);

  const closeGlobalList = () => {
    setState(false);
  };
  return (
    <li
      className=" group"
      onMouseEnter={(e) => setState(true)}
      onMouseLeave={closeGlobalList}
    >
      <span className="relative cursor-pointer flex-center">
        <span className="">{title}</span>
        <span
          className={`pl-1 group-hover:rotate-90 transition-transform text-lg`}
        >
          <TbBus />
        </span>
       
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {state && (
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.2,
              type: "spring",
            }}
            variants={{
              initialState: {
                y: "-20vh",
                zIndex: -10,
              },
              animateState: {
                y: 0,
                transitionEnd: {
                  zIndex: 100,
                },
              },
              exitState: {
                y: "-100vh",
                zIndex: -10,
              },
            }}
            className="relative flex flex-col w-full h-full "
          >
            <ul className="absolute flex-col  py-4 pl-4 w-[18rem] rounded-md bg-blue-100 top-0 -left-16 flex  shadow-2xl">
              {links.map((list, i) => {
                return (
                  <div
                    key={i}
                    className="relative group-"
                    onMouseEnter={(e) =>
                      list.subMenu && setSubMenuOpen({ isOpen: true, key: i })
                    }
                    onMouseLeave={(e) => {
                      list.subMenu && setSubMenuOpen({ isOpen: false, key: i });
                    }}
                  >
                    <Link href={list.link} scroll={false}>
                      <motion.li className="flex items-center px-2 group-[2]-hover:bg-white py-2 transition-colors cursor-pointer hover:bg-white hover:text-blue-150">
                        {list.title}
                        {list.subMenu && (
                          <div className="ml-2 text-xl ">
                            <TbBus />
                          </div>
                        )}
                      </motion.li>
                    </Link>

                    {isSubMenuOpen.isOpen && i == isSubMenuOpen.key && (
                      <ul className="absolute left-0 z-10 list-none bg-white shadow-lg top-7">
                        {list?.subMenu?.map((item) => {
                          return (
                            <Link
                              href={item.link}
                              key={item._id}
                              scroll={false}
                            >
                              <motion.li
                               
                                className="px-2 py-2 transition-colors cursor-pointer text-dark hover:bg-white hover:text-blue-150"
                              >
                                {item.title}
                              </motion.li>
                            </Link>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
