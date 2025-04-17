import React from "react";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      <p>Welcome to my portfolio! Here are some of my works:</p>
      <ul className="portfolio-list">
        <li>
          <a href="#">Project 1 - E-Commerce Website</a>
        </li>
        <li>
          <a href="#">Project 2 - Blogging Platform</a>
        </li>
        <li>
          <a href="#">Project 3 - Weather App</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
