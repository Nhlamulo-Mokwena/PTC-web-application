import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-blue p-25">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <h1 className="text-deep-green font-bold text-5xl">
            Empowering Communities Through Education
          </h1>
          <p className="text-[18px]">
            Accredited training that unlocks potential and transforms lives.
          </p>
          <Link 
            to={'/application-form'}
            className="bg-gold-yellow p-2 rounded-lg shadow font-medium w-40 hover:bg-amber-400"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
