import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Profile
        name="Krishna Kumar"
        role="Software Engineer"
        photoUrl="/images/krishna_kumar.jpg"
        resumeUrl="/files/Krishna_Kumar.pdf"
      />
      <About objective="Results-oriented Software Engineer with extensive experience at Vcare Call Centre, leading PHP code upgrades and ensuring project success through expert database management in MySQL. Proficient in Core PHP, Python, and Django, delivering innovative solutions while fostering strong collaboration within teams. Committed to enhancing software performance and user engagement with a focus on continuous improvement." />
      <Experience
        company="Vcare Call Centre"
        position="Software Engineer"
        duration="07/2022 - 07/2024"
        responsibilities={[
          "Executed development and ongoing maintenance for client sites employing various programming languages.",
          "Ensured project deadlines were met through effective teamwork.",
          "Conducted database management tasks through MySQL implementation.",
          "Upgraded code from PHP version 3 to 8.2v.",
          "Conducted regular website maintenance, including bug fixes and enhancements.",
        ]}
      />
      <Projects
        projects={["Online Voting System", "Portfolio Website", "Notes App"]}
      />
      <Contact
        email="kk1907sharma@gmail.com"
        phone="7004699143"
        linkedin="https://www.linkedin.com/in/krishna-kumar-b6789316a"
      />
      <Footer name="Krishna Kumar" />
    </div>
  );
}

export default App;
