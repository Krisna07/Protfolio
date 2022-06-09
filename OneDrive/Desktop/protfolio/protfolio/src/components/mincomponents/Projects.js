import React from "react";
import Timeline from "./Timeline";

const Projects = () => {
  const projects = [
    {
      name: "Complex Todo App",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, officia.",
      image: "./project-1.gif",
      link: "https://reactbootcamp.com",
    },
  ];
  return (
    <div className=" w-full md:text-lg px-4 " id="projects">
      <div className="text-white  mt-20 felx flex-col">
        <div className="flex items-center my-4 text-3xl text-bold font-bold">
          Projects <span className="w-full h-px bg-gray-400 mx-3"></span>
        </div>
        <h2 className="md:text-base  py-4 font-bold">
          <span className="text-red-400">0.1 </span> Criminal Face Recognition
          App
        </h2>
        <p>
          This is a app developed in MERN stack with the help of face-api.js
        </p>
        <div className="w-full bg-green-600 h-96 my-4"></div>
        <a
          href="https://github.com/Krisna07/CriminalFaceRecognition_Repo"
          className="w-full text-xs"
        >
          <p className="underline">
            https://github.com/Krisna07/CriminalFaceRecognition_Repo
          </p>
        </a>
      </div>
      <div className="text-white m-4  felx flex-col">
        <h2 className="md:text-xl  my-4 font-bold">
          <span className="text-red-400">0.2 </span>Real Estate Website
        </h2>
        <p>
          This is a app developed in MERN stack with the help of face-api.js
        </p>
        <div className="w-full bg-red-600 h-96 my-4"></div>
        <a
          href="https://github.com/Krisna07/CriminalFaceRecognition_Repo"
          className="w-full text-xs"
        >
          <p className="underline">
            {" "}
            https://github.com/Krisna07/CriminalFaceRecognition_Repo
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
