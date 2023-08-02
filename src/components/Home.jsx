import React from "react";
import HeroImage from "../assets/TasmaImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen overflow-hidden pt-8  w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-end Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hello, I'm Femi, a passionate and innovative software developer with
            a love for crafting elegant solutions to complex challenges.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white cursor-pointer w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="m md:ml-[10rem] ">
          <img
            src={HeroImage}
            alt="profile "
            className="rounded-2xl hover:scale-105 duration-300 mx-auto w-2/3 md:w-md "
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
