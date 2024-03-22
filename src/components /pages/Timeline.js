// src/Timeline.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Timeline({data}) {

    const[appear,setAppear] = useState(true)

    const education= data.filter((items)=> items.forEducation===true)
    // console.log(Education)
    const experience = data.filter((items) => items.forEducation === false);
  
  
  return (
    <div>
      <h1 className="text-white text-center mt-5 mb-5">Timeline</h1>
      <div className="d-flex justify-content-center ">
        <div className="col-md-3 ms-2 btn btn-primary">
          <h3 onClick={() => setAppear(true)}>Education</h3>
        </div>
        <div className="col-md-3 ms-2 btn btn-primary">
          <h3 onClick={() => setAppear(false)}>Experience</h3>
        </div>
      </div>
      <div className="container py-5 text-white justify-content-center">
        <div className="d-flex justify-content-center timelineCard ">
          {data && appear ? (
            <div className="col-md-9 p-4">
              <p className="text-center mb-3 fw-bold fs-5 textUnderLine">
                Education
              </p>
              <ul className="list-unstyled">
                {education.map((item) => (
                  <li key={item.id} className="mb-4">
                    <h4>Company : {item.company_name}</h4>
                    <p>Location : {item.jobLocation}</p>
                    <p>Role : {item.jobTitle}</p>
                    <p>Description : {item.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="col-md-9 p-4">
              <h3 className="text-center mb-3 fw-bold fs-5 textUnderLine">
                Experience
              </h3>
              <ul className="list-unstyled">
                {experience.map((item) => (
                  <li key={item.id} className="mb-4">
                    <h4>Company : {item.company_name}</h4>
                    <p>Location : {item.jobLocation}</p>
                    <p>Role : {item.jobTitle}</p>
                    <p>Description : {item.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
