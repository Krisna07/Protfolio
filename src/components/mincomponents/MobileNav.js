import React from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const MobileNav = ({ menuHover, theme }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const rotateTopBar = "transform rotate-[-135deg] absolute";
  const middleBar =
    "transform translate-x-40 transition-all  ease-in duration-900";
  const rotatelastBar = "transform rotate-[135deg] absolute";

  return (
    <nav
      className={`w-full h-10 transition-all  ease-in duration-700 flex items-center relative `}
    >
      <div className=" relative flex items-center">
        <div
          className={` w-8 flex flex-col  top-0 right-0  items-center text-red-500 overflow-hidden ${
            openMenu ? "justify-center" : "justify-between"
          }`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span
            className={`w-full h-1  bg-red-500 transition ease-in-out duration-700  ${
              openMenu ? rotateTopBar : ""
            }`}
          ></span>
          <span
            className={`w-full h-1 my-2 bg-red-500 transition ease-in-out duration-[1000ms]  ${
              openMenu ? middleBar : ""
            }`}
          ></span>
          <span
            className={`w-full h-1  bg-red-500 transition ease-in-out duration-700  ${
              openMenu ? rotatelastBar : ""
            }`}
          ></span>
        </div>
      </div>

      <div
        className={`w-screen h-screen  transition-all ease-in duration-300 
           absolute top-10  ${
             openMenu
               ? " right-[0] backdrop-filter backdrop-blur-sm"
               : "right-[-100%]"
           }`}
      >
        <div
          className={`overflow-hidden h-screen top-0  z-50 fixed  ${
            openMenu ? "w-3/4 right-0 " : "w-3/4 right-[-100%] "
          } ${
            !theme ? "bg-gray-300 text-black" : "bg-gray-800 text-white"
          } flex flex-col p-20 items-center justify-between list-none`}
        >
          <Link to="#about" smooth onClick={() => setOpenMenu(!openMenu)}>
            <li className={`p-2 mx-4  w-[content] font-bold relative `}>
              <span
                className={`${menuHover} hover:text-red-400 flex items-center`}
              >
                <span className="hover:text-red-400 mx-2 ">0.1</span> About
              </span>
            </li>
          </Link>
          <Link to="#projects" smooth onClick={() => setOpenMenu(!openMenu)}>
            <li
              className={`p-2 mx-4 w-[content] font-bold relative  flex items-center`}
            >
              <span
                className={`${menuHover} hover:text-red-400 flex items-center   `}
              >
                <span className="hover:text-red-400 mx-2">0.2</span> Projects
              </span>
            </li>
          </Link>
          <li
            className={`p-2 mx-4  w-[content] flex items-center font-bold relative `}
          >
            <Link to="#contact" smooth onClick={() => setOpenMenu(!openMenu)}>
              <span
                className={`${menuHover} hover:text-red-400 flex items-center `}
              >
                <span className="hover:text-red-400 mx-2">0.3</span> Contact
              </span>
            </Link>
          </li>
          <li className={` mx-4  w-content font-bold text-sm relative `}>
            <button className="p-1 border-2  flex items-center justify-center border-red-500 border-solid rounded hover:text-red-400">
              Resume
            </button>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
