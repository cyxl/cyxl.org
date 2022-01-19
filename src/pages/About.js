import React from "react";
import "../css/About.css";

function About() {
  return (
    <div className="About">
      <div className="left-panel">
        <p></p>
      </div>

      <div className="right-panel">
        <div className="content">
          <p className="text-header">
            I am a Self Taught Developer from the United States
          </p>
          <p className="text-description">
            Developing has been a passion of mine for a while now.
            <br /> When I first started coding it was rough lots of new stuff.
            <br />I just keep on learning more and having fun!
          </p>
          <h3 className="developing-header">Developing</h3>
          <p className="text-description"></p>
        </div>
      </div>
    </div>
  );
}

export default About;
