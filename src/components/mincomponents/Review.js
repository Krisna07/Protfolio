import React from "react";

const Review = ({ message }) => {
  return (
    <div className="w-[45%] bg-gray-400 rounded-[8px] flex text-left gap-4 p-2 items-center">
      <div className="w-8 h-8 rounded-[50%] bg-gray-200 flex gap-[2px]"></div>
      <div className="flex flex-col gap-2 text-black">
        <div className="text-xl  ">{message.name}</div>
        <div>{message.content}</div>
      </div>
    </div>
  );
};

export default Review;
