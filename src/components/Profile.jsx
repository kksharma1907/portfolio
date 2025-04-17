import React from "react";

function Profile({ name, role, photoUrl, resumeUrl }) {
  return (
    <section id="profile">
      <img src={photoUrl} alt="Profile" width="150" />
      <h1>{name}</h1>
      <h3>{role}</h3>
      <a href={resumeUrl} download>Download Resume</a>
    </section>
  );
}

export default Profile;