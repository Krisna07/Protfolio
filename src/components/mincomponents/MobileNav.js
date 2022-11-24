import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

const MobileNav = ({ menuHover, theme, tabs, saveFile }) => {
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
        className={` transition-right ease-in duration-300 
           fixed top-14 z-40  ${
             openMenu
               ? "w-screen h-screen  right-[0] backdrop-filter backdrop-blur-sm"
               : "  right-[-100%]"
           }`}
      >
        <div
          className={`overflow-hidden h-screen top-0  z-50 fixed  ${
            openMenu ? "w-3/4 right-0 " : "w-3/4 right-[-100%] "
          } ${
            !theme ? "bg-gray-300 text-black" : "bg-gray-800 text-white"
          } flex flex-col p-20 items-center justify-between  list-none`}
        >
          {tabs.map((tab, count) => (
            <div
              key={tab}
              className={`p-2 ${menuHover} w-content font-bold relative`}
            >
              <Link
                to={tab.toLowerCase()}
                onClick={() => setOpenMenu(!openMenu)}
                smooth={true}
                spy={true}
                offset={-30}
              >
                <div className={`w-[content] hover:text-red-400 text-left`}>
                  <span className="text-red-400 mr-2 ">0.{count + 1}</span>
                  <span> {tab}</span>
                </div>
              </Link>
            </div>
          ))}

          <li
            className={` mx-4  w-content font-bold text-sm relative `}
            onClick={saveFile}
          >
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
