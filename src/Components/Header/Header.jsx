import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const offset = navbar.offsetTop;

      if (window.pageYOffset > offset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="navbar"
        className={`header center ${isSticky ? "sticky" : ""} ${themename}`}
      >
        <h3>
          <a href="#home" className="link">
            Khushboo
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
