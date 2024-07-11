// import About from "./components/mincomponents/About";
// import Contact from "./components/mincomponents/Contact";
// import Greetings from "./components/mincomponents/Greetings";
// import Nav from "./components/mincomponents/Nav";
// import Projects from "./components/mincomponents/Projects";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import SideItems from "./components/mincomponents/SideItems";
// import Skills from "./components/mincomponents/Skills";
// import { saveAs } from "file-saver";
// import resume from "./components/files/Resume.pdf";
// import ThreeDProject from "./components/NewComponents/ThreeDProject";

import { useRef } from "react";
import { FaCloudMoon, FaCss3, FaDiceSix, FaDrumstickBite, FaEthereum, FaFileSignature, FaHtml5, FaLinkedin, FaMagnet, FaPalette, FaPenNib, FaPhoneAlt, FaRProject, FaReact, FaSchool, FaTwitter } from "react-icons/fa"
import { BiData, BiEnvelope, BiLogoJavascript, BiMusic } from 'react-icons/bi'

function App() {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.screenTop);
  // const [light, setLight] = useState();
  // useEffect(() => {
  //   setLight(window.matchMedia("(prefers-color-scheme:dark)").matches);
  //   window.addEventListener("scroll", handleScroll);
  // }, []);
  // document.querySelector("body").style.background = `${
  //   light ? "black" : "white"
  // }`;
  // const saveFile = () => {
  //   saveAs(resume, "Krishna_Paudel_resume.pdf");
  // };
  // const [isScrolledDown, setIsScrolledDown] = useState(true);
  // const [prevScrollY, setPrevScrollY] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > prevScrollY) {
  //       setIsScrolledDown(true);
  //     } else {
  //       setIsScrolledDown(false);
  //     }
  //     setPrevScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollY]);

  const contentRef = useRef(null)
  const tabStyle = "cursorstyle preventSelect font-semibold leading-[120%] text-[14px] space-2 tracking-wide py-1 px-4 box-shadow rounded uppercase flex items-center gap-2 transition-all duration-[1s] hover:bg-gray-700 hover:text-white"
  const itemsStyle = "w-full grid grid-cols-[200px_80%]"
  return (
      <div className="w-full h-[100vh] overflow-hiddden grid place-items-center box-border p-4 ">
          <div className="w-full laptop:w-[1000px] h-full   border-2 border-gray-400 rounded-lg shadow-[0_0_4px_0_gray] grid">
           <div ref={contentRef} className="w-full h-full">
            <div className="w-full border-b-2 border-gray-200 p-2 flex items-center justify-between">
              <div className={tabStyle}><FaPalette size={12} /> Portfolio</div>
             <div className="flex gap-4"> 
              <div className={tabStyle}><FaPenNib size={12}/> About</div>
             <div className={tabStyle}><FaRProject size={12}/> Projects</div>
              <div className={tabStyle}><FaPhoneAlt size={12}/> Contact</div></div>
              <div className={tabStyle}>Resume</div>
            </div>
            <div className="mt-32 px-16 grid gap-8 transformMainDiv">
              <div className="grid gap-4">
                <div className="w-8 h-8 rounded border"></div>
                <div className="grid gap-2 leading-[100%]">
                  <span className="text-3xl font-[900]">Krishna Paudel</span>
                  <span>Designing and building technology</span>
                </div>
                <div className="grid gap-2">
                  <div className={itemsStyle}>
                    <span className="font-semibold opacity-[.6] hover:opacity-[1] transition-all ease duration-[300ms]">Langauges</span>
                    <div className="w-full flex items-center gap-4">
                      <span className="flex gap-2 items-center"><FaHtml5/> HTML</span>
                      <span className="flex gap-2 items-center"><BiLogoJavascript/> Javascript</span>
                      <span className="flex gap-2 items-center"><FaCss3/> CSS</span>
                  </div>
                  </div>
                  <div className={itemsStyle}>
                    <span className="font-semibold opacity-[.6] hover:opacity-[1] transition-all ease duration-[300ms]">Education</span>
                    <div className="w-full flex items-center gap-4">
                    <span className="flex gap-2 items-center"><FaSchool/> Bachelor of IT</span>
                   </div>
                  </div>
                  <div className={itemsStyle}>
                    <span className="font-semibold opacity-[.6] hover:opacity-[1] transition-all ease duration-[300ms]">Contact</span>
                    <div className="w-full flex items-center gap-4">
                    <span className="flex gap-2 items-center"><FaTwitter/> Twitter</span>
                    <span className="flex gap-2 items-center"><FaLinkedin/> Linkedin</span>
                    <span className="flex gap-2 items-center"><BiEnvelope/> Email</span>
                   </div>
                  </div>
                  <div className={itemsStyle}>
                    <span className="font-semibold opacity-[.6] hover:opacity-[1] transition-all ease duration-[300ms]">Learning</span>
                    <div className="w-full flex items-center gap-4">
                    <span className={tabStyle}><FaEthereum/> Web 3</span>
                    <span className={tabStyle}><BiData/> DBMS</span>
                    <span className={tabStyle}><FaCloudMoon/>3d Design</span>

                   </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
              <span className="text-2xl font-semibold">About Me</span>
              <p className="text-justify" >
              Back in 2020 I started learning web development with JavaScript as my main langauge. While learning JavaScript I came to know about React and started experimenting. As I learnt more, I fell in love with all the possibilities of things you could create with it.
              2022, with my bachelors degree I finally polished and developed skills require for frontend web developement. I love turning designs into beautiful, interactive and accessible experiences with attention to the smallest of details. I strongly believe in writing clean and scalable code. As of my competent in web development, I am ready to take on new challenges and opportunities.
              So, if you like my work and feel like you have a role that could fit, feel free to reach out.
              </p>
              
              </div>
            </div>
            </div> 
          </div>

           

      </div>


  )
    // <div
    //   className={` m-0 leading-relaxed ${
    //     !light ? "text-gray-800" : "bg-black text-white"
    //   } w-full md:flex flex-col items-center relative `}
    // >
    //   <div
    //     className={`w-full  md:flex grid place-items-center   gap-4 items-center justify-center md:justify-between appshadow py-2  md:text-base text-xs md:px-4  bg-${
    //       !light ? "white" : "black"
    //     } } fixed top-0 z-[999]`}
    //   >
    //     <div className="text-[20px]">
    //       {light ? (
    //         <FaSun onClick={() => setLight(!light)} />
    //       ) : (
    //         <FaMoon onClick={() => setLight(!light)} />
    //       )}
    //     </div>
    //     <div className=" flex items-center justify-center ">
    //       <Nav mode={light} offsetY={offsetY} />
    //     </div>
    //     <div
    //       className={`${
    //         !isScrolledDown ? "h-10" : "h-0"
    //       }  md:hidden overflow-hidden transition-all ease-in-out`}
    //     >
    //       <button
    //         className={`text-bold bg-red-500 px-2 py-1  rounded  ${
    //           !isScrolledDown ? "opacity-1" : "opacity-0 md:opacity-1"
    //         }`}
    //         onClick={saveFile}
    //       >
    //         Resume
    //       </button>
    //     </div>
    //     <div
    //       className={`  md:flex hidden overflow-hidden transition-all ease-in-out`}
    //     >
    //       <button
    //         className={`text-bold bg-red-500 px-2 py-1  rounded `}
    //         onClick={saveFile}
    //       >
    //         Resume
    //       </button>
    //     </div>
    //   </div>
    //   <div className=" pt-[10vh]  items-center justify-center flex flex-col  z-10 overflow-y ">
    //     <section
    //       id="home"
    //       className="w-full min-h-[100vh]  flex items-center justify-center appshadow  relative leading-loose "
    //     >
    //       <div className="md:w-3/4 2xl:w-3/6">
    //         <Greetings theme={light} />
    //       </div>
    //     </section>
    //     <section
    //       id="about"
    //       className="w-full min-h-[100vh] py-16  grid place-items-center justify-center appshadow  relative leading-loose "
    //     >
    //       <div className="md:w-3/4 2xl:w-3/6 ">
    //         <About mode={light} />
    //       </div>
    //       <div className="md:w-3/4 w-full 2xl:w-3/6">
    //         <Skills mode={light} />
    //       </div>
    //     </section>
    //     <section
    //       id="projects"
    //       className="w-full flex flex-col items-center justify-center appshadow py-16"
    //     >
    //       <div className="md:w-3/4 w-full p-2 2xl:w-3/6 ">
    //         {/* <Projects theme={light} /> */}
    //         <ThreeDProject/>
    //       </div>
    //     </section>

    //     <section
    //       id="contact"
    //       className="w-full min-h-[100vh] flex flex-col items-center justify-center appshadow "
    //     >
    //       <div className="md:w-3/4 2xl:w-3/6">
    //         <Contact theme={light} />
    //       </div>
    //     </section>
    //   </div>

    //   <footer className="py-4 text-gray-500 text-[8px] flex items-center justify-center ">
    //     <span>Designed and Developed by Krishna Paudel</span>
    //   </footer>
    //   <SideItems />
    // </div>
  // );
}

export default App;
