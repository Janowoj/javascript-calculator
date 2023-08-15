import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState(0);

  const handleNumber = (event) => {
    const number = event.target.textContent;
    const lastElement = input[input.length - 1];

    if (input === '0') {
      setInput(number);
      setOutput(number);
    }
    // else if (lastElement.includes(".") === true) {
    //   setInput(input + number);
    //   setOutput(input + number);
    // }
    else {
      setInput(input + number);
      setOutput(number);
    }
  }

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setInput(input + operator);
    setOutput(operator);
  }

  const handleClear = () => {
    setInput('');
    setOutput(0);
  }

  const handleDecimal = () => {
    const array = input.split("");
    const lastElement = array[array.length - 1];

    if (!lastElement.includes(".") && isNaN(parseInt(lastElement)) === false) {
      setInput(input + ".");
      setOutput(lastElement + ".");
    }
  }


  const handleEquals = () => {
    setInput(eval(input));
    setOutput(eval(input));
  }

  return (
    <div className="App">
      <div id='calculator'>
        <div id="display">
          <div id='input' type='text' disabled>{input}
          </div>
          <div id='output'>{output}</div>
        </div>
        <div id='buttons'>
          <div onClick={handleClear} className="button" id='clear'>AC</div>
          <div onClick={handleOperator} className="button" id='divide'>/</div>
          <div onClick={handleOperator} className="button" id='multiply'>*</div>
          <div onClick={handleNumber} className="button" id='seven'>7</div>
          <div onClick={handleNumber} className="button" id='eight'>8</div>
          <div onClick={handleNumber} className="button" id='nine'>9</div>
          <div onClick={handleOperator} className="button" id='subtract'>-</div>
          <div onClick={handleNumber} className="button" id='four'>4</div>
          <div onClick={handleNumber} className="button" id='five'>5</div>
          <div onClick={handleNumber} className="button" id='six'>6</div>
          <div onClick={handleOperator} className="button" id='add'>+</div>
          <div onClick={handleNumber} className="button" id='one'>1</div>
          <div onClick={handleNumber} className="button" id='two'>2</div>
          <div onClick={handleNumber} className="button" id='three'>3</div>
          <div onClick={handleNumber} className="button" id='zero'>0</div>
          <div onClick={handleDecimal} className="button" id='decimal'>.</div>
          <div onClick={handleEquals} className="button" id='equals'>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
