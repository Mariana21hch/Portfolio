//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by Mariana Hernandez-Chavez.
        </p>
        <p>
        <a className="link" href="https://www.linkedin.com/in/mariana-hern%C3%A1ndez-ch%C3%A1vez-853803122/"
            target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i> LinkedIn</a>{" "}
          |{" "}{" "}
          <a className="link" href="https://github.com/Mariana21hch/" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i> GitHub</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;