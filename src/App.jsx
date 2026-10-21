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
        role="Assistant Lecturer | Assistant Professor | Software Engineer"
        photoUrl="/images/krishna_kumar.jpg"
        resumeUrl="/files/Krishna_Kumar.pdf"
      />

      <About
  objective="Assistant Lecturer at Vestor College of Management, Patna, with 1+ year of teaching experience and 3 years of industry experience as a Software Engineer and PHP Developer. Experienced in teaching Computer Science and IT subjects to BCA and B.Sc. IT students, including C Programming, Digital Electronics, Web Technology, and Cloud Computing with hands-on AWS training. Passionate about combining academic teaching with practical industry knowledge to help students develop strong technical skills. Also STET-qualified in Computer Science (Secondary Teacher Eligibility Test, 2025)."
/>

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
              "Mentoring students to enhance programming skills and practical knowledge.",
            ],
          },
          {
            company: "Kashi Institute of Technology, Varanasi",
            position: "Assistant Professor",
            duration: "07/2025 - 06/2026",
            responsibilities: [
              "Taught undergraduate BCA and postgraduate MCA subjects, including C Programming, Digital Electronics, Web Technology, and Cloud Computing under the AKTU curriculum.",
              "Taught E-Commerce and Software Project Management to BCA students under MGKVP.",
              "Developed laboratory manuals, workbooks, and structured practical sessions.",
              "Served as Class Coordinator and ERP Coordinator, managing academic records and student coordination.",
              "Mentored students to improve practical skills and placement readiness.",
            ],
          },
          {
            company: "Telgoo5, Noida, UP",
            position: "Software Engineer",
            duration: "07/2022 - 07/2025",
            responsibilities: [
              "Developed and maintained client websites using multiple programming languages.",
              "Worked on report generation and notification modules to improve automation and user communication.",
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
          "Employee Management System",
          "Weather Application",
          "Online Voting System",
          "Portfolio Website",
        ]}
      />

      <Contact
        email="kk1907sharma@gmail.com"
        phone="8873358905"
        linkedin="https://www.linkedin.com/in/krishna1907"
      />

      <Footer name="Krishna Kumar" />
    </div>
  );
}

export default App;
