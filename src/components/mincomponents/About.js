import React from "react";
import Timeline from "./Timeline";
import { FaStar, FaCheck } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
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
  const skills = [
    "HTML",
    "Javascaript / React",
    "CSS / Tailwind",
    "Node",
    "C#",
    "Express",
  ];
  return (
    <div className="md:w-full md:text-sm mx-4 " id="about">
      <div className=" md:w-full mt-20 felx text-sm flex-col" ref={aboutRef}>
        <div className="flex items-center my-4 text-3xl text-bold font-bold">
          About <span className="w-full h-px bg-gray-400 ml-3"></span>
        </div>
        <div className="text-lg">
          <p>
            Back in 2020 I descover javascript and I was amazed with its
            versatality on web development. While learning javscript I came to
            know about React and started experimenting. As I go more deep into
            it I fall in love with the possibilities it gave me to create. While
            learning react through internet, I completed my bachelor degree from
            victoria University.
          </p>
          <p className="mt-2">
            Fast forward to 2022, I have finally polished and developed
            expertise in a lot of frontend skills and I am ready to take on new
            challenges and opportunities. I enjoy turning designs into
            beautiful, interactive and accessible experiences with attention to
            the smallest of details. I strongly believe in writing clean and
            scalable code. I am constantly learning and keeping myself
            up-to-date with emerging technologies and love challenging myself to
            learn something new every now and then
          </p>
          <p>Here are some of my skillset that I have excelled on</p>
          <div className="flex flex-wrap lg:w-3/4   w-full sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className={`sm:w-1/2 w-full  shadow my-2 hover:shadow-xl  relative `}
              >
                <div
                  className={` bg-${
                    !mode.mode ? "gray-100" : "gray-900"
                  } mx-2rounded flex p-2 h-full items-center w-full hover:absolute hover:p-4`}
                >
                  <FaCheck className="text-red-400  flex-shrink-0 mr-4" />
                  <span className="title-font text-sm ">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Timeline className="w-full" theme={mode.mode} />
    </div>
  );
};

export default About;
