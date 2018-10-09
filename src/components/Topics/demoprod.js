import React, { Component } from 'react';


export default class FilterString extends Component {
  
  constructor() {
    super();

    this.state = {
      title: '',
      imgUrl:'',
      price:'',
      products:[]
    };
  }
    inputHandler(prop, val){
        console.log('prop[, val' ,prop, val, [prop:val])
        this.setState({
            [prop] : val
        })
    }
//   handleChange(val) {
//     this.setState({ userInput: val });
//   }

  filterNames(userInput) {
    var names = this.state.names;
    var filteredNames = [];

    for ( var i = 0; i < names.length; i++ ) {
      if ( names[i].includes(userInput) ) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'> 
        <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
        </header>
      
      </div>
    )
  }
}

