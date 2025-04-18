'use client';
import { Download, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';






const HeroText = () => {
  const fullText = `I am currently pursuing my B.E. in Computer Science and Engineering. As a passionate learner and technology enthusiast, I have a strong interest in exploring full-stack development and generative AI. I enjoy working on challenging projects that push my boundaries and allow me to apply my skills in innovative ways. Beyond coding, I have a deep interest in self-improvement and regularly write blogs to share insights from the books I read and experiences I gain`;

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 25); // Typing speed in milliseconds
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className='flex flex-col justify-center'>
      <h1 className="text-4xl font-bold mb-4">Hello, I&apos;m</h1> {/* Escape single quote in "I'm" */}
      <div className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-800 mb-4'>Divya Rani K</div>
      <h2 className="text-1xl text-pink-400 mb-4">Artificial Intelligence & Data Science</h2>

      {/* Typewriter animated paragraph */}
      <p className="text-lg text-justify  leading-relaxed">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>

      <div className='flex gap-4 mt-6'>
        <a
          href="mailto:divyaranidhkls@gmail.com"
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-700 text-white px-5 py-2 rounded-md shadow-md transition duration-300"
        >
          <Mail size={18} />
          Contact Me
        </a>

        <a
  href="/resume.pdf"
  download="Divya_Rani_K_Resume.pdf"
  className="flex items-center gap-2 border border-pink  px-5 py-2 rounded-md hover:bg-white/10 transition duration-300"
>
  <Download size={18} />
  Resume
</a>

      </div>

      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/divyaranidhkls"
          target="_blank"
          className="p-2 rounded-full shadow-md hover:shadow-lg hover:text-pink-400 transition-all duration-200"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/divyarani-k-686b9a286/"
          target="_blank"
          className="p-2 rounded-full shadow-md hover:shadow-lg hover:text-pink-400 transition-all duration-200"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default HeroText;
