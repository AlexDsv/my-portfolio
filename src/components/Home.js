import React from "react";
import { useSpring, animated } from "react-spring";
import "../styles/home.css";

const Home = () => {
  const textProps = useSpring({
    transform: "translateX(0%)",
    opacity: 1,
    from: { transform: "translateX(-100%)", opacity: 0 },
    delay: 1200,
    config: {
      tension: 120,
      friction: 18,
      mass: 1.1,
    },
  });

  return (
    <div className="home">
      <div className="leftSection">
        <animated.h1 style={textProps}>
          Bonjour,
          <br /> je m'appelle <span>Alex.</span>
        </animated.h1>
        <animated.h2 style={textProps}>
          Je suis développeur frontend.
        </animated.h2>
        <animated.p style={textProps}>
          Bienvenue sur mon portfolio, vous y trouverez mes compétences, mes
          coordonnées ainsi que mes projets récents.
        </animated.p>
      </div>
    </div>
  );
};

export default Home;
