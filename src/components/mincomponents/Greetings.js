import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Typewriter from "typewriter-effect";

const Greetings = (theme) => {
  const heading = useRef(null);
  const shortDesc = useRef(null);

  useEffect(() => {
    const headingLetters = heading.current.children;
    const desLetters = shortDesc.current.children;
    gsap.set(headingLetters, { autoAlpha: 0 });
    gsap.set(desLetters, { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(
      headingLetters,
      { y: "+=50" },
      { autoAlpha: 1, y: "0", stagger: 0.1, duration: 2 }
    );
    tl.fromTo(
      desLetters,
      { y: "+=50" },
      { autoAlpha: 1, y: "0", stagger: 0.1, duration: 0.5 }
    );
  }, []);

  return (
    <div className=" h-full flex flex-col items-start justify-center relative  relative ">
      <div className="z-0 flex flex-col items-center justify-center">
        <div className="p-4  font-mono text-l w-full overflow-hidden md:text-xl  ">
          <div className="m-2 text-red-400 md:text-4xl" ref={heading}>
            Hi, I am
          </div>
          <br />
          <div className="text-3xl flex items-center p-2 font-bold">
            <Typewriter
              options={{
                strings: ["Krishna Paudel", "Web Developer </>"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <h1
          className={`p-4 font-mono font-bold text-l opacity-[0.5] hover:opacity-[1] transition ease-in-out delay-150 md:text-xl w-full overflow-hidden`}
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
