import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Web & Mobile App Development",
      description:
        "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
      image: "../../../Assets/Development.png",
    },
    {
      title: "Digital Strategy Consulting",
      description:
        "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
      image: "../../../Assets/Consulting.png",
    },
  ];

  return (
    <div className="container services-container">
      {services.map((service, index) => (
        <div className="row" key={index}>
          <div
            className={`col-12 col-sm-6 d-flex ${
              index % 2 === 0
                ? "justify-content-center"
                : "flex-column justify-content-center"
            }`}
          >
            {index % 2 === 0 ? (
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid"
              />
            ) : (
              <>
                <h2 className="title">{service.title}</h2>
                <p>{service.description}</p>
                <button className="btn service-btn">Learn More</button>
              </>
            )}
          </div>
          <div
            className={`col-12 col-sm-6 d-flex ${
              index % 2 === 0
                ? "flex-column justify-content-center"
                : "justify-content-center"
            }`}
          >
            {index % 2 !== 0 ? (
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid"
              />
            ) : (
              <>
                <h2 className="title">{service.title}</h2>
                <p>{service.description}</p>
                <button className="btn service-btn">Learn More</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
