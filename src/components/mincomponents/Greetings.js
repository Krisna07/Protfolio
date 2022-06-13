import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Greetings = (theme) => {
  const heading = useRef(null);
  const shortDesc = useRef(null);

  useEffect(() => {
    const elHeading = heading.current;
    const elShort = shortDesc.current;

    gsap.fromTo(
      elHeading,

      { translateY: 10, opacity: 0 },
      { translateY: 0, opacity: 4, duration: 1 }
    );
    gsap.fromTo(
      elShort,
      { translateY: 10, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div
      className="h-screen flex flex-col items-start justify-center relative  relative "
      id="top"
    >
      <div className=" z-0">
        <div className="p-4  font-mono text-l w-full overflow-hidden md:text-xl ">
          <div className="m-2 text-red-400" ref={heading}>
            Hi, I am
          </div>
          <br />
          <div className="relative m-2 flex item-center md:w-[32ch] w-[22ch]">
            <span className=" py-2  font-bold md:text-4xl   md:flex whitespace-nowrap text-brand-accent hidden">
              {"Krishna Paudel"}
              <span className="text-l md:text-3xl">👋</span>
            </span>
            <span className=" py-2  font-bold md:text-4xl   whitespace-nowrap text-brand-accent md:hidden">
              {"<>Krishna Paudel</>"}
            </span>
            <span
              className={`cursor ${
                !theme.theme
                  ? "bg-white border-gray-900 border-l-4 border-solid "
                  : "bg-gray-800 border-white border-l-4 border-solid  "
              } `}
            ></span>
          </div>
        </div>
        <h1 className="p-4 font-mono font-bold text-l text-gray-400 hover:text-gray-100 md:text-xl w-full overflow-hidden">
          I build things for the web.
        </h1>
        <div
          className="md:w-[60ch] p-4 text-gray-400 relative z-0"
          ref={shortDesc}
        >
          I’m a frontend developer specializing in building (and occasionally
          designing) exceptional digital products using the latest stacks and
          frameworks. Currently, I’m avaialble for next project to put my hand
          on.
        </div>
      </div>
    </div>
  );
};

export default Greetings;
