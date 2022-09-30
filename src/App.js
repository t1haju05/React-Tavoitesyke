import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [lowerRate, setLowerRate] = useState(0)
  const [upperRate, setUpperRate] = useState(0)
  const [age, setAge] = useState(0)
  function calculate(e) {
    e.preventDefault()
    setLowerRate((220 - age) * 0.65)
    setUpperRate((220 - age) * 0.85)
  }
  return (
    <div id='content'>
      <h1>Heart rate limits calculator</h1>
      <form onSubmit={calculate}>  
        <div>
        <label>Age</label>
        </div>
        <div>
        <input value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
        <label>Heart rate limits</label>
        </div>
        <div>
        <output>{lowerRate.toFixed(0)}-{upperRate.toFixed(0)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
