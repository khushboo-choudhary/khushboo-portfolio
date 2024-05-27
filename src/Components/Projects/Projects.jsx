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
   SiFramer,
  // SiReactrouter,
  //   SiJavascript,
  SiChakraui,
  SiMongodb,
  SiNodedotjs,
  SiNetlify,
  SiReact,
  SiRedux,
  SiRazorpay,
  SiVercel,
  // SiRender,
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
                              <img src="pulse-plus.png" alt="pulse-plus" />
                          </div>
                      </div>
                      <div className="project_information" data-aos="fade-right">
                          <h2>Pulse-Plus Clone</h2>
                          <p>
                              Clone of the popular Pulse- plus web application to buy medical products. Built on javascript for front end. It's a team
                              project completed executed in 5 days.
                          </p>
                          <div>
                              <SiHtml5 />
                              <IoLogoJavascript />
                              <DiCss3 />
                              <SiNetlify />
                          </div>
                          <div>
                              <a href="https://pulseplus-clone.netlify.app/landing_page.html" target="_blank" rel="noreferrer">
                                  <span type="button" className="btn btn--outline onbt">
                                      See this Live
                                  </span>
                              </a>
                              <a href="https://github.com/khushboo-choudhary/www.pulseplus.in-Clone" target="_blank" rel="noreferrer">
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
                              <img src="tatacliq.jpeg" alt="TataCliq" />
                          </div>
                      </div>
                      <div className="project_information" data-aos="fade-right">
                          <h2>TataCliq Clone</h2>
                          <p>A website to purchase fashion-related products. A collaborative project built by a team of 5 executed in 5 days.</p>
                          <div>
                              <IoLogoJavascript />
                              <DiCss3 />
                              <SiHtml5 />
                              <SiExpress />
                              <SiMongodb />
                              <SiNodedotjs />
                              {/* <SiRender /> */}
                          </div>
                          <div>
                              <a href="https://tatacliq-website.onrender.com/" target="_blank" rel="noreferrer">
                                  <span type="button" className="btn btn--outline onbt">
                                      See this Live
                                  </span>
                              </a>
                              <a href="https://github.com/khushboo-choudhary/TataCliq-backend-clone" target="_blank" rel="noreferrer">
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
                              <img src="rockstar.png" alt="rockstar" />
                          </div>
                      </div>
                      <div className="project_information" data-aos="fade-right">
                          <h2>Store.rockstargames </h2>
                          <p>
                              Built the rockstoregames application using React. The google authentication and payment functionalities are implemented.
                          </p>
                          <div>
                              <IoLogoJavascript />
                              <SiMaterialui />
                              <SiExpress />
                              <SiReact />
                              <SiRedux />
                              <SiTailwindcss />
                              <SiMongodb />
                              <SiNodedotjs />
                          </div>
                          <div>
                              <a href="https://store-rockstartgames-com-frontend-clone.vercel.app/" target="_blank" rel="noreferrer">
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
                              <img src="aglecha_diamonds.png" alt="rockstar" />
                          </div>
                      </div>
                      <div className="project_information" data-aos="fade-right">
                          <h2>Aglecha Diamonds </h2>
                          <p>
                              Built the Aglecha diamonds application using React. The google authentication and payment functionalities are
                              implemented.
                          </p>
                          <div>
                              <SiMaterialui />
                              <SiExpress />
                              <SiReact />
                              <SiRedux />
                              <SiVercel />
                              <SiMongodb />
                              <SiNodedotjs />
                              <SiRazorpay />
                          </div>
                          <div>
                              <a href="https://aglecha-diamond-frontend.vercel.app/" target="_blank" rel="noreferrer">
                                  <span type="button" className="btn btn--outline onbt">
                                      URL for the API
                                  </span>
                              </a>
                              <a href="https://github.com/khushboo-choudhary/aglecha_diamond_frontend" target="_blank" rel="noreferrer">
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
                              <img src="youTube.png" alt="youTube" />
                          </div>
                      </div>
                      <div className="project_information" data-aos="fade-right">
                          <h2>YouTube Clone</h2>
                          <p>Mini project of Youtube clone built using ES6. Implemented import and export and debouncing.</p>
                          <div>
                              <IoLogoJavascript />
                              <DiCss3 />
                              <SiHtml5 />
                          </div>
                          <div>
                              <a href="https://youtube-clone-sandy.vercel.app/" target="_blank" rel="noreferrer">
                                  <span type="button" className="btn btn--outline onbt">
                                      See this Live
                                  </span>
                              </a>
                              <a href="https://github.com/khushboo-choudhary/Youtube-Clone" target="_blank" rel="noreferrer">
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
                              <img src="starwars.png" alt="starwars" />
                          </div>
                      </div>
                      <div className="project_information" data-aos="fade-right">
                          <h2>StarWars </h2>
                          <p>Built the Starwars Api static application using React.</p>
                          <div>
                              <SiChakraui />
                              <SiReact />
                              <SiVercel />
                          </div>
                          <div>
                              <a href="https://starwarsapi-two.vercel.app/" target="_blank" rel="noreferrer">
                                  <span type="button" className="btn btn--outline onbt">
                                      URL for the API
                                  </span>
                              </a>
                              <a href="https://github.com/khushboo-choudhary/starwarsapi" target="_blank" rel="noreferrer">
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
                              <img src="Framer.png" alt="weather" />
                          </div>
                      </div>
                      <div className="project_information" data-aos="fade-right">
                          <h2>The Portfolyo</h2>
                          <p>Built the Cloned of Portfolyo static application using React and Tailwind CSS.</p>
                          <div>
                              <SiReact />
                              <SiVercel />
                              <SiTailwindcss />
                              <SiFramer />
                          </div>
                          <div>
                              <a href="https://the-portfolyo-wheat.vercel.app/" target="_blank" rel="noreferrer">
                                  <span type="button" className="btn btn--outline onbt">
                                      See this Live
                                  </span>
                              </a>
                              <a href="https://github.com/khushboo-choudhary/ThePortfolyo" target="_blank" rel="noreferrer">
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
                              <img src="biogeneratorapp.png" alt="weather" />
                          </div>
                      </div>
                      <div className="project_information" data-aos="fade-right">
                          <h2>Bio Generator App</h2>
                          <p>
                              The Bio generator application created using react. The translator features also implemented we can change the language
                              in whole page.
                          </p>
                          <div>
                              <SiReact />
                              <SiVercel />
                              <DiCss3 />
                              <IoLogoJavascript />
                          </div>
                          <div>
                              <a href="https://bio-generator-app-kappa.vercel.app/" target="_blank" rel="noreferrer">
                                  <span type="button" className="btn btn--outline onbt">
                                      See this Live
                                  </span>
                              </a>
                              <a href="https://github.com/khushboo-choudhary/bio-generator-app" target="_blank" rel="noreferrer">
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
                              <img src="mapapp.png" alt="weather" />
                          </div>
                      </div>
                      <div className="project_information" data-aos="fade-right">
                          <h2>Weather</h2>
                          <p>
                              Weather app to Search for any location it's gives the current data. Build with the help of weather API and has the
                              weather of the original location details. Built to learn APIs and use them in the project.
                          </p>
                          <div>
                              <SiHtml5 />
                              <DiCss3 />
                              <IoLogoJavascript />
                          </div>
                          <div>
                              <a href="https://weather-vert-ten.vercel.app/" target="_blank" rel="noreferrer">
                                  <span type="button" className="btn btn--outline onbt">
                                      See this Live
                                  </span>
                              </a>
                              <a href="https://github.com/khushboo-choudhary/weather" target="_blank" rel="noreferrer">
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
