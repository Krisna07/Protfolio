import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const SideItems = () => {
  return (
    <div className="relative z-[99]">
      <div className="w-16 h-2/6  fixed bottom-0 left-16 md:flex flex-col items-center hidden ">
        <div className="h-[300px] md:flex flex-col items-center justify-between p-4 hidden text-lg ">
          <a
            href="https://github.com/Krisna07"
            className="border border-solid border-gray-400 p-1 rounded"
          >
            <FaGithub className="hover:text-red-400 hover:text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/krishna-paudel-4724541b1/"
            className="border border-solid border-gray-400 p-1 rounded"
          >
            <FaLinkedinIn className="hover:text-red-400 hover:text-xl" />
          </a>
          <a
            href="https://twitter.com/krishnapaudel07"
            className="border border-solid border-gray-400 p-1 rounded"
          >
            <FaTwitter className="hover:text-red-400 hover:text-xl" />
          </a>
        </div>
        <span className="w-px h-full bg-gray-400 mx-3"></span>
      </div>
      <div className="w-16 h-2/6 fixed bottom-0 right-16 md:flex flex-col items-center hidden">
        <div className="h-96 md:flex   items-center justify-center py-4 m-4  hidden text-lg rotate-90">
          <a
            href="mailto:krisnachhetri07@gmail.com"
            className="text-[16px] border-px border-red-400 border-solid hover:text-red-400 hover:text-[17px]"
            style={{ fontFamily: "itallic" }}
          >
            krisnachhetri07@gmail.com
          </a>
        </div>
        <span className="w-px h-full bg-gray-400 mx-3"></span>
      </div>
    </div>
  );
};

export default SideItems;
