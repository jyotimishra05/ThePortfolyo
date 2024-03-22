import React, { useEffect, useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr';

const Review = ({data}) => {
  const[index,setIndex]=useState(0)
  console.log("data",data)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === data?.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [data?.length]);

  const goToPrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data?.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIndex((prevIndex) =>
      prevIndex === data?.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='vh-100'>
      <h1 className="text-white text-center mt-5 mb-5">Happy Client Works!</h1>

      <div id="carouselExample" className="carousel slide innerC ">
        <button onClick={goToPrev} className="btn btn-primary m-2">
          <GrPrevious />
        </button>
        <div className="carousel-inner ">
          {data &&
            data.map((testimonial, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === index ? "active" : ""}`}
              >
                <div>
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <img
                        src={testimonial.image.url}
                        className="d-block w-80 border border-black p-2"
                        height="200"
                        alt="..."
                      ></img>
                      <p className="fw-bold fs-3 mt-5 text-danger">
                        {testimonial.position}
                      </p>
                      <p className="mt-2">
                        {testimonial.review.slice(0, 250)}.
                      </p>
                      <h4 className="fw-bold">{testimonial.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button className="btn btn-primary m-2" onClick={goToNext}>
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default Review



  /*/ <div className="container py-5">
      //   <div className="row">
          {data.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-6 mb-4">
              <div className="testimonial">
                <div className="testimonial-content text-white">
                  <p className="testimonial-text">{testimonial.review}</p>
                  <h5 className="testimonial-name">{testimonial.name}</h5>
                </div>
              </div>
            </div>
          ))}
      //   </div>
  // </div>*/




  // <button
  //         className="carousel-control-prev"
  //         type="button"
  //         onClick={goToPrev}
  //       >
  //         <span
  //           className="carousel-control-prev-icon"
  //           aria-hidden="true"
  //         ></span>
  //         <span className="visually-hidden">Previous</span>
  //       </button>

  //       <button
  //         className="carousel-control-next"
  //         type="button"
  //         onClick={goToNext}
  //       >
  //         <span
  //           className="carousel-control-next-icon"
  //           aria-hidden="true"
  //         ></span>
  //         <span className="visually-hidden">Next</span>
  //       </button>