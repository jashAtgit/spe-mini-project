import React, { useState } from "react";
import "./App.css";
/* eslint no-eval: 0 */

function App() {
  const [value, setValue] = useState("");

  const handleButtonPress = (e) => {
    setValue(value + e.target.value);
  };

  const handleBackspace = () => {
    setValue(value.slice(0,value.length-1));
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  const clear = () => {
    setValue("");
  };

  const calcFact = (num) => {
    if(num < 0) {
      return "Error"
    }
  
    else if (num === 0) {
      return "1";
    }
  
    else {
      let fact = 1;
      for (let i = 1; i <= num; i++) {
          fact *= i;
      }
      return fact;
    }
  };

  const handleFact = (e) => {
    const res = calcFact(value);
    setValue(res);
    
  }

  return (
    <div data-testid="calculator" className="calculator">
      <p className="desc">ƒ ( x )</p>
      <div className="display">{value}</div>
      <div className="buttons">
        <button onClick={handleButtonPress} value="7">
          7
        </button>
        <button onClick={handleButtonPress} value="8">
          8
        </button>
        <button onClick={handleButtonPress} value="9">
          9
        </button>
        <button onClick={handleBackspace} className="del" value="del">
          Del
        </button>
        
        <button onClick={handleButtonPress} value="4">
          4
        </button>
        <button onClick={handleButtonPress} value="5">
          5
        </button>
        <button onClick={handleButtonPress} value="6">
          6
        </button>
        <button onClick={handleButtonPress} className="operator" value="*">
          ×
        </button>

        <button onClick={handleButtonPress} value="1">
          1
        </button>
        <button onClick={handleButtonPress} value="2">
          2
        </button>
        <button onClick={handleButtonPress} value="3">
          3
        </button>
        <button onClick={handleButtonPress}  className="operator" value="-">
          -
        </button>

        <button onClick={handleButtonPress} value="0">
          0
        </button>
        <button onClick={handleButtonPress} value=".">
          .
        </button>
        
        <button onClick={handleButtonPress}  className="operator" value="+">
          +
        </button>
        <button onClick={handleButtonPress}  className="operator" value="/">
          ÷
        </button>
        
        <button onClick={handleButtonPress}  className="operator" value="%">
          %
        </button>
        <button onClick={handleFact}  className="operator" value="!">
          !
        </button>
        <button onClick={handleButtonPress}  className="operator" value="**">
          ^
        </button>
        <button onClick={handleButtonPress}  className="operator" value="Math.sqrt(">
          √ 
        </button>
        <button onClick={handleButtonPress}  className="operator" value="(">
          (
        </button>
        <button onClick={handleButtonPress}  className="operator" value=")">
          )
        </button>
        
        <button onClick={handleButtonPress}  className="function" value="Math.log(">
          ln
        </button>
        
        <button onClick={clear} className="clear" value="AC">
          AC
        </button>
        <button onClick={calculate}  className="equals" value="=">
          =
        </button>
        

      </div>
    </div>
  );
}

export default App;
