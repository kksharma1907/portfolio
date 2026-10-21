import React from "react";

function Experience({ experiences = [] }) {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>

      {experiences.map((job, index) => (
        <div key={index} className="experience-item">
          <h3>
            {job.position} at {job.company}
          </h3>

          <p>{job.duration}</p>

          <ul>
            {job.responsibilities.map((task, taskIndex) => (
              <li key={taskIndex}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
