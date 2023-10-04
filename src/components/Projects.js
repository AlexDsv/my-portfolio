import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/projects.css";
import projectsData from "../projectsData";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  const nextIndex = (currentIndex + 1) % projectsData.length;

  return (
    <div className="projects">
      <div className="projectCardWrapper">
        <animated.div
          className="projectCard"
          style={{
            backgroundImage: `url(${projectsData[currentIndex].image})`,
            ...props,
          }}
        >
          <div className="projectCardContent">
            <div className="projectCardBlur">
              <div
                className="projectIcon"
                style={{
                  backgroundImage: `url(${projectsData[currentIndex].icon})`,
                }}
              ></div>
            </div>
          </div>
          <button onClick={prevProject} className="navButton prevButton">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={nextProject} className="navButton nextButton">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </animated.div>
      </div>
      <div className="projectInfo">
        <div className="projectInfoContent">
          <div className="projectDescription">
            <h1>{projectsData[currentIndex].name}</h1>

            <p>{projectsData[currentIndex].description}</p>
          </div>
          <div className="projectTechnologies">
            {projectsData[currentIndex].technologies.map(
              (technology, index) => (
                <div className="projectTechnology">
                  <i
                    key={projectsData[currentIndex].name + index}
                    className={technology.icon}
                    style={{ color: `${technology.color}` }}
                  />
                  <p>{technology.name}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="rightCarouselSection">
        <div
          className="nextProjectPreview"
          onClick={nextProject}
          style={{ backgroundImage: `url(${projectsData[nextIndex].image})` }}
        >
          <div className="projectCardBlur">
            <div className="projectIcon"></div>
          </div>
        </div>
        <div className="dot-indicator">
          {[...Array(projectsData.length)].map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
