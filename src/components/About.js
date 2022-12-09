// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <img className="my-pic" src={process.env.PUBLIC_URL + '/officialPhoto.jpg'} alt="Mariana"/>
      <p className="content is-italic mt-4">
        I'm Mariana Hernandez-Chavez, a Full Stack Developer that graduated from the University of Texas at Austin's Fulls Stack Web development Bootcamp.  
      </p>
      <p className="content">I started an interest in web developing at the start of the COVID pandemic. I knew by developing these skills I would be able to assist her career field in the military. In October 2020 I was deployed to an undisclosed location in Southeast Asia, where I further developed my knowledge for HTML/CSS/JavaScript as well as Microsoft SharePoint. I used Microsoft Sharepoint to deploy a beta version of a travel reservation site. With this new found passion I enrolled in a 22 course bootcamp with UT Austin, to better refind my skills. As of December 2022 I proudly graduated and on a mission to further use my new skill set.     
      </p>
    </div>
  );
}

export default About;