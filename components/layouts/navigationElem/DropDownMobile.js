import React from 'react'
import { AnimatePresence,motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function DropDownMobile({links, state,setState}) {
  return (
    <AnimatePresence mode="wait">
    {state && (
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        variants={{
          initialState: {
            y: "-100vh",
          },
          animateState: {
            y: 0,
          },
          exitState: {
            y: "-100vh",
          },
        }}
        className="fixed top-0 left-0 z-[999] flex flex-col w-full h-screen"
      >
        <section className="w-full h-screen bg-blue-100 flex-center">
          <section className="container relative">
            <section
              className="absolute right-0 text-xl bg-white rounded-md top-5 text-blue-150"
              onClick={() => setState(false)}
            >
              <HiX />
            </section>
            <ul className="flex-col p-10 text-sm ">
              {links.map((list, i) => {
                return (
                  <Link href={list.link} key={i} scroll={false}>
                    <motion.li
                      variants={{
                        hidden: (i) => ({
                          opacity: 0,
                          y: -50 * i,
                          zIndex: -10,
                        }),
                        visible: (i) => ({
                          opacity: 1,
                          y: 0,
                          zIndex: 0,
                          transition: {
                            delay: i * 0.05,
                          },
                        }),
                      }}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      className="py-2 pl-2 transition-colors cursor-pointer hover:bg-white hover:text-blue-150"
                    >
                      {list.title}
                    </motion.li>
                  </Link>
                );
              })}
            </ul>
          </section>
        </section>
      </motion.div>
    )}
  </AnimatePresence>
  )
}
