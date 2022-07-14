import React from "react";
import { FaGithub } from "react-icons/fa";
import todoImage from "../images/todoapp.jpg";
import rsImage from "../images/realestate.jpg";

const Projects = ({ theme }) => {
  const projects = [
    {
      projectType: "Practise Project",

      name: "Complex Todo App",
      desc: "This is a complete web app created using Reactjs. The app enables user to create task and set reminder for it. ",
      image: todoImage,
      createdon: "VS-Code JavaScript HTML5 CSS Express Node Responsive",
      link: " https://github.com/Krisna07/CriminalFaceRecognition_Repo",
    },
    {
      projectType: "Practise Project",
      name: "Roger Realestate",
      desc: "A real esttate website with created with plain javascript. Map js is integrated for map view. Designed and developed as a practise project ",
      createdon: "VS-Code JavaScript HTML5 CSS MapJS Node Responsive",
      image: rsImage,
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
            key={project.name}
          >
            <div
              className={`w-full  basis-1/3 flex flex-col h-full  items-center  justify-start md:relative absolute  p-4`}
            >
              <div className="relative w-full h-[20%]   my-4 ">
                <div
                  className={`md:absolute relative ${
                    count % 2 === 0 ? "left" : "right"
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
              <div className="relative  w-full flex items-start  ">
                <div
                  className={`projDes md:w-[400px] w-full  absolute ${
                    count % 2 === 0 ? "left" : "right"
                  }-0  z-40 `}
                >
                  <div
                    className={`md:w-full w-full z-40  float-${
                      count % 2 === 0 ? "left" : "right"
                    } md:h-[20%]   ${
                      !theme ? "bg-gray-300" : "bg-gray-600"
                    } shadow-lg rounded text-[16px] text-${
                      count % 2 === 0 ? "left" : "right"
                    } `}
                  >
                    <div className="w-full p-4 relative   ">{project.desc}</div>
                  </div>
                  <div className="md:w-full w-full ">
                    <div
                      className={`w-full  text-[12px] py-4  text-${
                        count % 2 == 0 ? "left" : "right"
                      } flex flex-col `}
                    >
                      <div className="w-full text-red-400 md:text-auto  ">
                        <div
                          className={`md:w-4/6 w-full float-${
                            count % 2 == 0 ? "left" : "right"
                          }`}
                        >
                          {project.createdon}
                        </div>
                      </div>
                      <div
                        className={`w-full 
                    `}
                      >
                        <a href={$`project.link`}><FaGithub
                          className={`hover:text-red-400 hover:text-[18px] ${
                            count % 2 == 0 ? "float-left" : "float-right"
                          }`}
                        />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full h-full md:basis-2/3 flex items-center justify-center   md:relative rounded  `}
            >
              <div className="h-full w-full ">
                <div
                  className="absolute  w-full h-[60%] md:h-full  rounded z-[20%] top-[20%] md:top-0  "
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute w-full h-full bg-gray-600 md:opacity-[0.3] opacity-[0.8] md:hover:opacity-0"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
