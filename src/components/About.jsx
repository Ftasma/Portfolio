const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen overflow-hidden bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I may have limited professional experience, but i am committed to
          expanding my knowledge and honing my skills to become a proficient
          developer. If you have an exciting project or are part of a team that
          could benefit from an eager learner, I would love to be involved. I am
          confident that my determination, adaptability, and strong work ethic
          will make me a valuable addition to any team.
        </p>
        <br />
        <p className=" text-xl">
          Apart from coding, i do enjoy art and music. I am also currently
          pursuing a degree in Physiology at the University of Ibadan
        </p>
      </div>
    </div>
  );
};
export default About;
