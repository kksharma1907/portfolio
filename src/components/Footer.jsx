import React from "react";

function Footer({ name }) {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;