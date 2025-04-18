"use client";

const projectData = [
  {
    title: "Driver Drowsiness Detection System",
    url: "https://github.com/divyaranidhkls/Drowsiness-detection",
    description:
      "A driver drowsiness detection system that uses a CNN to identify signs of fatigue and alertness from facial features.",
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
      "A responsive personal website showcasing profile, skills, and projects using Next.js.",
  },
  {
    title: "Hacker News Server",
    url: "https://github.com/divyaranidhkls/hackernews-server",
    description:
      "A backend server built to serve Hacker News stories via RESTful APIs, designed for efficient news retrieval.",
  },
];

const Project = () => {
  return (
    <div className="flex flex-col items-center mt-12 px-4 sm:px-8" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-200 to-pink-400 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 dark:from-gray-700 dark:to-pink-500"
          >
            <div className="p-4 text-center flex flex-col justify-between h-full text-sm">
              <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
              <p className="text-justify mb-4">{project.description}</p>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium hover:bg-pink-300 transition-all duration-300 dark:bg-gray-800 dark:text-pink-400">
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
