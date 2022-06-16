import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = (theme) => {
  return (
    <div className=" w-full   md:text-sm px-4 flex-col flex items-center scroll">
      <div className=" w-full flex flex-auto items-center  justify-between m-4 text-3xl text-bold font-bold">
        <span className="w-full h-px bg-gray-400 mx-3"></span>
        <span className="w-full  text-center">Get In Touch</span>
        <span className="w-full h-px bg-gray-400 mx-3"></span>
      </div>

      <div className="p-2 md:w-full text-center text-base ">
        <p>
          Since I have collected required skillset to hopon to my coding carrer.
          Even though I have specific skillset as listed I am open for the
          opportunities within the bounderies of my skillset and beyond. Feel
          free to contact me for more information.
        </p>
      </div>
      <div className="w-full flex items-center justify-center my-4 md:hidden">
        <div className="w-3/12 flex items-center justify-between text-2xl ">
          <a href="https://www.facebook.com/krishnapaudel007">
            <FaFacebook className="hover:text-red-400" />
          </a>
          <a href="https://www.linkedin.com/in/krishna-paudel-4724541b1/">
            <FaLinkedinIn className="hover:text-red-400" />
          </a>
          <a href="https://twitter.com/krishnapaudel07">
            <FaTwitter className="hover:text-red-400" />
          </a>
        </div>
      </div>

      <button className="border boirder-solid border-red-400 text-base p-2 my-4 rounded-[8px]">
        <a href="mailto:krisnachhetri07@gmail.com">Say Hello</a>
      </button>
    </div>
  );
};

export default Contact;
