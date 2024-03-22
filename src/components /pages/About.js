import React from 'react'

const About = ({data}) => {
    console.log("about",data)
  return (
    <div>
      <h1 className="text-white text-center mt-5 mb-5">About Me</h1>
      {data && (
        <div className="row m-4">
          <div className="col-md-6 about-image">
            <img
              src={data.avatar.url}
              className="rotate-on-hover"
              alt="avatar"
            ></img>
          </div>
          <div className="col-md-6 text-white">
            <p className=" fs-3">{data.subTitle}</p>
            <p className="">{data.description}</p>
            <div className="row fw-bold text-yellow">
              <div className="col-md-6 ">
                <p>Name: {data.name}</p>
                <p>Phone-Number: {data.phoneNumber}</p>
              </div>
              <div className="col-md-6 ">
                <p>Role :{data.title}</p>
                <p>Total-Experience: {data.exp_year}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About
