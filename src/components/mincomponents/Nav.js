import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowUp } from "react-icons/fa";

import MobileNav from "./MobileNav";
import { saveAs } from "file-saver";
import resume from "../files/Resume.pdf";

const Nav = (mode) => {
  // const [tab, setTab] = useState(false);
  const tabs = ["About", "Projects", "Contact"];
  const saveFile = () => {
    saveAs(resume, "resume_KrishnaPaudel.pdf");
  };

  const menuHover =
    "hover:after:content-[''] after:w-0 hover:after:w-full hover:after:h-px hover:after:bg-red-300 hover-after-absolute hover:after:left-0 after:px-2 after:absolute after:bottom-0 text-sm font-medium hover:text-gray-500   ";
  return (
    <BrowserRouter>
      <nav
        className={`w-full text-right flex  justify-between m-auto absoulte top-0 `}
      >
        <div className="items-start"></div>
        <div className="md:flex items-center   hidden list-none  ">
          {tabs.map((tab, count) => (
            <Link to={`#${tab.toLowerCase()}`} smooth key={tab}>
              <div
                className={`px-2 w-content relative flex flex-col items-center justify-center  active:text-red-400 text-[16px] mx-2 `}
              >
                <span className={` ${menuHover}`}>
                  <span className="text-red-400 mr-2 ">0.{count + 1}</span>
                  {tab}
                </span>
              </div>
            </Link>
          ))}
          <div
            className={`px-2 w-content relative flex flex-col items-center justify-center  active:text-red-400 mx-2`}
            onClick={saveFile}
          >
            <button className=" px-2 border-[1px] flex items-center justify-center border-red-500 border-solid rounded hover:text-red-400">
              Resume
            </button>
          </div>
        </div>
        <div className="w-8  items-end md:hidden block ">
          <MobileNav
            menuHover={menuHover}
            theme={mode.mode}
            tabs={tabs}
            saveFile={saveFile}
          />
        </div>
      </nav>

      <Link to="#home" smooth>
        <button className="fixed md:bottom-10  bottom-[10px]  right-10 ">
          <div className="flex items-center flex-col ">
            <FaArrowUp className="m-2" />
          </div>
        </button>
      </Link>
    </BrowserRouter>
  );
};

export default Nav;
