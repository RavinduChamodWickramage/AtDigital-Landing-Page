import "./Footer.css";
import React from "react";

const Footer = () => {
  const technologies = ["ReactJS", "Gatsby", "NextJS", "NodeJS"];
  const services = [
    "Social Media Marketing",
    "Web & Mobile App Development",
    "Data & Analytics",
  ];

  return (
    <footer className="footer text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <h2 className="h4 mb-0">AT DIGITAL</h2>
            </div>
            <p className="mb-0">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>

          <div className="col-md-3 mb-3 mb-md-0"></div>

          <div className="col-md-3 mb-3 mb-md-0">
            <h3 className="h5 mb-3">Our Technologies</h3>
            <ul className="list-unstyled">
              {technologies.map((tech, index) => (
                <li key={index} className="mb-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="h5 mb-3">Our Services</h3>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="border-top pt-4">
              <nav className="d-flex justify-content-center">
                <a
                  href="/privacy"
                  className="text-white text-decoration-none me-3"
                >
                  Privacy Policy
                </a>
                <span className="text-white mx-2">|</span>
                <a href="/terms" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
