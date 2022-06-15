import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowUp } from "react-icons/fa";
import { useRef } from "react";
import MobileNav from "./MobileNav";

const Nav = (mode) => {
  const [tab, setTab] = useState(false);
  const tabs = ["About", "Projects", "Contact"];
  const thisTab =
    "after:content-['']  after:w-0 after:w-content  after:border-solid after:border-b-2 after:border-red-300 block text-sm font-medium text-slate-300 after:absolute after:left-0 after:bottom-0 after:ease-in  after:ease-out hover:after:transition-all hover:after:duration-150";

  const menuHover =
    "hover:after:content-['']  after:w-0 hover:after:w-full   hover:after:border-solid hover:after:border-b-2 hover:after:border-red-300 block text-sm font-medium hover:text-slate-300 after:absolute after:left-0 after:bottom-0 hover:after:ease-in  after:ease-out hover:after:transition-all hover:after:duration-150 ";
  return (
    <BrowserRouter>
      <nav
        className={`w-full text-right flex  justify-between m-auto absoulte top-0 `}
      >
        <div className="items-start"></div>
        <div className="md:flex items-end   hidden    ">
          {tabs.map((tab, count) => (
            <div
              key={tab}
              className={`p-2 ${menuHover} w-content font-bold relative ${
                !tab ? thisTab : ""
              }  `}
              onClick={() => setTab(!tab)}
            >
              <Link to={`#${tab.toLowerCase()}`} smooth>
                <span className={` hover:text-red-400  `}>
                  <span className="text-red-400 mx-2">0.{count + 1}</span>
                  {tab}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="w-8  items-end md:hidden block ">
          <MobileNav menuHover={menuHover} theme={mode.mode} />
        </div>
      </nav>

      <Link to="#top" smooth>
        <button className="fixed md:bottom-10  bottom-[10px] md:z-50 z-0 right-10 border border-red-400 border-solid px-3 py-1 rounded bg-red-500">
          <div className="flex items-center  ">
            <FaArrowUp className="m-2" />
          </div>
        </button>
      </Link>
    </BrowserRouter>
  );
};

export default Nav;
