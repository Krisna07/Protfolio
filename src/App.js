import About from "./components/mincomponents/About";
import Contact from "./components/mincomponents/Contact";
import Greetings from "./components/mincomponents/Greetings";
import Nav from "./components/mincomponents/Nav";
import Projects from "./components/mincomponents/Projects";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [light, setLight] = useState();
  useEffect(() => {
    setLight(window.matchMedia("(prefers-color-scheme:dark)").matches);
    window.addEventListener("scroll", handleScroll);
    console.log(offsetY);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`App m-0  ${
        !light ? "text-gray-800" : "bg-gray-800 text-white"
      } w-full md:flex flex-col items-center relative `}
    >
      <div
        className={`w-full h-10 flex items-center  border-1 border-b border-gray-${
          !light ? "300" : "700"
        }   m-auto md:text-base text-xs   bg-${
          !light ? "white" : "gray-800"
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
      <div className="md:w-3/4 2xl:2/6 w-full md:pt-0  flex flex-col gap-y-20 z-10">
        <Greetings theme={light} />
        <About mode={light} />
        <Projects />
        <Contact theme={light} />
      </div>

      <div className="w-16 h-1/2  fixed bottom-0 left-16 md:flex flex-col items-center hidden">
        <div className="h-96 md:flex flex-col items-center justify-between p-4 hidden text-lg ">
          <a
            href="https://github.com/Krisna07"
            className="border border-solid border-gray-400 p-1 rounded"
          >
            <FaGithub className="hover:text-red-400 hover:text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/krishna-paudel-4724541b1/"
            className="border border-solid border-gray-400 p-1 rounded"
          >
            <FaLinkedinIn className="hover:text-red-400 hover:text-xl" />
          </a>
          <a
            href="https://twitter.com/krishnapaudel07"
            className="border border-solid border-gray-400 p-1 rounded"
          >
            <FaTwitter className="hover:text-red-400 hover:text-xl" />
          </a>
        </div>
        <span className="w-px h-full bg-gray-400 mx-3"></span>
      </div>
      <div className="w-16 h-1/2 fixed bottom-0 right-16 md:flex flex-col items-center hidden">
        <div className="h-96 md:flex  items-center justify-center py-4 m-4  hidden text-lg rotate-90">
          <a href="mailto:krisnachhetri07@gmail.com">
            krisnachhetri07@gmail.com
          </a>
        </div>
        <span className="w-px h-full bg-gray-400 mx-3"></span>
      </div>
    </div>
  );
}

export default App;
