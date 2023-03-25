import React from "react";

const Subheadings = ({ subHeading }) => {
  return (
    <div className="flex items-center space-between my-4 text-3xl text-bold font-bold">
      <div className={`min-w-[max-content]`}>{subHeading}</div>
      <span className="w-full h-px bg-gray-400 ml-4"></span>
    </div>
  );
};

export default Subheadings;
