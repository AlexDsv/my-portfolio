// SocialsSideBar.js
import React from "react";
import { useSpring, animated } from "react-spring";
import "../styles/socialsSideBar.css";

const SocialsSideBar = ({ goToSection, currentSection }) => {
  console.log(currentSection);
  const whiteLineProps = useSpring({
    height: "55vh",
    opacity: 1,
    from: { height: "0vh" },
    delay: 250,
  });
  return (
    <div className="socialsSideBar">
      <i
        className="fa-solid fa-house"
        onClick={() => {
          goToSection(1);
        }}
        style={{ color: currentSection === 0 ? "#37A3BE" : "white" }}
      ></i>
      <animated.div className="whiteLine" style={whiteLineProps}></animated.div>
      <div className="socialsIcons">
        <a
          href="https://www.linkedin.com/in/alex-dsv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.github.com/AlexDsv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialsSideBar;
