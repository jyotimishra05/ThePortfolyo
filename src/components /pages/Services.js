import React, {useState,useEffect } from 'react'
import { GrNext, GrPrevious } from "react-icons/gr";

const Services = ({data}) => {
    console.log("service",data)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addedValue, setAddedValue] = useState(3); 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth < 568) {
          setAddedValue(1);
        }
        else if (window.innerWidth < 985) {
          setAddedValue(2)
        }
         else {
          setAddedValue(3);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    

    const handleNext = () => {
      if (data && currentIndex < data?.length - 3) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  return (
    <div className="services vh-100">
      <h1 className="text-white text-center mt-5 mb-5">My Services!</h1>
      <div className="cardWrapper">
        <button
          onClick={handlePrevious}
          className="btn btn-primary d-flex align-items-center"
        >
          <GrPrevious />
        </button>
        {data &&
          data.slice(currentIndex, currentIndex + addedValue).map((item, i) => (
            <div className="card m-2" key={i}>
              <img src={item.image.url} className="card-img-top" alt="..." />
              <p className="text-center fs-5 fw-bold">{item.name}</p>
              <div className="card-body ">
                <h5 className="card-title fw-bold mt-5">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <p className="fw-bold">Price:{item.charge}</p>
              </div>
            </div>
          ))}
        <button
          onClick={handleNext}
          className="btn btn-primary d-flex align-items-center"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default Services
