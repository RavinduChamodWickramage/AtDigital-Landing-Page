import React from "react";
import "./Services.css";


function Services() {
  return (
    <div className="container services-container">
      <div className="row">
        <div className="col-12 col-sm-6 d-flex justify-content-center">
          <img
            src="../../../Assets/Development.png"
            alt="Development"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-sm-6 d-flex flex-column justify-content-center">
          <h2 className="title">Web & Mobile App Development</h2>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button className="btn service-btn">Learn More</button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6 d-flex flex-column justify-content-center">
          <h2 className="title">Digital Strategy Consulting</h2>
          <p>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button className="btn service-btn">Learn More</button>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center">
          <img
            src="../../../Assets/Consulting.png"
            alt="Consulting"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
