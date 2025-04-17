import React from "react";

function Contact({ email, phone, linkedin }) {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">Profile</a></p>
    </section>
  );
}

export default Contact;