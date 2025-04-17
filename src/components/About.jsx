import React from "react";

function About({ objective }) {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>{objective}</p>
    </section>
  );
}

export default About;