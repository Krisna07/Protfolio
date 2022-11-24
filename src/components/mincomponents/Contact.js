import React from "react";

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = ({ theme }) => {
  return (
    <div className=" w-full   md:text-sm p-2 flex-col flex items-center scroll gap-4">
      <div className=" w-[100%] flex  items-center  justify-between text-3xl text-bold font-bold">
        <span className="w-full h-px bg-gray-400 mr-3"></span>
        <span className="w-full  text-center">Get In Touch</span>
        <span className="w-full h-px bg-gray-400 ml-3"></span>
      </div>

      <div className="p-2 md:w-full text-center text-base flex flex-col gap-4 ">
        <p>
          Since I have collected required skillset to hop on to my coding
          career. Though I have specific skillset as listed I am open for the
          opportunities within the boundaries and beyond my skillset. So, if you
          like my work and feel like you have a role that could fit, feel free
          to reach out.
        </p>
      </div>
      <div className="w-full flex items-center justify-center my-4 md:hidden">
        <div className="w-2/6 flex items-center justify-between">
          <a href="https://github.com/Krisna07">
            <FaGithub className="hover:text-red-400  " />
          </a>

          <a href="https://www.linkedin.com/in/krishna-paudel-4724541b1/">
            <FaLinkedinIn className="hover:text-red-400 " />
          </a>
          <a href="https://twitter.com/krishnapaudel07">
            <FaTwitter className="hover:text-red-400 " />
          </a>
        </div>
      </div>

      <button className="border border-solid border-red-400 text-base p-2 my-4 rounded-[8px]">
        <a href="mailto:krisnachhetri07@gmail.com">Say Hello</a>
      </button>
    </div>
  );
};

export default Contact;
