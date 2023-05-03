import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

import MobileNav from "./MobileNav";

const Nav = ({ mode, offsetY, saveFile }) => {
  const tabs = ["About", "Projects", "Contact"];

  const menuHover =
    "hover:after:content-[''] after:w-0 hover:after:w-full hover:after:h-px hover:after:bg-red-300 hover-after-absolute hover:after:left-0 after:px-2 after:absolute after:bottom-0 text-sm font-medium hover:text-gray-500   ";
  return (
    <>
      <nav
        className={`md:w-full text-right flex items-center   m-auto absoulte top-0 `}
      >
        <div className="w-full  items-center flex  justify-between list-none  ">
          <div className="w-full  items-center flex justify-center  list-none ">
            {tabs.map((tab, count) => (
              <Link
                smooth={true}
                key={tab}
                activeClass="active"
                to={tab.toLowerCase()}
                spy={true}
                offset={-50}
              >
                <div
                  className={`px-2 w-content relative flex flex-col items-center justify-center  text-[16px] mx-2 box-border border-b-[1px] border-none hover:border-red-500`}
                >
                  <span className=" p-2 flex items-center justify-center box-border text-bold">
                    <span className="text-red-400 mr-2 ">0.{count + 1}</span>
                    {tab}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
