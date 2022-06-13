import React from "react";
import Contact from "./mincomponents/Contact";
import Pagecenter from "./mincomponents/Projects";
import Pageleft from "./mincomponents/Greetings";

export const Homepage = () => {
  const menuHover =
    "hover:after:content-[''] after:w-0 hover:after:w-full  hover:after:border-solid hover:after:border-b-2 hover:after:border-red-300 block text-sm font-medium hover:text-slate-300 after:absolute after:left-0 after:bottom-0 hover:after:ease-in  after:ease-out hover:after:transition-all hover:after:duration-150 ";
  return (
    <div className="w-full bg-gray-900 relative font-roboto ">
      <nav className="w-full h-16 shadow flex items-center relative">
        <div className=" absolute md:right-0 md:px-8 flex list-none">
          <li className={`p-2 mx-4 w-content md:text-sm font-bold relative `}>
            <span className={`${menuHover} md:text-xl `}>
              <a>
                <span className="text-red-400 mx-2">0.1</span> Projects
              </a>
            </span>
          </li>
          <li className={`p-2 mx-4  w-content font-bold relative `}>
            <span className={`${menuHover} md:text-xl `}>
              <span className="text-red-400 mx-2">0.2</span> About
            </span>
          </li>
          <li className={`p-2 mx-4  w-content font-bold relative `}>
            <span className={`${menuHover} md:text-xl `}>
              <span className="text-red-400 mx-2">0.3</span> Contact
            </span>
          </li>
          <li className={` mx-4 md:text-xl w-content font-bold relative `}>
            <button className="px-1 py-1 border-2  flex items-center justify-center border-red-500 border-solid rounded">
              <div className="px-1 py-1 border-2 border-red-500 border-solid rounded">
                Resume
              </div>
            </button>
          </li>
        </div>
      </nav>
      <div className="  md:w-4/5 h-full md:h-screen md:flex items-center justify-center ">
        <Pageleft />
      </div>
      <div className=" min:h-screen w-full flex items-center justify-center bg-gray-800  ">
        <Pagecenter />
      </div>
      <div className="md:w-4/5 h-full md:h-screen md:flex items-center justify-center">
        <Contact />
      </div>
    </div>
  );
};
