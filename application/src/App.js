import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculate extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value:this.props.value
    };
    this.One=this.One.bind(this);
    this.Two=this.Two.bind(this);
    this.Three=this.Three.bind(this);
    this.Four=this.Four.bind(this);
    this.Five=this.Five.bind(this);
    this.Six=this.Six.bind(this);
    this.Seven=this.Seven.bind(this);
    this.Eight=this.Eight.bind(this);
    this.Nine=this.Nine.bind(this);
    this.Zero=this.Zero.bind(this);
  }

  One() {
    this.setState (
      {
      value:this.state.value+"1"
  });
}


  Two() {
    this.setState ({
      value:this.state.value+"2"
});
}

  Three() {
    this.setState ({
      value:this.state.value+"3"
});
}

  Four() {
    this.setState ({
      value:this.state.value+"4"
});
}
  Five() {
    this.setState ({
      value:this.state.value+"5"
});
}
Six() {
  this.setState ({
    value:this.state.value+"6"
});
}

Seven() {
  this.setState ({
    value:this.state.value+"7"
});
}

Eight() {
  this.setState ({
    value:this.state.value+"8"
});
}

Nine() {
  this.setState ({
    value:this.state.value+"9"
});
}

Zero() {
  this.setState ({
    value:this.state.value+"0"
});
}




  render() {
    return (
      <div className="name">
        <input className="input" type="text" value={this.state.value}/>
        <div className="name">
          <button onClick={this.Nine} className = "button">9</button>
          <button onClick={this.Eight} className = "button">8</button>
          <button onClick={this.Seven} className = "button">7</button><br />
          <button onClick={this.Six} className = "button">6</button> 
          <button onClick={this.Five} className = "button">5</button>
          <button onClick={this.Four} className = "button">4</button><br />
          <button onClick={this.Three} className = "button">3</button>
          <button onClick={this.Two} className = "button">2</button>
          <button onClick={this.One} className = "button">1</button><br />
          <button onClick={this.Zero} className = "button">0</button>
        </div>
      </div>
    )
  };
}
class App extends React.Component {
  render () {
    return (
      <div>
      <Calculate value={0}/>
      </div>
    )
  }
}

export default App;


