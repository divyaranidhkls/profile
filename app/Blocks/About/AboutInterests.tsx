// components/AboutSkills.tsx
const Interests = [
    "Data Science & Analytics", " Machine Learning", "Gen AI", "Natural Language Processing "
  ];



 
  
  const AboutInterests = () => {
    return (
      <div>
       <h2 className="text-2xl font-bold mb-6 py-3 text-center">Interests</h2>
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 justify-items-center">
  {Interests.map((skill, index) => (
    <span
      key={index}
      className="relative w-full px-6 py-2 text-sm font-medium rounded-full border-2 border-dotted border-pink-500 text-pink-600 dark:border-pink-400 dark:text-purple-300 hover:bg-pink-100 dark:hover:bg-pink-950 transition duration-300 text-center overflow-hidden"
    >
      {skill}
      <span className="absolute inset-0 rounded-full border-2 border-dotted border-purple-300 animate-ping blur-sm opacity-30 pointer-events-none"></span>
    </span>
  ))}
</div>



        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white py-3 mt-4 text-center">Hobbies</h2>
     
        <div>
       
  <div className="flex flex-col gap-4">

  <div className="grid grid-cols-2 gap-4">
  <span className="relative px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-pink-400 via-blue-200 to-pink-300 text-gray-800 dark:text-black shadow-md hover:scale-105 transition duration-300">
    ♟️ Chess
  </span>
  <span className="relative px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-400 via-pink-200 to-blue-300 text-gray-800 dark:text-black shadow-md hover:scale-105 transition duration-300">
    📚 Reading Comics
  </span>
  <span className="relative px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-pink-400 via-blue-100 to-pink-200 text-gray-800 dark:text-black shadow-md hover:scale-105 transition duration-300">
    🧩 Puzzle Solving
  </span>
  <span className="relative px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-100 via-pink-100 to-blue-200 text-gray-800 dark:text-black shadow-md hover:scale-105 transition duration-300">
  🏸Ball Badminton
  </span>
</div>










</div>
        </div>
      </div>
    );
  };

  export default AboutInterests;
  