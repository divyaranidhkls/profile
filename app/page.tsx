import React from 'react'
import NavBar from '@/components/NavBar';
import HeroBlock from './Hero/HeroBlock';
import AboutBlock from './Blocks/About/AboutBlock';
import  Experiance from "./Blocks/Experience/experience"
import Project from './Blocks/Projects/Projects';
import Footer from '@/components/footer';

 const RootPage = () => {
  return (
    <div>
 
    <div className="sticky top-0 z-20 backdrop-blur-xl bg-white/70 dark:bg-black/0 h-15">
  <NavBar />
</div>

  <div  className='container mx-auto'><HeroBlock/></div>
  <div  className='container mx-auto mt-33 mb-33'><AboutBlock/></div>
  <div  className='container mx-auto mt-33 mb-33'>< Experiance/></div>
  <div  className='container mx-auto mt-33 mb-33'>< Project/></div>
  <div  className='container mx-auto mt-33 mb-33'>< Footer/></div>
 

    </div>
  )
}


export default RootPage;