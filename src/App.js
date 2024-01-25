import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map(
          (buttonValue, index) => (
            <button
              key={index}
              className="calculator-button"
              onClick={() =>
                buttonValue === 'C'
                  ? handleClear()
                  : buttonValue === '='
                  ? handleCalculate()
                  : handleClick(buttonValue)
              }
            >
              {buttonValue}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default App;
