import React from "react";
import FaceBook from "./icons/FaceBook";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

const Home = () => {
  return (
    <>
      <div className="px-40 py-20 flex justify-between items-center">
        {/* right side */}
        <div className=" w-[50%]">
          <h1 className="text-6xl font-bold">Hello,</h1>
          <span className="font-semibold text-4xl text-red-500">
            I'm Alish Shakya
          </span>

          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            rerum illo, aliquam tenetur aspernatur reiciendis dolores mollitia
            voluptatibus nobis repellat esse culpa optio neque recusandae labore
            odio veritatis doloremque maxime.
          </p>

          {/* social media icons  */}
          <div className="flex gap-6 mt-8">
            <FaceBook />
            <Instagram />
            <Github />
            <Linkedin />
          </div>

          {/* button  */}
          <div>
            <button className="border-2 rounded p-2 mt-10 border-red-500">
              {" "}
              Hire Me{" "}
            </button>
          </div>
        </div>

        {/* left side */}
        <div className=" w[30%]">
          <img src="/1.jpg" alt="image" className="w-70" />
        </div>
      </div>
    </>
  );
};

export default Home;
