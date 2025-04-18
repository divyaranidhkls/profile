import React from 'react';
import AboutInterests from './AboutInterests';
import AboutText from './AboutText';

const AboutBlock = () => {
  return (
    <div id="about" className="container mx-auto px-4 ">
      <p className="text-4xl font-extrabold text-center mb-1 tracking-widest">
        ABOUT ME
      </p>
      <p className="text-center mb-4 italic pt-1">
        Discover my professional interests, personal passions, and the hobbies that drive my creativity and continuous learning.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start mt-10 gap-10">
        <div className="w-full md:w-1/2">
          <AboutText />
        </div>
        <div className="w-full md:w-1/2">
          <AboutInterests />
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
