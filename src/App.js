import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleButtonPress = (e) => {
    setValue(value + e.target.value);
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

  return (
    <div className="calculator">
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
        <button onClick={handleButtonPress}  className="operator" value="/">
          ÷
        </button>
        <button onClick={handleButtonPress}  className="function" value="Math.log(">
          log
        </button>
        <button onClick={handleButtonPress}  className="operator" value=")">
          )
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
        <button onClick={calculate}  className="operator" value="=">
          =
        </button>
        <button onClick={handleButtonPress}  className="operator" value="+">
          +
        </button>
        <button onClick={clear} className="clear" value="AC">
          AC
        </button>
      </div>
    </div>
  );
}

export default App;
