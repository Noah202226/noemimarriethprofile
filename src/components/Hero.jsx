import React from "react";

import heroImage from "../assets/hero-content.png";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold font-sans animate-rotate-in text-shadow">
            Hello Clients!
          </h1>
          <p className="py-6 animate-slide-in-left">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className="btn btn-primary animate-scale-in"
            onClick={() => {}}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
