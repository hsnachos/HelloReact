import React, { Component } from 'react';

class EventPractice extends Component {
  state = {message : "", username: ""};

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      // alert(this.state.message);
      [e.target.name] : e.target.value,
    })
  }

  handleClick(e){
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      message : ''
    });
  }
  
  handleKeyPress = (e) => {
    if(e.key === "Enter"){
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          name="username"
          placeholder='아무거나 입력해보세요'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name="message"
          placeholder='아무거나 입력해보세요'
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          onClick={this.handleClick}>
          확인
        </button>
        <h2>{this.state.username}</h2>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

// const EventPractice = () => {
//   // 함수형으로 쓰려면 원래는 setState를 사용해야함!!
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         name="message"
//         placeholder='아무거나 입력해보세요'
//         onChange={(e) => {
//           console.log(e);
//           // 리액트에서 value값을 확인하는 방법
//           console.log(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

export default EventPractice;