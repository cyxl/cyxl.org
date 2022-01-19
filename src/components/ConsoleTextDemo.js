import React from "react";
import { consoleText } from "./ConsoleText";
import '../css/ConsoleText.css'

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      this.setState({
          console: new consoleText(['Hi, I am cyxl.', 'I am a developer.', 'test'], 'text', ['white', 'rebeccapurple', 'lightblue'])
      })
  }

  render() {
    return (
      <div class="console-container">
        <span id="text"></span>
        <div classs="console-underscore" id="console">
          &#95;
        </div>
      </div>
    );
  }
}

export default Demo;
