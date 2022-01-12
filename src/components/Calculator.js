import './calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      operation: null,
      total: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, operation, total } = this.state;
    return (
      <div className="container">
        <div className="display">{ next || operation || total || 0 }</div>
        <div className="buttons">
          <div className="row">
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">AC</button>
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">+/-</button>
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">%</button>
            <button type="button" onClick={this.clickHandler} className="btn-normal orange first">÷</button>
          </div>
          <div className="row">
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">7</button>
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">8</button>
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">9</button>
            <button type="button" onClick={this.clickHandler} className="btn-normal orange">x</button>
          </div>
          <div className="row">
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">4</button>
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">5</button>
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">6</button>
            <button type="button" onClick={this.clickHandler} className="btn-normal orange">-</button>
          </div>
          <div className="row">
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">1</button>
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">2</button>
            <button type="button" onClick={this.clickHandler} className="gray btn-normal">3</button>
            <button type="button" onClick={this.clickHandler} className="btn-normal orange">+</button>
          </div>
          <div className="row">
            <button type="button" onClick={this.clickHandler} className="gray btn-normal double">0</button>
            <button type="button" onClick={this.clickHandler} className="gray btn-normal last">.</button>
            <button type="button" onClick={this.clickHandler} className="btn-normal orange last">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
