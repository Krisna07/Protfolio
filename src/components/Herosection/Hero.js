import React from "react";

import { FaCloudMoon, FaCss3, FaEthereum, FaHtml5, FaLinkedin, FaSchool, FaTwitter, } from "react-icons/fa";
import { BiData, BiEnvelope, BiLogoJavascript } from 'react-icons/bi'

export default function Hero() {
    const tabStyle = "cursorstyle preventSelect font-semibold leading-[120%] text-[14px] space-2 tracking-wide py-1 px-4 box-shadow rounded uppercase flex items-center gap-2 transition-all duration-[1s] hover:bg-gray-700 hover:text-white"
    const itemsStyle = "w-full grid grid-cols-[200px_80%]"
    return <div className="mt-32 px-16 grid gap-8 transformMainDiv">
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
                        <span className="flex gap-2 items-center"><FaHtml5 /> HTML</span>
                        <span className="flex gap-2 items-center"><BiLogoJavascript /> Javascript</span>
                        <span className="flex gap-2 items-center"><FaCss3 /> CSS</span>
                    </div>
                </div>
                <div className={itemsStyle}>
                    <span className="font-semibold opacity-[.6] hover:opacity-[1] transition-all ease duration-[300ms]">Education</span>
                    <div className="w-full flex items-center gap-4">
                        <span className="flex gap-2 items-center"><FaSchool /> Bachelor of IT</span>
                    </div>
                </div>
                <div className={itemsStyle}>
                    <span className="font-semibold opacity-[.6] hover:opacity-[1] transition-all ease duration-[300ms]">Contact</span>
                    <div className="w-full flex items-center gap-4">
                        <span className="flex gap-2 items-center"><FaTwitter /> Twitter</span>
                        <span className="flex gap-2 items-center"><FaLinkedin /> Linkedin</span>
                        <span className="flex gap-2 items-center"><BiEnvelope /> Email</span>
                    </div>
                </div>
                <div className={itemsStyle}>
                    <span className="font-semibold opacity-[.6] hover:opacity-[1] transition-all ease duration-[300ms]">Learning</span>
                    <div className="w-full flex items-center gap-4">
                        <span className={tabStyle}><FaEthereum /> Web 3</span>
                        <span className={tabStyle}><BiData /> DBMS</span>
                        <span className={tabStyle}><FaCloudMoon />3d Design</span>

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


}