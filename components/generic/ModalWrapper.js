import React, { useEffect } from "react";
// Icons
import { IoArrowUndoSharp } from "react-icons/io5";
// Animations
import { motion } from "framer-motion";

const themes = {
  default: {
    background: "bg-black/60 ",
    textAndIcon: "text-white",
    iconBorder: "border-white shadow-xl",
  },
  white: {
    background: "bg-white",
    textAndIcon: "text-black",
    iconBorder: "border-black shadow-xl",
  },
  whiteTransparent: {
    background: "bg-white/60",
    textAndIcon: "text-black",
    iconBorder: "border-black bg-white shadow-xl",
  },
};

const ModalWrapper = ({
  children,
  closeModalHandler,
  theme = "default",
  isFullScreen = false,
  isModalOpen,
  createButton,
}) => {
  useEffect(() => {
    if (isFullScreen) {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [isModalOpen]);
  return (
    isModalOpen && (
      <div
        className={` top-0 left-0 w-full h-full  rounded-xl bg-clip-padding backdrop-blur-xl backdrop-filter z-30 
        ${themes[theme].background}
        ${isFullScreen ? "fixed" : "absolute"}
        `}
        style={{
          backdropFilter: "blur(6px)",
        }}
      >
        <div className={`relative h-full ${themes[theme].textAndIcon}`}>
          <div
            className={`absolute  px-4 text-xl z-50 flex justify-between items-center w-full
            
            ${isFullScreen ? "top-28 left-0" : "top-0 left-0"}
            `}
          >
            <div
              className={`  border  rounded-full cursor-pointer p-2 mt-4 bg-transparent text-secondary border-secondary`}
              onClick={closeModalHandler}
            >
              <IoArrowUndoSharp />
            </div>
            {createButton}
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-center h-full text-xl font-semibold"
          >
            {children}
          </motion.div>
        </div>
      </div>
    )
  );
};

export default ModalWrapper;
