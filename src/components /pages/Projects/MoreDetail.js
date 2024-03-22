import React from 'react'

const MoreDetail = ({ setShowCard,project }) => {
  return (
    <div className="detailCard text-white d-flex flex-column justify-content-center ">
      <p className="fw-bold ms-3 mt-4 ">TechStack : {project.techStack}</p>
      <p className='ms-3'>
        Description:
        {project.description
          ? project.description
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel massa quis eros feugiat aliquet. Nullam a libero facilisis mi placerat suscipit eu vitae ex."}
      </p>
      <button className="btn btn-primary m-5" onClick={() => setShowCard(false)}>
        Go-Back
      </button>
    </div>
  );
};

export default MoreDetail
