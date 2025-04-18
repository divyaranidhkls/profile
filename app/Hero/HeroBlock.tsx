import React from 'react';
import HeroText from './HeroText';
import HeroImage from './HeroImage';

const HeroBlock = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-12 md:mt-20 gap-8 md:gap-0 max-w-screen-xl mx-auto">
        
        <div className="w-full md:w-1/2">
          <HeroText />
        </div>

        <div className="w-full md:w-1/2">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
