import About from "./components/mincomponents/About";
import Contact from "./components/mincomponents/Contact";
import Greetings from "./components/mincomponents/Greetings";
import Nav from "./components/mincomponents/Nav";
import Projects from "./components/mincomponents/Projects";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import SideItems from "./components/mincomponents/SideItems";
import Skills from "./components/mincomponents/Skills";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [light, setLight] = useState();
  useEffect(() => {
    setLight(window.matchMedia("(prefers-color-scheme:dark)").matches);
    window.addEventListener("scroll", handleScroll);
  }, []);
  document.querySelector("body").style.background = `${
    light ? "black" : "white"
  }`;

  return (
    <div
      className={`App m-0  ${
        !light ? "text-gray-800" : "bg-black text-white"
      } w-full md:flex flex-col items-center relative `}
    >
      <div
        className={`w-full h-10 flex items-center appshadow   m-auto md:text-base text-xs   bg-${
          !light ? "white" : "black"
        } } fixed top-0 z-[999]`}
      >
        <div className="basis-1/4 px-4 text-[20px]">
          {light ? (
            <FaSun onClick={() => setLight(!light)} />
          ) : (
            <FaMoon onClick={() => setLight(!light)} />
          )}
        </div>
        <div className="basis-3/4 px-4  ">
          <Nav mode={light} />
        </div>
      </div>
      <div className="w-full pt-[10vh]  items-center  flex flex-col z-10 divide">
        <section
          id="home"
          className="w-full flex items-center justify-center appshadow p-4  "
        >
          <div className="md:w-3/4 2xl:w-3/6">
            <Greetings theme={light} />
          </div>
        </section>
        <section
          id="about"
          className="w-full flex items-center justify-center appshadow p-4  "
        >
          <div className="md:w-3/4 2xl:w-3/6">
            <About mode={light} />
          </div>
        </section>
        <section
          id="projects"
          className="w-full flex items-center justify-center appshadow p-4  "
        >
          <div className="md:w-3/4 2xl:w-3/6">
            <Projects theme={light} />
          </div>
        </section>
        <section className="w-full flex items-center justify-center appshadow py-4  ">
          <div className="md:w-3/4 2xl:w-3/6 w-full m-4">
            <Skills />
          </div>
        </section>
        <section id="contact" className="md:w-3/4 2xl:w-3/6 ">
          <Contact theme={light} />
        </section>
      </div>
      <div className="py-4 text-gray-500 text-[8px] ">
        <span>Designed and Developed by Krishna Paudel</span>
      </div>
      <SideItems />
    </div>
  );
}

export default App;
