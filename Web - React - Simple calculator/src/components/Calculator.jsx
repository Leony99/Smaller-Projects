import { Component } from "react";
import "../styles/calculator.css";

import Display from "./Display";
import Button from "./Button";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.deleteLastDigit = this.deleteLastDigit.bind(this);
    this.addDigit = this.addDigit.bind(this);
    this.setOperation = this.setOperation.bind(this);

    this.state = {
      displayValueTop: "0",
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    };
  }

  clearMemory() {
    this.setState({
      displayValueTop: "0",
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    });
  }

  deleteLastDigit() {
    const displayValue = this.state.displayValue;
    const current = this.state.current;
    let values = this.state.values;

    if (displayValue.length === 1) {
      values[current] = 0;
      this.setState({
          displayValue: '0',
          values: values
      });
    }
    else {
      const newValue = displayValue.slice(0, -1);
      values[current] = parseFloat(newValue);
      this.setState({
        displayValue: newValue,
        values: values
      });
    }
  }

  addDigit(digit) {
    if (digit === "." && this.state.displayValue.includes(".")) {
      return;
    }

    const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + digit;
    this.setState({ displayValue, clearDisplay: false });

    if (digit !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
    }
  }

  setOperation(operation) {
    if (this.state.operation && operation !== "=") {
      return;
    }
    if (this.state.displayValueTop.includes("=") && operation === "=" ||
    this.state.displayValueTop === "0" && operation === "=") {
      this.setState({
        displayValueTop: this.state.values[this.state.current].toString() + " ="
      });
      return;
    }

    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } 
    else {
      const equals = operation === "=";
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } 
      catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;

      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });
    }

    if (operation !== "=") {
      if (operation === "*") {
        operation = "x";
      }
      this.setState({
        displayValueTop: this.state.values[this.state.current].toString() + " " + operation,
        displayValue: "0"
      });
    }
    else {
      this.setState({
        displayValueTop: this.state.displayValueTop + " "
        + this.state.values[this.state.current].toString() + " ="
      });
    }
  }

  render() {
    return (
        <div className="calculator">
            <Display valueTop={this.state.displayValueTop} valueBottom={this.state.displayValue} />
            <Button click={() => this.clearMemory()} label="AC" double />
            <Button click={() => this.deleteLastDigit()} label="<" />
            <Button click={() => this.setOperation("/")} label="/" operation />
            <Button click={() => this.addDigit("7")} label="7" />
            <Button click={() => this.addDigit("8")} label="8" />
            <Button click={() => this.addDigit("9")} label="9" />
            <Button click={() => this.setOperation("*")} label="x" operation />
            <Button click={() => this.addDigit("4")} label="4" />
            <Button click={() => this.addDigit("5")} label="5" />
            <Button click={() => this.addDigit("6")} label="6" />
            <Button click={() => this.setOperation("-")} label="-" operation />
            <Button click={() => this.addDigit("1")} label="1" />
            <Button click={() => this.addDigit("2")} label="2" />
            <Button click={() => this.addDigit("3")} label="3" />
            <Button click={() => this.setOperation("+")} label="+" operation />
            <Button click={() => this.addDigit("0")} label="0" double />
            <Button click={() => this.addDigit(".")} label="." />
            <Button click={() => this.setOperation("=")} label="=" operation />
        </div>
    )
  }
}