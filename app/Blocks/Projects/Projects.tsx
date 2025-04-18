"use client";

const projectData = [
  {
    title: "Driver Drowsiness Detection System",
    url: "https://github.com/divyaranidhkls/Drowsiness-detection",
    description:
      "A driver drowsiness detection system that uses a Convolutional Neural Network (CNN) to identify signs of fatigue and alertness from facial features.",
  },
  {
    title: "Pain Detection System",
    url: "https://github.com/divyaranidhkls/pain-assesment-system-using-YOLOv8",
    description:
      "Analyzes facial images using YOLO to classify pain levels as no pain, mild pain, or severe pain.",
  },
  {
    title: "Portfolio Website",
    url: "https://github.com/divyaranidhkls/profile",
    description:
      "A responsive personal website showcasing profile, skills, and projects using nextjs.",
  },
  {
    title: "Hacker News Server",
    url: "https://github.com/divyaranidhkls/hackernews-server",
    description:
      "A backend server built to fetch and serve Hacker News stories via RESTful APIs, designed for efficient news retrieval and integration.",
  },
];

const Project = () => {
  return (
    <div className="flex flex-col items-center mt-12  ml-20" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full ">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-200 to-pink-400 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 dark:from-gray-600 dark:to-pink-500"
          >
            <div className="p-6 text-center flex flex-col justify-between h-full">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-justify mb-6">{project.description}</p>
              <button className="px-6 py-2 rounded-full   hover:bg-pink-200 transition-all duration-300 dark:bg-gray-800 dark:text-pink-400">
                View Project
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
