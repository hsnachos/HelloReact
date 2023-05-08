import React, { Component } from 'react';

class Scrollbox extends Component {
  scrollToTop = () => (this.box.scrollTop = 0);
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "hidden",
      position: "relative"
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background:'linear-gradient(white, black)'
    }

    return (
      <div
        style={style}
        ref={(ref) => {this.box=ref}}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default Scrollbox;
