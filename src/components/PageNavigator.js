// Example: PageNavigator.js
import React from "react";
import "../styles/pageNavigator.css";

const PageNavigator = ({ currentPage }) => (
  <div className="page-navigator">
    <p>
      <span>0{currentPage}</span>
      /04
    </p>
  </div>
);

export default PageNavigator;
