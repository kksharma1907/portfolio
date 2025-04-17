import React, { useState } from "react";
import VotingSystem from "../components/VotingSystem";
import Portfolio from "../components/Portfolio";
import NotesApp from "../components/NotesApp";

const projectComponents = {
  "Online Voting System": <VotingSystem />,
  "Portfolio Website": <Portfolio />,
  "Notes App": <NotesApp />,
};

function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    const trimmedProject = project.trim();
    if (projectComponents[trimmedProject]) {
      setSelectedProject(trimmedProject);
    }
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <button
              onClick={() => handleProjectClick(project)}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {project}
            </button>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <div>
          <h3>{selectedProject}</h3>
          {projectComponents[selectedProject]}
        </div>
      )}
    </section>
  );
}

export default Projects;
