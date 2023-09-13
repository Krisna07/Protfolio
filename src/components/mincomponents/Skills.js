import React from "react";

const Skills = (mode) => {
  const skills = [
    {
      title: "Langauge",
      item: "JavaScript",
      des: "Create interactive and responsive user interfaces using modern frameworks like React, Vue, or Angular.<br> Build and consume APIs to fetch and manipulate data from servers using libraries like Axios or Fetch Create and manage dynamic web pages with DOM manipulation and event handling.<br> Implement client-side validation and form handling for user input using JavaScript libraries like Formik or Yup.<br>Debug and troubleshoot JavaScript errors using browser development tools like Chrome DevTools or Firefox Developer Tools.",
    },
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
    <div className="w-full md:text-sm px-2  ">
      <div className="w-full flex items-center space-between my-4 text-3xl text-bold font-bold">
        <div className=" ">Skillset</div>
        <span className="w-full h-px bg-gray-400 ml-4"></span>
      </div>
      <div className="flex items-center content-center gap-2">
        <div className=" w-full flex items-center flex-col  gap-4 relative">
          {skills.map((skill) => {
            return (
              <div
                key={skill.title}
                className={` bg-${
                  mode.mode ? "gray-900" : "gray-100"
                }  rounded flex flex-col p-4  items-center w-full gap-2  `}>
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
    </div>
  );
};

export default Skills;
