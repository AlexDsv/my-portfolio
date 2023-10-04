import React from "react";
import "../styles/header.css";

const Header = ({ goToSection, currentSection }) => {
  return (
    <header className="header">
      <nav>
        <div className="navLinks">
          <button
            onClick={() => goToSection(2)}
            style={{ color: currentSection === 1 ? "#37A3BE" : "white" }}
          >
            A propos
          </button>
          <button
            onClick={() => goToSection(3)}
            style={{ color: currentSection === 2 ? "#37A3BE" : "white" }}
          >
            Projets
          </button>
          <button
            onClick={() => goToSection(4)}
            style={{ color: currentSection === 3 ? "#37A3BE" : "white" }}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
