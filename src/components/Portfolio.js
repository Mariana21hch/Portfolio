//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "The Legend of Orion",
    languages: "HTML, CSS, Javascript",
    image: "/img/Orion.PNG",
    description: "Pokemon turn-based game",
    repo: "https://github.com/josuepaniagua/Orion",
    live: "https://josuepaniagua.github.io/Orion/",
  },
  {
    id: 1,
    title: "Peace of Mind",
    languages: "html, handlebars, Javascript",
    image: "/img/peaceofmind.PNG",
    description: "Website that will allow anyone with a need to connect to others regarding mental health and support.",
    repo: "https://github.com/AndreaRene/Peace_of_Mind",
    live: "https://peace-of-mind-app.herokuapp.com/",
  },
  {
    id: 2,
    title: "Tech-Land",
    languages: "html, css, js",
    image: "/img/Tech-Land.PNG",
    description: "Tech-Land is an online marketplace for freelance web developer services",
    repo: "https://github.com/richardwilborn/Tech-Land",
    live: "https://safe-earth-46803.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;