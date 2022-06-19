import React from "react";
import { FaCheck } from "react-icons/fa";
const Skills = (mode) => {
  const skills = [
    { title: "Langauge", item: "Javascript" },
    {
      title: "Framework",
      item: "React, Rest API, Express, TailwindCSS",
    },
    {
      title: "Other",
      item: "Git",
    },
    {
      title: "Learning",
      item: " TypeScript, GSAP, SCSS",
    },
  ];

  return (
    <div className="w-full ">
      <h1 className="text-[24px] font-bold">Skillsets</h1>
      <div className=" w-full flex items-center flex-col  ">
        {skills.map((skill) => {
          return (
            <div
              key={skill.title}
              className={` bg-${
                !mode.mode ? "gray-100" : "gray-900"
              } mx-2 m-2 rounded flex flex-col p-2  items-center w-full   `}
            >
              <div className="flex w-full text-gray-500  text-[20px]">
                {skill.title}
              </div>
              <span className="w-full mx-4 text-red-400 title-font text-base text-left ">
                {skill.item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
