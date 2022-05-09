import React from "react";
import "./Projects.css";
// import { FaReact, FaHardHat } from "react-icons/fa";
import {
//   SiBlockchaindotcom,
//   SiHtml5,
  SiMaterialui,
//   SiChai,
//   SiEthereum,
  SiExpress,
//   SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
//   SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="pulse-plus.png"
                  alt="pulse-plus"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Pulse-Plus Clone</h2>
              <p>
                Clone of the popular Pulse- plus web application to buy medical products. Built on javascript for front end. It's a team project completed executed in 5 days.
              </p>
              <div>
               
                <SiHtml5 />
                <IoLogoJavascript />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://pulseplus-clone.netlify.app/landing_page.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="tatacliq.jpeg"
                  alt="TataCliq"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>TataCliq Clone</h2>
              <p>
              A website to purchase fashion-related products. A collaborative project built by a team of 5 executed in 5 days.
              </p>
              <div>
                <IoLogoJavascript />
                <DiCss3 />
                <SiHtml5 />
                <SiExpress/>
                <SiMongodb/>
                <SiNodedotjs/>
              </div>
              <div>
                <a
                  href="https://sleepy-scrubland-64819.herokuapp.com/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/khushboo-choudhary/TataCliq-backend-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="rockstar.png"
                  alt="rockstar"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Store.rockstargames </h2>
              <p>
                Built the rockstoregames application using React. The google authentication and payment functionalities are implemented.
              </p>
              <div>
                <IoLogoJavascript />
                <SiMaterialui/>
                <SiExpress/>
                <DiCss3 />
                <SiHtml5 />
                <SiTailwindcss/>
                <SiReactrouter/>
                <SiMongodb/>
                <SiNodedotjs/>
              </div>
              <div>
                <a
                  href="https://store-rockstargames.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    URL for the API
                  </span>
                </a>
                <a
                  href="https://github.com/khushboo-choudhary/store.rockstartgames.com-Frontend-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="youTube.png"
                  alt="youTube"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>YouTube Clone</h2>
              <p>
                Mini project of Youtube clone built using ES6. Implemented import and export and debouncing.
              </p>
              <div>
              <IoLogoJavascript />
                <DiCss3 />
                <SiHtml5 />
              </div>
              <div>
                <a
                  href="https://youtube-clone-sandy.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/khushboo-choudhary/Youtube-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="mapapp.png"
                  alt="weather"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Weather</h2>
              <p>
                Weather app to Search for any location it's gives the current data. Build with the help of weather API and has the weather of the original location details. Built to learn APIs and use them in the project.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://weather-vert-ten.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/khushboo-choudhary/weather"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
