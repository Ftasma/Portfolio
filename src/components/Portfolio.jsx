import firstImg from "../assets/portfolio/IMG_8348.jpg";
import secondImg from "../assets/portfolio/IMG_8349.jpg";
import thirdImg from "../assets/portfolio/IMG_8350.jpg";
import fourthImg from "../assets/portfolio/IMG_8354.jpg";

const Portfolio = () => {
  const port = [
    {
      id: 1,
      src: firstImg,
      web: "https://thatthat.netlify.app",
      code: "https://github.com/Ftasma/landing-page-1",
    },
    {
      id: 2,
      src: fourthImg,
      web: "https://netclone-three.vercel.app",
      code: "https://github.com/ftasma/Netflix-",
    },

    {
      id: 3,
      src: thirdImg,
      web: "https://comfyhousethingy.netlify.app",
      code: "https://github.com/ftasma/furnitureHouse",
    },
    {
      id: 4,
      src: secondImg,
      web: "https://breeeze.netlify.app",
      code: "https://github.com/ftasma/weatherapp",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {port.map((items) => {
            const { id, src, web, code } = items;
            return (
              <div
                key={id}
                className="shadow-md h-[15rem] shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md   h-[70%] w-full object-cover  duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a target="_blank" href={web}>
                      {" "}
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a target="_blank" href={code}>
                      {" "}
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
