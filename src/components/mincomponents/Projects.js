import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import todoImage from "../images/todoapp.jpg";
import rsImage from "../images/stripeclone.jpg";
import lfImage from "../images/linkify.png";
import Subheadings from "./Subheadings";
import dsImage from "../images/card.jpeg";

const Projects = ({ theme }) => {
  const projects = [
    {
      projectType: "Practise Project",
      name: "Complex Todo App",
      desc: "This is a complete web app created using Reactjs. The app enables user to create task and set reminder for it. ",
      image: todoImage,
      createdon: "JavaScript Reactjs HTML5 CSS Express Node Responsive",
      link: " https://github.com/Krisna07/CriminalFaceRecognition_Repo",
      webLink: "",
    },
    {
      projectType: "Landing page",
      name: "The Linkify",
      desc: "This is a landing page website created using NextJS, Taildwind CSS and Typescript. The hassle of sharing link is done for. Link sharing never been so easy. Enjoy free link sharing up to 10 links. ",
      createdon: "NextJS TailwindCSS Typescript APIs Node Responsive",
      image: lfImage,
      link: "https://github.com/Krisna07/thelinkify",
      webLink: "https://thelinkify.vercel.app/",
    },
    {
      projectType: "Practise Project",
      name: "Stripe Clone",
      desc: "This clone website was created using HTML, CSS and Reactjs. All the components are custom made thanks to react and css.",
      createdon: "JavaScript HTML5 CSS React keyframes",
      image: rsImage,
      link: "https://github.com/Krisna07/StripeClone",
      webLink: "https://stripe-cloneapp.vercel.app",
    },
    {
      projectType: "Frontend Mentor Challenge",
      name: "Dynamic card detail form",
      desc: " A dynamic card detail input component that provides real-time feedback and data validation upon completion. It's the perfect solution for streamlining the form input process and creating an intuitive, user-friendly experience.",
      createdon: "JavaScript HTML5 CSS React keyframes",
      image: dsImage,
      link: "https://github.com/Krisna07/StripeClone",
      webLink: "https://interactivecardform-flax.vercel.app/",
    },
  ];
  return (
    <div className="w-full  md:text-lg scroll  ">
      <div className="w-full  felx flex-col gap-2">
        <Subheadings subHeading={"Something I have built"} />
        {projects.map((project, count) => (
          <div
            className={`w-full py-8 h-[400px] flex   ${
              count % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center md:items-start justify-center  md:gap-x-8 relative `}
            key={project.name}
          >
            <div
              className={`w-full basis-1/3 flex-wrap flex flex-col h-full gap-4  items-center  justify-start md:relative absolute p-2`}
            >
              <div className="relative w-full h-[20%]   my-4 ">
                <div
                  className={`md:absolute relative ${
                    count % 2 === 0 ? "left" : "right"
                  }-0  h-full flex text-${
                    count % 2 === 0 ? "left" : "right"
                  } flex-col gap-2`}
                >
                  <span className="md:text-[16px] font-bold text-red-400 tracking-wider">
                    {project.projectType}
                  </span>
                  <h2 className="md:text-base   font-bold ">{project.name}</h2>
                </div>
              </div>
              <div className="relative  w-full flex items-start gap-4  ">
                <div
                  className={`projDes md:w-[400px] w-full  absolute ${
                    count % 2 === 0 ? "left" : "right"
                  }-0  z-40 `}
                >
                  <div
                    className={`md:w-full w-full z-40  float-${
                      count % 2 === 0 ? "left" : "right"
                    } md:h-[20%]   ${
                      !theme ? "bg-gray-100" : "bg-gray-900"
                    } shadow-lg rounded text-[16px] text-${
                      count % 2 === 0 ? "left" : "right"
                    } `}
                  >
                    <div className="w-full p-4 relative   ">{project.desc}</div>
                  </div>
                  <div className="md:w-full w-full flex  ">
                    <div
                      className={`w-full  text-[12px] py-4   text-${
                        count % 2 === 0 ? "left" : "right"
                      } flex flex-col gap-4 `}
                    >
                      <div
                        className={`w-full  md:text-auto flex  justify-${
                          count % 2 === 0 ? "start" : "end"
                        } `}
                      >
                        <div
                          className={`md:w-4/5 w-full flex items-center gap-2 flex-wrap 
                          `}
                        >
                          {project.createdon.split(" ").map((items) => (
                            <span className="py-[1px] px-2 bg-red-400 rounded hover:text-black">
                              {items}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`w-full flex gap-4 items-center justify-${
                          count % 2 === 0 ? "start" : "end"
                        } 
                        `}
                      >
                        <a href={project.link}>
                          <FaGithub
                            className={`hover:text-red-400 hover:text-[18px]`}
                          />
                        </a>
                        {project.webLink ? (
                          <a href={project.webLink}>
                            <FaLink
                              className={`hover:text-red-400 hover:text-[18px] `}
                            />
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full h-full md:basis-2/3 flex items-center justify-center   md:relative rounded  `}
            >
              <div className="h-fit-content w-full ">
                <div
                  className="absolute  w-full h-[80%] md:h-full  rounded  top-[20%] md:top-0 md:hover:z-[80] hover:scale-110 transition"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    border: "1px solid gray",
                  }}
                >
                  <div className="absolute w-full h-full bg-gray-600 md:opacity-[0.3] opacity-[0.8] md:hover:opacity-0 rounded"></div>
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
