import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [a, setA] = useState([1, 2, 3, 4, 5]);
  const plusNumber = () => {
    const arr = [...a];
    setA([...arr]);
  };

  return (
    // Fragment는 빈태그 명시
    <React.Fragment>
      <h1>{a}</h1>
      <button onClick={plusNumber}>plus</button>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
