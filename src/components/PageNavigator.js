// Example: PageNavigator.js
import React from "react";
import "../styles/pageNavigator.css";

const PageNavigator = ({ currentPage }) => (
  <div className="page-navigator">
    <span>Page: {currentPage}</span>
  </div>
);

export default PageNavigator;
