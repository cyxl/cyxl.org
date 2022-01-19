import React from "react";
import "../css/Home.css"
import Demo from "../components/ConsoleTextDemo";

function Home() {
  return (
    <div className="Home">
      <div className="content">
        <header>Fullstack Developer</header>
        <div class="console-container">
          <Demo />
          <div classs="console-underscore" id="console"></div>
        </div>
      </div>
      <nav>
        <a href="/about">
          <span className="hover-underline">About</span>
        </a>{" "}
        /{" "}
        <a href="/projects">
          <span className="hover-underline">Projects</span>
        </a>{" "}
        /{" "}
        <a href="/contact">
          <span className="hover-underline">Contact</span>
        </a>
      </nav>
    </div>
  );
}

export default Home;