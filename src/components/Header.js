import React from "react";
import "../styles/header.css";

const Header = ({ goToSection }) => {
  return (
    <header className="header">
      <nav>
        <button onClick={() => goToSection(2)}>A propos</button>
        <button onClick={() => goToSection(3)}>Projets</button>
        <button onClick={() => goToSection(4)}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
