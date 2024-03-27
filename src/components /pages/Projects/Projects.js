// import React from 'react'
// import SingleProject from './SingleProject'

// const Projects = ({data}) => {
//   // console.log("projects",data.reverse())
//   // const filterData = data.filter((item)=>item.enabled===true)
//   // console.log(filterData)

  

//   return (
//     <div>
//       <h1 className="text-white text-center mt-5 mb-5">My Projects</h1>
//       <div className="container">
//         <div className="row">
//           {data && [...data].reverse().map((project, index) => (
//             <div className="col-md-4 mb-2 " key={index}>
//               <SingleProject project={project} index={index} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects


// // <div className="card-body text-yellow fw-bold">
// //                   <h5 className="card-title">{project.title}</h5>
// //                   <p className="card-text">TechStack : {project.techStack}</p>
// //                 </div>




import React, { useState } from "react";
import SingleProject from "./SingleProject";

const Projects = ({ data }) => {
  const [filter, setFilter] = useState("");

  // Reverse the order of projects
  const reversedProjects = data ? [...data].reverse() : [];

  // Filter projects based on the selected tech stack
  const filteredProjects = reversedProjects
    ? filter
      ? reversedProjects.filter((project) => (project.techStack).toString() === filter)
      : reversedProjects
    : [];

  // Get unique tech stacks for options in the select dropdown
  const techStacks = [...new Set(data.map((project) => project.techStack))];
  const uniqueTechStacks = Array.from(
    new Set(techStacks.map(JSON.stringify)),
    JSON.parse
  );
  // console.log("data",data)
  // console.log("tech",uniqueTechStacks)

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    
    setFilter(selectedFilter);
  };
// console.log("Selected Filter:", filter);
  // console.log("Filtered Projects:", filteredProjects);

  return (
    <div>
      <h1 className="text-white text-center mt-5 mb-5">My Projects</h1>

      <div className="container">
        <div className="d-flex flex-column mb-4 mt-4">
          <div className="row mb-3 justify-content-end">
            <div className="col-md-4 mb">
              <select
                className="form-select"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="" className="text-dark">
                  All Tech Stacks
                </option>
                {uniqueTechStacks.map((stack) => (
                  <option key={stack} value={stack}>
                    {stack}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row ">
            {filteredProjects.map((project, index) => (
              <div className="col-md-4 " key={index}>
                <SingleProject project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
