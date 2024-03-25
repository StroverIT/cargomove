import React from "react";
// Icons
import { HiOutlineMail, HiOutlineUserCircle, HiX } from "react-icons/hi";
import {
  AiFillHeart,
  AiOutlineLock,
  AiOutlinePlusCircle,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { BiHomeAlt, BiPhoneCall, BiUser } from "react-icons/bi";
import { MdOutlineSubtitles, MdStickyNote2 } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { IoIosArrowForward, IoMdSettings } from "react-icons/io";
import { FaAddressBook, FaTools } from "react-icons/fa";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";

const iconDictionary = {
  // Non filled
  home: <BiHomeAlt />,
  password: <AiOutlineLock />,
  email: <HiOutlineMail />,
  fullName: <HiOutlineUserCircle />,
  phoneNumber: <BiPhoneCall />,
  title: <MdOutlineSubtitles />,
  giReturn: <GiReturnArrow />,
  hix: <HiX />,
  rightArrow: <IoIosArrowForward />,
  counterClockWise: <PiArrowCounterClockwiseBold />,
  user: <BiUser />,
  // Neutral
  power: <AiOutlinePoweroff />,
  // Filled
  settings: <IoMdSettings />,
  heart: <AiFillHeart />,
  address: <FaAddressBook />,
  order: <MdStickyNote2 />,
  plusCircle: <AiOutlinePlusCircle />,
  tools: <FaTools />,
};

export default function Icons({ iconType }) {
  return iconDictionary[iconType];
}
