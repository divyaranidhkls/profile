import React from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg"

const HeroImage = () => {
  return (
    <div className="relative w-64 h-64 rounded-full mx-auto shadow-lg">
      <div className="w-full h-full rounded-full p-[4px] bg-gradient-to-tr from-purple-200 to-pink-800 shadow-xl">
        <div className="w-full h-full rounded-full bg-white p-1">
          <Image
            src={profile}
            alt="Divya's photo"
            className="rounded-full object-cover w-full h-full"
            width={256}
            height={256}
            priority
          />
        </div>
      </div>

      {/* Optional glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 blur-3xl opacity-30 z-[-1]" />
    </div>
  );
};

export default HeroImage;