import React from 'react'
import ThreedCard from './ThreedCard';
import todoImage from "../images/todoapp.jpg";
import rsImage from "../images/stripeclone.jpg";
import lfImage from "../images/linkify.png";

import dsImage from "../images/card.jpeg";

const ThreeDProject = () => {

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
    <div className='w-full grid gap-4  '>
        <h2 className='uppercase text-[30px] font-bold'>Something I have build</h2>
        <div className='w-full box-border grid grid-cols-2 gap-4 relative'>
            {projects.map((project)=><ThreedCard key={project.name} project={project}/>)}
        </div>
    </div>
  )
}

export default ThreeDProject