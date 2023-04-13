import React from "react";
import Timeline from "./Timeline";
import { FaRegEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = (mode) => {
  const aboutRef = useRef(null);
  useEffect(() => {
    const greet = aboutRef.current;
    gsap.fromTo(
      greet,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        ScrollTrigger: {
          trigger: greet,
        },
      }
    );
  }, []);

  return (
    <div className="md:w-full md:text-sm px-2 ">
      <div className=" md:w-full  felx text-sm flex-col" ref={aboutRef}>
        <div className="flex items-center space-between my-4 text-3xl text-bold font-bold">
          <span>About</span>
          <span className="w-full h-px bg-gray-400 ml-4"></span>
        </div>
        <div className="flex gap-2 items-center">
          <div
            className={`text-base leading-relaxed tracking-wide  gap-2 ${
              mode.mode ? "text-gray-400" : "text-black"
            }`}
          >
            <p>
              Back in 2020 I started learning web development with JavaScript as
              my main langauge. While learning JavaScript I came to know about
              React and started experimenting. As I learnt more, I fell in love
              with all the possibilities of things you could create with it.
            </p>
            <br />
            <p>
              2022, with my bachelors degree I finally polished and developed
              skills require for frontend web developement. I love turning
              designs into beautiful, interactive and accessible experiences
              with attention to the smallest of details. I strongly believe in
              writing clean and scalable code. As of my competent in web
              development, I am ready to take on new challenges and
              opportunities.
            </p>

            <p className="text-red-400 my-4">
              So, if you like my work and feel like you have a role that could
              fit, feel free to reach out.
            </p>
            <div className=" w-[100px] flex items-center justify-between">
              <a href="mailto:krisnachhetri07@gmail.com">
                <FaRegEnvelope className="hover:text-red-400  " />
              </a>

              <a href="https://www.linkedin.com/in/krishna-paudel-4724541b1/">
                <FaLinkedinIn className="hover:text-red-400 " />
              </a>
              <a href="https://twitter.com/krishnapaudel07">
                <FaTwitter className="hover:text-red-400 " />
              </a>
            </div>
          </div>
          <div className="min-w-[200px] h-[200px] border-2 rounded border-green-600 bg-green-300 opacity-[0.7] relative z-20 hidden md:block">
            <div className="absolute top-2 left-2 min-w-[200px] h-[200px] border-2 rounded border-green-600  z-[-1] transition-all hover:top-4 hover:left-4"></div>
          </div>
        </div>
      </div>
      <Timeline className="w-full" theme={mode.mode} />
    </div>
  );
};

export default About;
