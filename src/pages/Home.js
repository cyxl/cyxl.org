import React from "react";
import "../css/Home.css"
import Demo from "../components/ConsoleTextDemo";
import RedNavbar from "../components/RedNavbar";

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
      <RedNavbar />
    </div>
  );
}

export default Home;