import { useState } from "react";
import "../Styles/styleCalculator.css";

import React from "react";

const Calculator = () => {
  const [inputvalue, setInputvalue] = useState("");

  function display(value) {
    setInputvalue(inputvalue + value);
  }

  function calculate() {
    var answers = eval(inputvalue);
    setInputvalue(answers);
  }

  function clear() {
    setInputvalue("");
  }

  return (
    <>
      <form className="calculator" name="calc">
        <input type="text" className="value" value={inputvalue} />
        <span className="num clear" onClick={() => clear()}>
          Clear
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>
          +
        </span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className="num equal" onClick={() => calculate()}>
          =
        </span>
      </form>
    </>
  );
};

export default Calculator;
