import React, { Component } from 'react';
import ScrollBox from './ScrollBox.js';

// const App = () => {
//   return <div>
//     <ScrollBox ref={(ref) => (this.scrollbox = ref)} />
//     <button onClick={() => 
//       this.scrollBox.scrollToBottom()
//     } >
//       맨 밑으로
//     </button> 
//   </div>
//   // return <IterationSample />
// };

// export default App;



class App extends Component {
  render() {
    return <div>
     <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
     <button onClick={() => 
       this.scrollBox.scrollToTop()
     } >
       맨 위로
     </button> 
     <button onClick={() => 
       this.scrollBox.scrollToBottom()
     } >
       맨 밑으로
     </button> 
   </div>
  }
}

export default App;