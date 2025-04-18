import React from 'react'
const PinkStar = () => (
  <svg
    className="w-5 h-5 text-pink-200 inline-block mr-2"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
  </svg>
);


const AboutText = () => {
  return (
    <div className='flex flex-col'>
        <h2 className="text-2xl font-bold mb-6 py-0 text-center">Know About Me!</h2>





<ul className="space-y-4 text-justify pt-4">
          <li><PinkStar/><strong>Divya Rani K</strong>, Software Engineer based in <strong> Karnataka, India</strong>.</li>
          
        
          <li><PinkStar/>A passionate engineer dedicated to building intelligent solutions that drive real-world impact.
           With hands-on experience in <strong>Natural Language Processing (NLP), Machine Learning, Computer Vision, and Generative</strong></li>
          
          <li><PinkStar/>I’m currently enhancing my skills across the full development stack, including <strong>frontend, backend, and DevOps</strong></li>
          <li><PinkStar/>My goal is to build end-to-end solutions that are not only user-friendly but also scalable and efficiently deployed.</li>
          <li><PinkStar/>Enjoy solving challenges through <strong>collaborative projects</strong> and continuous learning.</li>
         
        </ul>



    </div>
  )
}


export default AboutText;