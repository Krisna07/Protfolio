import React from 'react'
import "./Threedcard.css"

const ThreedCard = ({project}) => {
  return (

    <div className="three-d-container">
      <div className=" three-d-text">
          <h2>{project.name}</h2>
          <span className='text-justify'> {project.desc} </span>
          <div>
            <button>Read more</button>
          </div>
        </div>
      <div className="cube">
     
        <div className="face top" > </div>
        <div className="face bottom"></div>
        <div className="face front"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face back"></div>
      </div>
    </div>
  );
};




export default ThreedCard