import React, { useState } from 'react'
import MoreDetail from './MoreDetail';

const SingleProject = ({project,index}) => {
    const [showCard, setShowCard] = useState(false);
    // console.log("data",data.reverse())
    const handleClick = () => {
      setShowCard(true);
      console.log("clicked");
    };
  return (
    <div >
      <div
        
        key={index}
        style={{ display: showCard ? "none" : "block" }}
      >
        <img
          src={project.image.url}
          className="card-img-top mb-4 mt-4"
          alt="Card"
        />

        <div className="button-container text-center">
          <button className="btn btn-warning" onClick={handleClick}>
            {project.title}
          </button>
        </div>
      </div>
      {showCard && <MoreDetail setShowCard={setShowCard} project={project}/>}
    </div>
  );
}

export default SingleProject
