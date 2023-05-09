import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary.js";
import LifeCycleSample from "./LifeCycleSample.js";

function getRandomColor() {
  // 24bit Color
  // return "#" + Math.floor(Math.random() * 16777215).toString(16);
  return "#" + Math.floor(Math.random() * Math.pow(2, 24)).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
