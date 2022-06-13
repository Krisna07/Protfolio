import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contact = (theme) => {
  return (
    <div
      className=" w-full  md:text-sm px-4 flex-col flex items-center"
      id="contact"
    >
      <div className=" w-full flex flex-auto items-center  justify-between m-4 text-3xl text-bold font-bold">
        <span className="w-full h-px bg-gray-400 mx-3"></span>
        <span className="w-full  text-center">Get In Touch</span>
        <span className="w-full h-px bg-gray-400 mx-3"></span>
      </div>
      <section className="md:w-1/2 body-font relative ">
        <div className="p-2 md:w-full text-center ">
          <p>
            Since I have collected required skillset to hopon to my coding
            carrer. Even though I have specific skillset as listed I am open for
            the opportunities within the bounderies of my skillset and beyond.
            Feel free to contact me for more information.
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

        <form
          name="contact"
          className=" md:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-base ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full ${
                !theme.theme ? "bg-white border border-gray-px" : "bg-gray-900 "
              }  rounded shadow  focus:ring-2 focus:ring-red-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-base ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full ${
                !theme.theme ? "bg-white border border-gray-px" : "bg-gray-900 "
              }  rounded shadow    focus:ring-2 focus:ring-red-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-base ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`w-full ${
                !theme.theme ? "bg-white border border-gray-px" : "bg-gray-900 "
              }  rounded shadow   focus:ring-2 focus:ring-red-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <button className="border boirder-solid border-red-400 text-base p-2 my-4">
            Submit
          </button>
        </form>
      </section>
      <div className="text-gray-500 p-16">
        Designed and Developed by Krishna Paudel
      </div>
    </div>
  );
};

export default Contact;
