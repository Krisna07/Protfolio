import React from "react";
import { FaGraduationCap, FaBuilding, FaCalendar } from "react-icons/fa";

const Timeline = (theme) => {
  const education = [
    {
      date: "2018",
      uni: "Australian Institute of Business and Technology",
      course: "Diploma/Advance Diploma of Information Technology",
    },
    {
      date: "2020",
      uni: "Victoria University",
      course: "Bachelors of Information Technology",
    },
  ];

  return (
    <div className="w-full my-4 ">
      <div className=" w-full">
        <div className="flex items-center text-xl text-bold font-bold">
          Education <span className="w-full h-px bg-gray-400 ml-4"></span>
        </div>
        <div className="flex flex-wrap md:w-full flex-col md:flex-row  sm:mx-auto sm:mb-2 -mx-2  ">
          {education.map((timeline) => (
            <div
              key={timeline.date}
              className="p-2 w-full md:w-1/2   realtive "
            >
              <div
                className={`title-font text-sm  w-full flex  shadow rounded  hover:shadow-xl md:flex-row flex-col items-center timeline  ${
                  !theme.theme ? "bg-white" : "bg-gray-900"
                } p-2 rounded md:border-t-2 md:border-t-0 border-red-500 `}
              >
                <div className=" text-sm relative flex items-center date border-b-2 border-red-500 md:-rotate-90 ">
                  <FaCalendar className="text-red-400  flex-wrap p-0 m-2" />
                  <span className="p-2  ">{timeline.date}</span>
                </div>
                <div className="p-4 desc ">
                  <div className="flex items-center uni">
                    <FaBuilding className="m-2 text-xl" />
                    {timeline.uni}
                  </div>
                  <div className="flex items-center course">
                    <FaGraduationCap className="m-2 text-2xl" />
                    {timeline.course}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
