import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between px-4 bg-black items-center w-[100vw] h-20 text-white fixed ">
      <div>
        <h1 className="text-5xl font-signature ml-2">Tasma</h1>
      </div>
      <ul className=" hidden md:flex">
        {links.map((items) => {
          const { link, id } = items;
          return (
            <li
              key={id}
              className="px-4  cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              {" "}
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={handleClick}
        className="cursor-pointer md:hidden pr-4 z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex md:hidden flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {" "}
          {links.map((items) => {
            const { link, id } = items;
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Navbar;
