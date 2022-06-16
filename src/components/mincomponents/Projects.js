import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = ({ theme }) => {
  const projects = [
    {
      projectType: "Practise Project",

      name: "Complex Todo App",
      desc: "This is a complete web app created using Reactjs. The app enables user to create task and set reminder for it. ",
      image: require("../images/todoapp.jpg"),
      createdon: "VS-Code JavaScript HTML5 CSS Express Node Responsive",
      link: " https://github.com/Krisna07/CriminalFaceRecognition_Repo",
    },
    {
      projectType: "Practise Project",
      name: "Roger Realestate",
      desc: "A real esttate website with created with plain javascript. Map js is integrated for map view. Designed and developed as a practise project ",
      createdon: "VS-Code JavaScript HTML5 CSS MapJS Node Responsive",
      image: require("../images/realestate.jpg"),
      link: "https://github.com/Krisna07/probable-waddle",
    },
  ];
  return (
    <div className=" w-full  md:text-lg px-4 scroll ">
      <div className="  mt-20 felx flex-col">
        <div className=" w-content flex items-center my-4 text-3xl text-bold font-bold relative">
          <span className={`bg-${theme ? "black" : "white"} pr-4`}>
            Something I have Built
          </span>

          <span className="w-full h-px bg-gray-400 mx-3 absolute z-[-10]"></span>
        </div>
        {projects.map((project, count) => (
          <div
            className={`w-full md:m-4 my-4 h-[400px] flex   ${
              count % 2 == 0 ? "flex-row" : "flex-row-reverse"
            } items-center md:items-start justify-center my-6 md:gap-x-8 relative `}
          >
            <div
              className={`w-full  basis-1/3 flex flex-col h-full  items-center  justify-center md:justify-start md:relative absolute z-40 p-4`}
            >
              <div className="relative w-full h-[20%]  z-40  my-4 ">
                <div
                  className={`md:absolute relative ${
                    count % 2 == 0 ? "left" : "right"
                  }-0  h-full flex text-${
                    count % 2 == 0 ? "left" : "right"
                  } flex-col `}
                >
                  <span className="md:text-[12px] font-bold text-red-400">
                    {project.projectType}
                  </span>
                  <h2 className="md:text-base   font-bold ">{project.name}</h2>
                </div>
              </div>
              <div className="relative md:w-full w-[60%] flex items-start  ">
                <div
                  className={`md:w-[400px] w-full  md:absolute relative   ${
                    count % 2 == 0 ? "left" : "right"
                  }-0  flex flex-col `}
                >
                  <div
                    className={`md:w-full w-full  float-${
                      count % 2 == 0 ? "left" : "right"
                    } md:h-[20%]   ${
                      !theme ? "bg-gray-300" : "bg-gray-600"
                    } shadow-lg rounded text-[16px] text-${
                      count % 2 == 0 ? "left" : "right"
                    }`}
                  >
                    <p className="w-full p-4"> {project.desc}</p>
                  </div>
                  <div className="md:w-full ">
                    <div
                      className={`w-full  text-[12px] py-4  text-${
                        count % 2 == 0 ? "left" : "right"
                      }`}
                    >
                      <span className="text-gray-500">{project.createdon}</span>
                      <div
                        className={`w-full 
                    `}
                      >
                        <FaGithub
                          className={`hover:text-red-400 hover:text-[18px] ${
                            count % 2 == 0 ? "float-left" : "float-right"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full h-full md:basis-2/3 flex items-center justify-center`}
            >
              <div className="flex flex-wrap items-center justify-center shadow rounded relative z-20">
                <div className="absolute w-[100%] h-full bg-gray-600  md:opacity-[0.4] opacity-[0.9] block hover:hidden z-50"></div>
                <img
                  src={`${project.image}`}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
