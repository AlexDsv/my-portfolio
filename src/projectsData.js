// Import images
import image from "../src/assets/PortfolioBackground.png";
import image1 from "../src/assets/PortfolioBackground.png";
import image2 from "../src/assets/p1.png";
import image3 from "../src/assets/BookiBackground.png";
import image4 from "../src/assets/OMFBackground.png";
import icon from "../src/assets/portfolioIcon.png";
import icon1 from "../src/assets/portfolioIcon.png";
import icon2 from "../src/assets/iconP1.png";
import icon3 from "../src/assets/BookiLogo.png";
import icon4 from "../src/assets/omfLogo.png";

const projectsData = [
  {
    name: "Mon Portfolio",
    description:
      "Mon portfolio est mon premier projet horizontal, il m'a permit d'élargir mes compétences et de découvrir une nouvelle manière de penser et de développer. J'ai aussi découvert React Spring, un outil qui m'a aidé à gérer les différentes animations présentes sur le site ainsi que i18n qui m'a permit de rendre plus accessible mon portfolio grâce à l'ajout de plusieurs langues",
    image: image1,
    icon: icon1,
    technologies: [
      { name: "HTML", icon: "fa-brands fa-html5", color: "#e54d26" },
      { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1273ba" },
      { name: "JavaScript", icon: "fa-brands fa-square-js", color: "#f7e025" },
      { name: "React", icon: "fa-brands fa-react", color: "#66dbfb" },
    ],
    link: "",
  },
  {
    name: "Furniro",
    description:
      "Furniro est un site e-commerce de mobilier d'intérieur que j'ai réalisé à partir d'une maquette FIGMA. J'ai ensuite moi même adapter le site aux différents supports afin de le rendre responsive.J'ai moi même crée un faux stock de produits en local afin de simuler l'utilisation d'une API et de rendre le site dynamique.",
    image: image2,
    icon: icon2,
    technologies: [
      { name: "HTML", icon: "fa-brands fa-html5", color: "#e54d26" },
      { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1273ba" },
      { name: "JavaScript", icon: "fa-brands fa-square-js", color: "#f7e025" },
      { name: "React", icon: "fa-brands fa-react", color: "#66dbfb" },
    ],
    link: "",
  },
  {
    name: "Booki",
    description:
      "Booki est un des premiers projets que j'ai réalisé au cours de ma formation de Développeur Web. Parti d'une maquette Figma, il m'a permit de travailler les bases du développement web telles que le HTML et le CSS.",
    image: image3,
    icon: icon3,
    technologies: [
      { name: "HTML", icon: "fa-brands fa-html5", color: "#e54d26" },
      { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1273ba" },
    ],
    link: "",
  },
  {
    name: "OhMyFood",
    description:
      "OhMyFood est une application permettant de réserver des plats dans des restaurants. C'est un projet réalisé au cours de ma formation de Développeur Web d'OpenClassrooms, qui visait à travailler une application orienté mobile mais aussi accessible sur le web. C'est aussi la première fois que j'ai utilisé SASS afin de faciliter l'écriture du CSS et de réaliser de petites animations.",
    image: image4,
    icon: icon4,
    technologies: [
      { name: "HTML", icon: "fa-brands fa-html5", color: "#e54d26" },
      { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1273ba" },
      { name: "SASS", icon: "fa-brands fa-sass", color: "#c76494" },
    ],
    link: "",
  },
];

export default projectsData;
