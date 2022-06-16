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

  return (
    <div className="md:w-full md:text-sm mx-4 ">
      <div className=" md:w-full mt-20 felx text-sm flex-col" ref={aboutRef}>
        <div className="flex items-center my-4 text-3xl text-bold font-bold">
          About <span className="w-full h-px bg-gray-400 ml-3"></span>
        </div>
        <div className="text-base">
          <p>
            Back in 2020 I discover javascript and I was amazed with its
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
        </div>
      </div>
      <Timeline className="w-full" theme={mode.mode} />
    </div>
  );
};

export default About;
