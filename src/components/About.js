import React from "react";
import "../styles/about.css";

const About = () => {
  console.log("About scrolled");
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="aboutText">
          <p>
            <span className="helloSpan">Bonjour ! 👋 </span> <br />
            <br />
            Je m'appelle<span> Alex</span>, je suis un{" "}
            <span>développeur front-end</span>
            passionné basé à <span>Paris</span>. J'ai effectué la formation de
            développeur web d'Open Classrooms, au cours de laquelle j'ai été
            formé sur différentes technologies telles que: <span>HTML</span>,{" "}
            <span>CSS</span>,<span>SASS</span>, <span>JavaScript</span> et{" "}
            <span>React</span>. Je me suis moi même formé par la suite sur{" "}
            <span>React Native</span> et <span>Expo</span>.
            {/* Avec une solide compréhension des technologies modernes du web, je
            crée des expériences utilisateurs captivantes et fonctionnelles.
            Chaque projet m'a donné l'occasion d'apprendre de nouvelles choses,
            comme React Native, Expo, Docker et autres technologies avec
            lesquelles je n'avais pas travaillé au cours de ma formation et de
            devenir un meilleur développeur, en affinant mes compétences en
            codage et en résolution de problèmes. */}
            <br /> Je suis toujours à la recherche de nouvelles opportunités
            d'apprentissage et de collaboration. Que ce soit des projets déjà
            existants comme des projets partis de rien. J'aime apporter mes
            idées afin de faire avancer le projet et de participer à son
            évolution.
            <br /> Merci de prendre le temps de visiter mon portfolio. <br />
            N'hésitez pas à parcourir mes projets et à me contacter si vous
            souhaitez en savoir plus ou discuter d'une future collaboration.
            <br />
            <br />À bientôt !
          </p>
        </div>
        <div className="aboutRightSection">
          <div className="aboutPicture"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
