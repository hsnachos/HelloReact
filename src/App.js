import React from 'react';
import Counter from './Counter';
import EventPractice from './EventPractice';
import EventPracticeFn from './EventPracticeFn';
import Say from './Say';
import ValidationSample from './ValidationSample';
import ScrollBox from './Scrollbox';

const App = () => {
  // return <MyComponent name="가나다라">리액트 자식요소 테스트</MyComponent>;
  // return <Counter />;
  // return <Say />
  // return <EventPractice />
  // return <EventPracticeFn />
  // return <ValidationSample />
  return <div>
    <ScrollBox />
    <button onClick={() => this.ScrollBox.scrollToBottom()} >
      맨 위로
    </button>
    <button onClick={() => this.ScrollBox.scrollToBottom()} >
      맨 밑으로
    </button>
  </div>
};

export default App;