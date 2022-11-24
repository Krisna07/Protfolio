import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

import MobileNav from "./MobileNav";
import { saveAs } from "file-saver";
import resume from "../files/Resume.pdf";

const Nav = ({ mode, offsetY }) => {
  const tabs = ["About", "Projects", "Contact"];

  // const navigate = useNavigate();
  const saveFile = () => {
    saveAs(resume, "resume_KrishnaPaudel.pdf");
  };

  const menuHover =
    "hover:after:content-[''] after:w-0 hover:after:w-full hover:after:h-px hover:after:bg-red-300 hover-after-absolute hover:after:left-0 after:px-2 after:absolute after:bottom-0 text-sm font-medium hover:text-gray-500   ";
  return (
    <>
      <nav
        className={`md:w-full text-right flex items-center   m-auto absoulte top-0 `}
      >
        <div className="w-full md:flex items-center  justify-between   hidden list-none  ">
          <div className="w-3/4 md:flex items-center justify-center   hidden list-none ">
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
                  className={`px-2 w-content relative flex flex-col items-center justify-center  text-[16px] mx-2 `}
                >
                  <span className="hover:border-b-[1px] border-red-500 p-2 flex items-center justify-center">
                    <span className="text-red-400 mr-2 ">0.{count + 1}</span>
                    {tab}
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
            theme={mode}
            tabs={tabs}
            saveFile={saveFile}
          />
        </div>
      </nav>
      <Link
        to="home"
        activeClass="active"
        spy={true}
        offset={-50}
        smooth={true}
      >
        <button className="fixed md:bottom-10  bottom-[10px]  right-10 ">
          <div className="flex items-center flex-col ">
            <FaArrowUp className="m-2" />
          </div>
        </button>
      </Link>
    </>
  );
};

export default Nav;
