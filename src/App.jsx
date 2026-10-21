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
      <About objective="Results-oriented Software Engineer with extensive experience at Telgoo5, leading PHP code upgrades and ensuring project success through expert database management in MySQL. Proficient in Core PHP, Python, and Django, delivering innovative solutions while fostering strong collaboration within teams. Committed to enhancing software performance and user engagement with a focus on continuous improvement." />
    <Experience
  experiences={[
    {
      company: "Vestor College of Management, Patna",
      position: "Assistant Lecturer",
      duration: "08/2026 - Present",
      responsibilities: [
        "Teaching Computer Science and IT subjects to BCA and B.Sc. IT students.",
        "Teaching C Programming, Fundamentals of Computers, and Basic Electronics.",
        "Delivering a Cloud Computing Certification Program with hands-on AWS training.",
        "Preparing lecture materials, assignments, and practical exercises.",
        "Mentoring students to improve programming skills and practical knowledge.",
      ],
    },
    {
      company: "Kashi Institute of Technology, Varanasi",
      position: "Assistant Professor",
      duration: "07/2025 - 06/2026",
      responsibilities: [
        "Taught BCA and MCA subjects including C Programming, Digital Electronics, Web Technology, and Cloud Computing.",
        "Taught E-Commerce and Software Project Management to BCA students under MGKVP.",
        "Developed laboratory manuals, workbooks, and practical sessions.",
        "Served as Class Coordinator and ERP Coordinator.",
        "Mentored students and supported their practical learning and placement readiness.",
      ],
    },
    {
      company: "Telgoo5, Noida, UP",
      position: "Software Engineer",
      duration: "07/2022 - 07/2025",
      responsibilities: [
        "Developed and maintained client websites using multiple programming languages.",
        "Worked on report generation and notification modules.",
        "Managed MySQL databases and optimized database queries.",
        "Worked on PHP application upgrades from legacy versions to PHP 8.2.",
        "Handled website maintenance, bug fixes, and feature enhancements.",
        "Improved website performance through PHP and MySQL optimization.",
      ],
    },
  ]}
/>
      <Projects
        projects={[
          "Online Voting System",
          "Portfolio Website",
          "Notes App",
          "Job Portal",
        ]}
      />
      <Contact
        email="kk1907sharma@gmail.com"
        phone="8873358905"
        linkedin="https://www.linkedin.com/in/krishna-kumar-b6789316a"
      />
      <Footer name="Krishna Kumar" />
    </div>
  );
}

export default App;
