import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://ng.linkedin.com/in/oluwafemi-araoye-641aa5280",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ftasma",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:femzyaraoye77@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",

      download: true,
    },
  ];
  return (
    <div
      name="socials"
      className="h-full md:hidden w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700"
    >
      <ul className="flex ">
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={
              " flex  items-center w-40 h-20 px-4  hover:rounded-md duration-300 bg-gray-500"
            }
          >
            <a
              href={href}
              className="flex flex-col-reverse mb-[-45px] h-full hover:mb-0 justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Socials;
