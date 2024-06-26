import React, { useState } from "react";
import Title from "../Title";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

export default function FaQ({
  data,
  title = "Често задавани въпроси",
  titleSize = "text-xl lg:text-5xl",
  headingSize = "text-md lg:text-lg",
  subHeadingSize = "text-lg",
}) {
  return (
    <AnimateSharedLayout>
      <motion.section
        layout
        className="container relative z-10 mt-10 max-md:py-10 md:p-20 lg:mt-20 lg:rounded-2xl box"
        id="faq"
      >
        <motion.div layout className="flex-center">
          <Title title={title} size={titleSize} />
        </motion.div>

        <motion.section layout className="md:mt-4">
          {data?.map((question, index) => {
            return question.type == "heading" ? (
              <Heading
                key={question._id}
                text={question.text}
                headingSize={headingSize}
              />
            ) : (
              <Question
                subHeadingSize={subHeadingSize}
                key={question._id}
                title={question.title}
                text={question.text}
                isBorder={question.isBorder}
                index={index}
              />
            );
          })}
        </motion.section>
      </motion.section>
    </AnimateSharedLayout>
  );
}
const variants = {
  hide: { opacity: 0, y: -10, transition: { duration: 0.5 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const iconVariants = {
  closed: { rotate: 0 },
  open: {
    rotate: "135deg",
    transition: {
      duration: 0.5,
    },
  },
};
function Question({ title, text, isBorder = true, index, subHeadingSize }) {
  const [isOpen, setOpen] = useState(index == 0 ? true : false);

  return (
    <motion.section
      layout
      className={`p-7 ${isBorder ? "border-b-2 border-blue-200" : ""} `}
    >
      <motion.div
        layout
        onClick={() => setOpen(!isOpen)}
        className="cursor-pointer"
      >
        <motion.div layout className="flex items-center justify-between">
          <motion.h3
            layout
            className={`font-semibold uppercase ${subHeadingSize}`}
          >
            {title}
          </motion.h3>
          <motion.div
            layout
            animate={isOpen ? "open" : "closed"}
            variants={iconVariants}
            className={`text-xl ${isOpen ? "text-lightGreen" : "text-dark"}`}
          >
            <AiOutlinePlus />
          </motion.div>
        </motion.div>
        <motion.div
          layout
          animate={isOpen ? "show" : "hide"}
          transition={{
            type: "spring",
            duration: 2,
            stiffness: 260,
            damping: 20,
          }}
          variants={variants}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.p
                layout
                exit={{
                  opacity: 0,
                }}
                className="mt-1 font-sans whitespace-pre-line max-lg:text-sm"
              >
                {text}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
function Heading({ text, headingSize }) {
  return (
    <h2
      className={`pb-4 mt-12  ${headingSize} font-semibold border-primary-500`}
    >
      {text}
    </h2>
  );
}
