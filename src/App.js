import About from "./components/mincomponents/About";
import Contact from "./components/mincomponents/Contact";
import Greetings from "./components/mincomponents/Greetings";
import Nav from "./components/mincomponents/Nav";
import Projects from "./components/mincomponents/Projects";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import SideItems from "./components/mincomponents/SideItems";
import Skills from "./components/mincomponents/Skills";
import { saveAs } from "file-saver";
import resume from "./components/files/Resume.pdf";

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
  const [isScrolledDown, setIsScrolledDown] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div
      className={` m-0 leading-relaxed ${
        !light ? "text-gray-800" : "bg-black text-white"
      } w-full md:flex flex-col items-center relative `}
    >
      <div
        className={`w-full  md:flex grid place-items-center   gap-4 items-center justify-center md:justify-between appshadow py-2  md:text-base text-xs md:px-4  bg-${
          !light ? "white" : "black"
        } } fixed top-0 z-[999]`}
      >
        <div className="text-[20px]">
          {light ? (
            <FaSun onClick={() => setLight(!light)} />
          ) : (
            <FaMoon onClick={() => setLight(!light)} />
          )}
        </div>
        <div className=" flex items-center justify-center ">
          <Nav mode={light} offsetY={offsetY} />
        </div>
        <div
          className={`${
            !isScrolledDown ? "h-10" : "h-0"
          }  md:hidden overflow-hidden transition-all ease-in-out`}
        >
          <button
            className={`text-bold bg-red-500 px-2 py-1  rounded ${
              !isScrolledDown ? "opacity-1" : "opacity-0 md:opacity-1"
            }`}
            onClick={saveFile}
          >
            Resume
          </button>
        </div>
        <div
          className={`  md:flex hidden overflow-hidden transition-all ease-in-out`}
        >
          <button
            className={`text-bold bg-red-500 px-2 py-1  rounded `}
            onClick={saveFile}
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
