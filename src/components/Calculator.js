import React from 'react';
import './calculator.css';
// import operate from '../logic/operate';
// import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="screen">0</div>
        <div className="buttons">
          <div className="row">
            <div className="gray btn-normal">AC</div>
            <div className="gray btn-normal">+/-</div>
            <div className="gray btn-normal">%</div>
            <div className="btn-normal orange first">÷</div>
          </div>
          <div className="row">
            <div className="gray btn-normal">7</div>
            <div className="gray btn-normal">8</div>
            <div className="gray btn-normal">9</div>
            <div className="btn-normal orange">x</div>
          </div>
          <div className="row">
            <div className="gray btn-normal">4</div>
            <div className="gray btn-normal">5</div>
            <div className="gray btn-normal">6</div>
            <div className="btn-normal orange">-</div>
          </div>
          <div className="row">
            <div className="gray btn-normal">1</div>
            <div className="gray btn-normal">2</div>
            <div className="gray btn-normal">3</div>
            <div className="btn-normal orange">+</div>
          </div>
          <div className="row">
            <div className="gray btn-normal double">0</div>
            <div className="gray btn-normal last">.</div>
            <div className="btn-normal orange last">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
