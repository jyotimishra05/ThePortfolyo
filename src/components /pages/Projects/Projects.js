import React from 'react'
import SingleProject from './SingleProject'

const Projects = ({data}) => {
console.log("projects",data)
  // const filterData = data.filter((item)=>item.enabled===true)
  // console.log(filterData)

  return (
    <div>
      <h1 className="text-white text-center mt-5 mb-5">My Projects</h1>
      <div className="container">
        <div className="row">
          {data && data.map((project, index) => (
            <div className="col-md-4 mb-2 " key={index}>
              <SingleProject project={project} index={index}/>
             </div>
            
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects


// <div className="card-body text-yellow fw-bold">
//                   <h5 className="card-title">{project.title}</h5>
//                   <p className="card-text">TechStack : {project.techStack}</p>
//                 </div>