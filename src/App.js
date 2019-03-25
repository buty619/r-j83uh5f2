import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      counter:0
    }
  }
  render() {
    return (
      <div className="container">
        <textarea id = "myTextarea" onChange = {this.count.bind(this)} rows="3"></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
  count(){
    this.setState({
                  counter : document.getElementById("myTextarea").value.length
                  });
  }
}

export default App;
