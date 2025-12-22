import React from "react";
import FaceBook from "./icons/FaceBook";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

const Home = () => {
  return (
    <div className="px-6 py-12 md:px-40 md:py-20 min-h-screen">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Right Side - Text */}
        <div className="w-full md:w-[50%]">
          <h1 className="text-4xl md:text-6xl font-bold">Hello,</h1>
          <span className="block font-semibold text-2xl md:text-4xl text-red-500 mt-2 md:mt-0">
            I'm Alish Shakya
          </span>

          <p className="mt-4 md:mt-8 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            rerum illo, aliquam tenetur aspernatur reiciendis dolores mollitia
            voluptatibus nobis repellat esse culpa optio neque recusandae labore
            odio veritatis doloremque maxime.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-6 md:mt-8">
            <FaceBook />
            <Instagram />
            <Github />
            <Linkedin />
          </div>

          {/* Button */}
          <div className="mt-8 md:mt-10">
            <button className="border-2 rounded p-2 border-red-500">
              Hire Me
            </button>
          </div>
        </div>

        {/* Left Side - Image */}
        <div className="w-full md:w-[30%] flex justify-center md:justify-end mb-6 md:mb-0">
          <img src="/1.jpg" alt="image" className="w-64 md:w-70 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
