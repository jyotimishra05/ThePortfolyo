import React from 'react'

const Skills = ({data}) => {
  return (
    <div>
      <h1 className="text-white text-center mt-5 mb-5">My Skills</h1>
      <div className="container mt-5">
        <div className="row">
          {data &&
            data.map((skill, index) => (
              <div key={index} className="col-md-3 mb-5 ">
                <img
                  src={skill.image.url}
                  alt={skill.name}
                  style={{ width: "90px" }}
                />
                <p className="text-yellow fw-bold fs-4">{skill.name}</p>

                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.percentage}%` }}
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.percentage}%
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Skills
