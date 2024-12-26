import "./HeroSection.css";
import React from "react";

function HeroSection() {
  return (
    <section className="hero-section position-relative">
      <div className="bg-image">
        <div className="banner d-flex align-items-left justify-content-left text-left p-4">
          <div>
            <h1 className="display-3 text-white fw-bold mb-4">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </h1>
            <button className="consultation-btn text-uppercase">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
