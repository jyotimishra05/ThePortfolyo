import React from 'react'
import Services from './Services';
import About from './About';
import Skills from './Skills';
import Projects from './Projects/Projects';
import Contact from './Contact';
import Review from './Review';
import Timeline from './Timeline';

const Home = ({data}) => {
    
  return (
    <div className="main">
      {data && (
        <>
          <div className="container">
            <div className="details">
              <div className="row justify-content-center align-items-center vh-100">
                <div className="details text-white  text-center">
                  <p className="my-auto fs-1">{data.about.name}</p>
                  <p className="fs-3">{data.about.subTitle}</p>
                  <p className="my-auto fs-2">
                    <span className="text-yellow">{data.about.title}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src={data.about.avatar.url}
                className="rounded-circle img-fluid img-hover"
                alt="avatar"
              ></img>
            </div>
          </div>
          <hr className="text-white" />
          <Services data={data.services} />
          <hr className="text-white" />
          <About data={data.about} />
          <hr className="text-white" />
          <Timeline data={data.timeline} />
          <hr className="text-white" />
          <Skills data={data.skills} />
          <hr className="text-white" />
          <Projects data={data.projects} />
          <hr className="text-white" />
          <Review data={data.testimonials} />
          <hr className="text-white" />
          <Contact data={data.social_handles} />
        </>
      )}
    </div>
  );
}

export default Home


