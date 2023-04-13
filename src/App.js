import About from "./components/mincomponents/About";
import Contact from "./components/mincomponents/Contact";
import Greetings from "./components/mincomponents/Greetings";
import Nav from "./components/mincomponents/Nav";
import Projects from "./components/mincomponents/Projects";
import { FaSun, FaMoon, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import SideItems from "./components/mincomponents/SideItems";
import Skills from "./components/mincomponents/Skills";
import { saveAs } from "file-saver";
import resume from "./components/files/Resume.pdf";
import { Link } from "react-scroll";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.screenTop);
  const [light, setLight] = useState();
  useEffect(() => {
    setLight(window.matchMedia("(prefers-color-scheme:dark)").matches);
    window.addEventListener("scroll", handleScroll);
  }, []);
  document.querySelector("body").style.background = `${
    light ? "black" : "white"
  }`;
  const saveFile = () => {
    saveAs(resume, "Krishna_Paudel_resume.pdf");
  };

  return (
    <div
      className={` m-0 leading-relaxed ${
        !light ? "text-gray-800" : "bg-black text-white"
      } w-full md:flex flex-col items-center relative `}
    >
      <Link
        to="home"
        activeClass="active"
        spy={true}
        offset={-50}
        smooth={true}
        className="fixed bottom-10 right-10 bg-red-500 rounded z-[90] "
      >
        <button className=" md:bottom-10  bottom-[10px]  right-10 text-white ">
          <div className="flex items-center flex-col ">
            <FaArrowUp className="m-2 arrowup" />
          </div>
        </button>
      </Link>
      <div
        className={`w-full h-10 flex items-center justify-between  py-8  md:text-base text-xs  backdrop-blur  fixed top-0 z-[90] `}
      >
        <div className="px-4 text-[20px]">
          {light ? (
            <FaSun onClick={() => setLight(!light)} />
          ) : (
            <FaMoon onClick={() => setLight(!light)} />
          )}
        </div>
        <div className="md:w-3/4  flex items-center justify-center px-4   ">
          <Nav mode={light} offsetY={offsetY} saveFile={saveFile} />
        </div>
        <div
          className={` w-content relative flex flex-col items-center justify-center  active:text-red-400 mx-2`}
          onClick={saveFile}
        >
          <button
            className={`text-sm  px-4 py-1 border-[1px] flex bg-${
              !light ? "white" : "black"
            } items-center justify-center border-red-500 border-solid rounded hover:text-red-400 resumeBtn`}
          >
            Resume
          </button>
        </div>
      </div>
      <div className=" pt-[10vh]  items-center justify-center flex flex-col  z-10 overflow-y ">
        <section
          id="home"
          className="w-full min-h-[100vh]  flex items-center justify-center appshadow  relative leading-loose "
        >
          <div className="md:w-3/4 2xl:w-3/6">
            <Greetings theme={light} />
          </div>
        </section>
        <section
          id="about"
          className="w-full min-h-[100vh] py-16  grid place-items-center justify-center appshadow  relative leading-loose "
        >
          <div className="md:w-3/4 2xl:w-3/6 ">
            <About mode={light} />
          </div>
          <div className="md:w-3/4 2xl:w-3/6">
            <Skills mode={light} />
          </div>
        </section>
        <section
          id="projects"
          className="w-full flex flex-col items-center justify-center appshadow py-16"
        >
          <div className="md:w-3/4 2xl:w-3/6 ">
            <Projects theme={light} />
          </div>
        </section>

        <section
          id="contact"
          className="w-full min-h-[100vh] flex flex-col items-center justify-center appshadow "
        >
          <div className="md:w-3/4 2xl:w-3/6">
            <Contact theme={light} />
          </div>
        </section>
      </div>

      <footer className="py-4 text-gray-500 text-[8px] flex items-center justify-center ">
        <span>Designed and Developed by Krishna Paudel</span>
      </footer>
      <SideItems />
    </div>
  );
}

export default App;
