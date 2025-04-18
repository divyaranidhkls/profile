'use client';

import Link from 'next/link';
import React from 'react';
import ThemeToggle from './Theme';

const NavBar = (props:{className ? :string}) => {

  

  const paths = {
    Home:"/",
    About:"#about",
    Education:"#education",
    skills :"#skills",
    projects:"#projects",
    contact:"#contact"
 

  };
  return (
    <div className={`container mx-auto py-5 ${props.className || ''}`}>

      <div className="flex flex-row justify-between py-0 items-center px-4">
        {/* Left Side */}
        <div className="flex flex-row items-center gap-3">
          <span className="text-pink-400 text-xl">
            {'{'}
            <span className="text-pink-500">DK</span>
            {'}'}
          </span>
          <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Divyarani
          </h2>
          <div className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Divyarani
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-row gap-6 items-center">
          <Link href={paths.Home}>Home</Link>
          <Link href={paths.About}>About</Link>
          <Link href={paths.skills}>Skills</Link>
          <Link href={paths.Education}>Education</Link>
        
          <Link href={paths.projects}>Projects</Link>
          
          <Link href={paths.contact}>Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
