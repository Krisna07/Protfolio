import React from "react";
import Timeline from "./Timeline";

import { useRef } from "react/cjs/react.production.min";

const Projects = () => {
  const projects = [
    {
      name: "Complex Todo App",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, officia.",
      image: require("../images/todoapp.jpg"),
      link: " https://github.com/Krisna07/CriminalFaceRecognition_Repo",
    },
    {
      name: "Roger Realestate",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, officia.",
      image: require("../images/realestate.jpg"),
      link: "https://github.com/Krisna07/CriminalFaceRecognition_Repo",
    },
  ];
  return (
    <div className=" w-full md:text-lg px-4 " id="projects">
      <div className="  mt-20 felx flex-col">
        <div className="flex items-center my-4 text-3xl text-bold font-bold">
          Projects <span className="w-full h-px bg-gray-400 mx-3"></span>
        </div>
        {projects.map((project, count) => (
          <div className=" m-4  felx flex-col">
            <h2 className="md:text-base  py-4 font-bold">
              <span className="text-red-400 mx-2">0.{count + 1} </span>{" "}
              {project.name}
            </h2>
            <div className="md:flex  gap-x-4">
              <p>{project.desc}</p>
              <div className="w-full my-4 flex flex-wrap items-center justify-center">
                <img src={`${project.image}`} alt="" className="w-full h-fit" />
                <a href={`${project.link}`} className="w-full text-xs my-2">
                  <p className="underline">{project.link}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
