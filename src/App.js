import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberclick = (Number) => {
    if (display === '0') {
      setDisplay(Number);
      setCurrentNumber(Number);
    }
    else{
      setDisplay(display + Number);
      setCurrentNumber(currentNumber + Number);
    }
  };

  const handleOperatorclick = (selectedOperator) => {
    if(previousNumber !== ''){
      calculateResult();
    }

    setDisplay(selectedOperator);
    setPreviousNumber(currentNumber);
    setCurrentNumber('');
    setOperator(selectedOperator);
  };

  const calculateResult = () => {
    let result = 0;

    switch (operator){
      case '+':
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;

      case '-':
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
        
      case '*':
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;

      case '/':
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;

      default:
        break;
    }
    setDisplay(result.toString());
    setPreviousNumber('');
    setCurrentNumber('');
    setOperator('');
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentNumber('');
    setPreviousNumber('');
    setOperator('');
  };

  const handleEquals = () => {
    calculateResult();
  };

  return (
    <div className="App">
      <div className='upper-part'>{display}</div>
      <div className='lower-part'>
        <div className='section-1'>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleNumberclick('9')}>9</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleOperatorclick('+')}>+</button>
        </div>
        <div className='section-2'>
        <button onClick={() => handleNumberclick('8')}>8</button>
        <button onClick={() => handleNumberclick('7')}>7</button>
        <button onClick={() => handleNumberclick('6')}>6</button>
        <button onClick={() => handleOperatorclick('-')}>-</button>
        </div>
        <div className='section-3'>
        <button onClick={() => handleNumberclick('5')}>5</button>
        <button onClick={() => handleNumberclick('4')}>4</button>
        <button onClick={() => handleNumberclick('3')}>3</button>
        <button onClick={() => handleOperatorclick('/')}>/</button>
        </div>
        <div className='section-4'>
        <button onClick={() => handleNumberclick('2')}>2</button>
        <button onClick={() => handleNumberclick('1')}>1</button>
        <button onClick={() => handleNumberclick('0')}>0</button>
        <button onClick={() => handleOperatorclick('*')}>*</button>
        </div>
      </div>
    </div>
  );
}

export default App;
