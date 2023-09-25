import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Header from "./Header";
import PageNavigator from "./PageNavigator";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "../styles/container.css";

const pages = [<Home />, <About />, <Projects />, <Contact />];

const Container = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const props = useSpring({
    transform: `translateX(${-currentSection * 100}%)`,
    config: { tension: 220, friction: 120 },
  });

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      if (event.deltaY > 0 && currentSection < pages.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    };

    const container = document.querySelector(".container"); // Adjust the selector if necessary
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]); // Re-add the event listener if currentSection changes

  const goToSection = (sectionIndex) => {
    setCurrentSection(sectionIndex - 1);
  };

  return (
    <div className="container">
      <Header goToSection={goToSection} />
      <PageNavigator currentPage={currentSection + 1} />
      <animated.div className="sections-container" style={props}>
        {pages.map((page, index) => (
          <div className="section" key={index} style={{ width: "100vw" }}>
            {page}
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Container;
