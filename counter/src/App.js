import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function resetfun() {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <h3>Counter</h3>

        <div className="btn mx-3">
          <button onClick={increase}>Up</button>
          <button onClick={decrease}>Down</button>
          <button onClick={resetfun}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
