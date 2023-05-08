import React, { Component } from 'react';

class EventPractice extends Component {
  state = {message : ""};
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          name="message"
          placeholder='아무거나 입력해보세요'
          value={this.state.message}
          onChange={(e) => {

            this.setState({
              message: e.target.value,
            });

          }}
        />
        <button
          onClick={()=>{
            alert(this.state.message);
            this.setState({message : ""});
          }}>
          확인
        </button>
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