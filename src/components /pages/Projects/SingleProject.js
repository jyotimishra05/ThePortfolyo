import React, { useState } from "react";
import MoreDetail from "./MoreDetail";

const SingleProject = ({ project }) => {
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(true);
  };

  return (
    <div>
      <div style={{ display: showCard ? "none" : "block" }}>
        <img
          src={project.image.url}
          className="card-img-top mb-4 mt-4 border border-warning p-2"
          alt="Card"
        />
        <div className="text-white fs-4 fw-bold text-center mb-4 mt-4">
          {project.title}
        </div>
        <div className="button-container text-center">
          <button className="btn btn-warning mb-4" onClick={handleClick}>
            Click For More Detail
          </button>
        </div>
      </div>
      {showCard && <MoreDetail setShowCard={setShowCard} project={project} />}
    </div>
  );
};

export default SingleProject;
