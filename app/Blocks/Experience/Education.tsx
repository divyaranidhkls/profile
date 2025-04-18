"use client";
import gpt from "../../../public/gpt.jpg";
import sit from "../../../public/sit.jpg";

const educationData = [
  {
    degree: "Diploma in Computer Science and Engineering",
    school: "Government Polytechnic Tumkur",
    years: "2019-2022",
    image: gpt,
    url: "https://gpt.karnataka.gov.in/gpttumkur/public/en",
    cgpa : "8.9"
  },
  {
    degree: "BE in Artificial Intelligence and DataScience",
    school: "Siddaganga Institute of technology Tumkur",
    years: "2022-2025",
    image: sit,
    url: "http://www.sit.ac.in/",
    cgpa:"8.7"
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-9 mt-5" id="education">
      <h2 className="text-2xl font-bold mb-2 text-center">
      Education
      </h2>

      <div className="flex flex-col mt-3 gap-20">
        {educationData.map((edu, idx) => (
          <div key={idx} className="flex items-center gap-6 md:gap-20">
            <a
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <img
                src={edu.image.src}
                alt={edu.school}
                className="w-20 h-20 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-lg font-bold">{edu.school}</p>
              <p className="text-sm text-gray-400">{edu.years}</p>
              <p className="text-sm text-gray-400">CGPA : {edu.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
