import React from "react";

function Contact({data}) {
  console.log(data)
  return (
    <div>
      <h2 className="text-center text-white mt-5 mb-4">Contact Us</h2>
      <div className="container text-white">
        <div className="col-12">
          <form>
            <div className="form-group">
              <label htmlFor="name">
                <p className="fw-bold fs-5 mt-3">Name :</p>
              </label>
              <input
                type="text"
                className="form-control bg-warning"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <p className="fw-bold fs-5 mt-3">Email Address :</p>
              </label>
              <input
                type="email"
                className="form-control bg-warning"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <p className="fw-bold fs-5 mt-3">Message :</p>
              </label>
              <textarea
                className="form-control bg-warning"
                id="message"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary m-5 col-md-2">
                Submit
              </button>
            </div>
          </form>
          <p className="d-flex justify-content-center fw-bold">
            Get in Touch with us!
          </p>
          <div className="d-flex justify-content-center ">
            {data &&
              data.map((socialM, i) => (
                <div key={i} className="ms-3" style={{cursor:"pointer"}}>
                  <img
                    src={socialM.image.url}
                    alt="Logo"
                    width="30"
                    height="30"
                  />
                  <p></p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
