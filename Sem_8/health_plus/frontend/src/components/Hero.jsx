import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            At Health+, we harness technology to deliver intelligent and accessible healthcare solutions. Our platform is designed to provide users with AI-powered disease predictions, personalized health recommendations, and real-time assistance.Our mission is to bridge the gap between technology and healthcare, making accurate diagnostics and preventive care more accessible to all.


          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
