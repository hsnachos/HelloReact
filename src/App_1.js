import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  /*
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
        <h3>Hello React</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
  */
 const name = "JSX";
 let number = undefined;

 let text = "";

 if(name == "JSX"){

  text = '리액트 입니다'
 }
 else
 {
  text = '리액트가 아닙니다'
 }

 const name1='리액트';
 const style={
  "background-color": 'black',
  color : 'aqua',
  fontSize: '48px',
  fontWeight: 'bold',
  padding:16
 };

 return (
  <Fragment>
    '{number} <h1>{text}</h1>'
    <h1>{name} 안녕!</h1>
    <h2>잘 작동됩니까?</h2>

    <div style={style}>{name1}</div>
    <div className="react">{name1}
      {/*  가나다라마바사
      주석구간 */}
      <input />
    </div>
    
  </Fragment>
 );
}

export default App;
