import React, { Component } from 'react';

export default class Salestax extends Component {

  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: '',
      sum: null
    }
  }

  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    // this.setState({ number2: parseInt(val, 10) });
    this.setState({number2: +val})
  }

  add(num1, num2) {
    this.setState({ sum: num1 * (num2*.01) +num1   });
  }

  render() {
    //   console.log(this.state.number1)
    //   console.log(this.state.number2)
    //   console.log(this.state.sum)

    return (
      <div className="puzzleBox sumPB">
        <h4> Sales tax calculator </h4>
        <input className="inputLine" placeholder='Pre tax price' type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" placeholder='Tax rate %' type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Total amount: {this.state.sum} </span>
      </div>
    )
  }
}