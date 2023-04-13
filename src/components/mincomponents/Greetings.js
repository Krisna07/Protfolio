import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Greetings = (theme) => {
  const heading = useRef(null);
  const shortDesc = useRef(null);
  const headChange = useRef(null);
  const [head, setHead] = useState("Krishna Paudel");

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
  });
  useEffect(() => {
    const elCursor = headChange.current;
    console.log(elCursor.getBoundingClientRect().width);
  }, [10]);

  return (
    <div className=" h-full flex flex-col items-start justify-center relative  relative ">
      <div className="z-0 flex flex-col items-center justify-center">
        <div className="p-4  font-mono text-l w-full overflow-hidden md:text-xl ">
          <div className="m-2 text-red-400 md:text-4xl" ref={heading}>
            Hi, I am
          </div>
          <br />
          <div className="relative m-2 flex item-center md:w-[fit-content] w-[22ch] pr-8">
            <span className=" py-2  font-bold md:text-4xl   md:flex whitespace-nowrap text-brand-accent hidden ">
              <h1 className="text-l md:text-3xl">{head}👋</h1>
            </span>
            <span className=" py-2  font-bold md:text-4xl   whitespace-nowrap text-brand-accent md:hidden">
              <h1>{"<>Krishna Paudel</>"}</h1>
            </span>
            <span
              className={`cursor ${
                !theme.theme
                  ? "bg-white border-black border-l-4 border-solid "
                  : "bg-black border-white border-l-4 border-solid  "
              } `}
              ref={headChange}
            ></span>
          </div>
        </div>
        <h1
          className={`p-4 font-mono font-bold text-l text-gray-500 ${
            theme.theme ? "hover:text-gray-100" : "hover:text-gray-900"
          } md:text-xl w-full overflow-hidden`}
        >
          I build things for the web.
        </h1>
        <div
          className="md:w-[60ch] p-4 text-gray-400 relative z-0 tracking-wide"
          ref={shortDesc}
        >
          I’m a frontend developer specializing in building (and occasionally
          designing) exceptional digital products using the latest stacks and
          frameworks. Currently, I’m available for next project to put my hand
          on.
        </div>
      </div>
    </div>
  );
};

export default Greetings;
