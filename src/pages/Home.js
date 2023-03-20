import Navbar from "../components/Navbar";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import girl from "../images/girl.png";
import { useState } from "react";
import { Box } from "../components/Box";

export const Home =  () => {
    const [darkMode, setDarkMode] = useState(false);
    const getDarkModeClasses = (mode) => {
      if (mode === "background")
        return darkMode ? "bg-black px-10" : "bg-white px-10";
      if (mode === "h3") return darkMode ? "text-white" : "";
      return darkMode ? "dark" : "";
    };
    return (
        <>
          <Navbar ></Navbar>
          <div className={getDarkModeClasses()}>
            <div className={getDarkModeClasses("background")}>
              <section>
                <nav className="py-10 mb-12 flex justify-between">
                  <h1 className="text-xl font-sans">Portfolio</h1>
                  <ul className="flex items-center">
                    <li>
                      <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-2xl"
                      />
                    </li>
                    <li>
                      <a
                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                        href="/"
                      >
                        Resume
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="text-center p-10">
                  <h2 className="text-5xl py-2 text-teal-600 font-medium">
                    Lynn Zhang
                  </h2>
                  <h3 className={`text-2xl py-2 ${getDarkModeClasses("h3")}`}>
                    {" "}
                    Full-Stack Software Engineer
                  </h3>
                  <p className="text-md py-5 leading-8 text-gray-800">

                  </p>
                </div>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                  <AiFillTwitterCircle />
                  <AiFillLinkedin />
                  <AiFillYoutube />
                  <AiFillInstagram />
                  <AiFillGithub />
                </div>
                <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden pl-10">
                  <img src={girl} alt="portrait" />
                </div>
              </section>
    
              <section className=" mx-auto w-[60rem]">
                <div>
                  <h3 className="text-3xl pl-1">Projects</h3>
                  <p className="text-md py-2 leading-8 pl-1 text-gray-80 mx-auto w-[60rem]">
                    As a software engineer, I take pride in my ability to tackle
                    complex problems and find creative solutions that meet the needs
                    of end-users. I am a collaborative team player and enjoy working
                    with cross-functional teams to build robust and scalable
                    software systems.
                  </p>
                  <p className="text-md py-2 leading-8 pl-1 text-gray-80">
                    Throughout my career, I have worked on a variety of projects,
                    from{" "}
                    <span className="text-teal-500">small-scale applications</span>{" "}
                    to <span className="text-teal-500">large enterprise-level systems</span>. I have experience in all
                    phases of the software development lifecycle, from requirements
                    gathering and design to testing and deployment.
                  </p>
                  <p className="text-md py-2 leading-8 pl-1 text-gray-80">
                    In addition to my technical skills, I am a strong communicator
                    and can effectively translate complex technical concepts to
                    non-technical stakeholders. I am always eager to learn new
                    technologies and stay up-to-date with the latest industry trends
                    to ensure that I am delivering the most innovative and effective
                    solutions.
                  </p>
                </div>
                <Box
                  imageSrc={girl}
                  title="Beautiful Designs"
                  para="Creating elegant designs suited for your business"
                />
                <Box imageSrc={girl} title="hmmm.." para="hmmm..." />
                <Box imageSrc={girl} />
              </section>
            </div>
          </div>
        </>
      );
    }
    