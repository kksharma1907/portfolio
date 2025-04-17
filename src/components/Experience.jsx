import React from "react";

function Experience({ company, position, duration, responsibilities }) {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <h3>{position} at {company}</h3>
      <p>{duration}</p>
      <ul>
        {responsibilities.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;