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
      item: "NextJS, React, Rest API, Express, Prisma,  TailwindCSS",
      des: " Build and deploy performant and scalable web applications using Next.js, a popular React framework for server-side rendering and static site generation.<br> Create reusable and maintainable components using React, a JavaScript library for building user interfaces.<br> Design and implement RESTful APIs using Express, a Node.js framework for building web applications.<br> Create and manage databases using Prisma, a powerful ORM for Node.js and TypeScript.<br> Style web pages using Tailwind CSS, a utility-first CSS framework for rapid development.",
    },
    {
      title: "Tools",
      item: "Git, GitHub, VS Code, Figma, Postman",
      des: " Use Git and GitHub for version control and collaboration.<br> Write clean, maintainable, and efficient code using VS Code, a popular code editor.<br> Design and prototype user interfaces using Figma, a collaborative design tool.<br> Test and debug APIs using Postman, a popular API client.",
    },
    {
      title: "Testing",
      item: "Jest, Cypress",
      des: "Write unit and integration tests using Jest, a popular JavaScript testing framework.<br> Perform end-to-end testing using Cypress, a tool for testing web applications.",
    },
    {
      title: "Deployment",
      item: "Vercel, Netlify, Heroku",
      des: " Deploy web applications to Vercel, a platform for deploying static and server-rendered websites.<br> Deploy web applications to Netlify, a platform for deploying static websites and serverless functions.<br> Deploy web applications to Heroku, a platform for deploying web applications in the cloud.",
    },
    {
      title: "Database",
      item: "MongoDB, MySQL, PostgreSQL",
      des: " Design and implement databases using MongoDB, a NoSQL database for storing and managing document-oriented data.<br> Design and implement databases using MySQL, a relational database for storing and managing structured data.<br> Design and implement databases using PostgreSQL, a powerful and versatile relational database.",
    },
    {
      title: "Version Control",
      item: "Git, GitHub, Bitbucket",
      des: " Use Git for version control and collaboration.<br> Use GitHub for hosting Git repositories and collaborating with other developers.<br> Use Bitbucket for hosting Git repositories and collaborating with other",
    },
    {
      title: "Learning",
      item: " Web3, Solidity, Ethereum",
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
                }  rounded flex flex-col p-4  items-center w-full gap-2  `}
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
    </div>
  );
};

export default Skills;
