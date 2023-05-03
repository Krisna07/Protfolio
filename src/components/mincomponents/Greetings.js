import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Typewriter from "typewriter-effect";

const Greetings = (theme) => {
  const heading = useRef(null);
  const shortDesc = useRef(null);
  const headChange = useRef(null);
  const [head, setHead] = useState("Krishna Paudel");

  // useEffect(() => {
  //   const nameArray = name.split("");
  //   let i = 0;
  //   let interval = null;

  //   if (letters.length == nameArray.length) {
  //     interval = setInterval(() => {
  //       setLetters((prevLetters) => [...prevLetters, nameArray[i]]);
  //       i++;
  //       if (i === nameArray.length) {
  //         clearInterval(interval);
  //       }
  //     }, 1000);
  //   } else if (letters.length > 0) {
  //     interval = setInterval(() => {
  //       setLetters((letters) => {
  //         const newLetters = [...letters];
  //         newLetters.shift();
  //         if (newLetters.length === 0) {
  //           clearInterval(interval);
  //         }
  //         return newLetters;
  //       });
  //     }, 1000);
  //   }

  //   return () => clearInterval(interval);
  // }, [name, letters]);

  // console.log(letters);
  // useEffect(() => {
  //   const elHeading = heading.current;
  //   const elShort = shortDesc.current;

  //   gsap.fromTo(
  //     elHeading,
  //     { translateY: 10, opacity: 0 },
  //     { translateY: 0, opacity: 4, duration: 1 }
  //   );
  //   gsap.fromTo(
  //     elShort,
  //     { translateY: 10, opacity: 0 },
  //     { translateY: 0, opacity: 1, duration: 1 }
  //   );
  // });
  // useEffect(() => {
  //   const elCursor = headChange.current;
  //   console.log(elCursor.getBoundingClientRect().width);
  // }, []);
  const [textOp, setTextOp] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setTextOp(Math.floor(Math.random() * 10)),
      300
    );
    return () => clearInterval(interval);
  }, [setTextOp]);

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
          className="md:w-[60ch] p-4 text-gray-400 relative z-0"
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
