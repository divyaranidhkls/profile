import React from 'react'
import HeroText from './HeroText';
import HeroImage  from './HeroImage';

 const HeroBlock = () => {
  return (
    <div className="container max-auto">
    <div className="flex flex-row justify-between items-center mt-20 ml-20">
    <div className='w-1/2'><HeroText/></div>
    
      <div className='w-1/2'><HeroImage/></div>
      
    </div>






</div>
  )
}


export default HeroBlock;
