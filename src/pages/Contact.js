import React from "react";
import "../css/Contact.css";
import DiscordSVG from "../pictures/Discord-Logo-Black.svg";
import GithubSVG from "../pictures/Github-Logo.svg";
import RedNavbar from "../components/RedNavbar";

function Contact() {
  return (
    <div className="Contact">
      <div className="left-panel-contact">
        <p></p>
        <RedNavbar />
      </div>

      <div className="right-panel-contact">
        <p className="text-header">
          If you want to collaborate with me of a program of some sort.
          <br />
          You are welcome to contact me.
        </p>
        <p className="text-description">
          I am available for freelancing anytime!
        </p>
        <h3 className="big-header">Socials</h3>
        <p className="text-description">
          <a href="mailto:cyxlpublic@gmail.com">cyxlpubic@gmail.com</a>
        </p>
        <a
          className="discord-img"
          href="https://discordapp.com/users/713936815022932079"
        >
          <img src={DiscordSVG} alt="Discord" height="42" width="42" />
        </a>
        <a
          className="github-img"
          href="https://github.com/cyxl"
        >
          <img src={GithubSVG} alt="Github" height="42" width="42" />

        </a>
      </div>
    </div>
  );
}

export default Contact;
