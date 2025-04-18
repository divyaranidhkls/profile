import React from 'react';
import Skills from './skillls';
import Education from './Education';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col md:flex-row justify-between mt-20 gap-10">
        <div className="w-full md:w-1/2">
          <Education />
        </div>
        <div className="w-full md:w-1/2">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Experience;
