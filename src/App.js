import React from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import { solveEquation } from './util/MathAPI';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator App</h1>
      </header>
      <main>
        <Calculator solveEquation={solveEquation} />
      </main>
    </div>
  );
}

export default App;
