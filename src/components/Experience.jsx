import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import javascriptImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import githubImg from "../assets/github.png";
import tailwindImg from "../assets/tailwind.png";
import firebaseImg from "../assets/firebase.png";
import nodeImg from "../assets/node.png";
const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: htmlImg,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssImg,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascriptImg,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: githubImg,
      title: "github",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: tailwindImg,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    // {
    //   id: 7,
    //   src: firebaseImg,
    //   title: "Firebase",
    //   style: "shadow-yellow-500",
    // },
    {
      id: 8,
      src: nodeImg,
      title: "Node js",
      style: "shadow-green-500",
    },
  ];
  return (
    <div
      name="experience"
      className="experi bg-gradient-to-b  from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl  font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="pt-[4rem] ">
            These are the technologies i have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-col-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map((items) => {
            const { id, src, title, style } = items;
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 h-[5rem] py-2 rounded-lg ${style}`}
              >
                <img src={src} className="w-10 mx-auto" alt="" />
                <p className="mt-2">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Experience;
