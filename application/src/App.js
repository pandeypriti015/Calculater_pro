import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculate extends React.Component {
  constructor(props){
    super(props)
      let temp;
      let operator;
    this.state={
      value:this.props.value
    };
    // this.One=this.One.bind(this);
    // this.Two=this.Two.bind(this);
    // this.Three=this.Three.bind(this);
    // this.Four=this.Four.bind(this);
    // this.Five=this.Five.bind(this);
    // this.Six=this.Six.bind(this);
    // this.Seven=this.Seven.bind(this);
    // this.Eight=this.Eight.bind(this);
    // this.Nine=this.Nine.bind(this);
    // this.Zero=this.Zero.bind(this);
    this.numberPad = this.numberPad.bind(this);
    this.takequantity=this.takequantity.bind(this);
    this.store=this.store.bind(this);
    this.result=this.result.bind(this);
  }

//   One() {
//     this.setState (
//       {
//       value:this.state.value+"1"
//   });
// }


//   Two() {
//     this.setState ({
//       value:this.state.value+"2"
// });
// }

//   Three() {
//     this.setState ({
//       value:this.state.value+"3"
// });
// }

//   Four() {
//     this.setState ({
//       value:this.state.value+"4"
// });
// }
//   Five() {
//     this.setState ({
//       value:this.state.value+"5"
// });
// }
// Six() {
//   this.setState ({
//     value:this.state.value+"6"
// });
// }

// Seven() {
//   this.setState ({
//     value:this.state.value+"7"
// });
// }

// Eight() {
//   this.setState ({
//     value:this.state.value+"8"
// });
// }

// Nine() {
//   this.setState ({
//     value:this.state.value+"9"
// });
// }

// Zero() {
//   this.setState ({
//     value:this.state.value+"0"
// });
// }
takequantity(event){
  let value = event.target.value;
    if(value){
      this.setState({
        value:parseInt(value)
    });
  }
    else {
      this.setState({
        value:parseInt(0)
      });
    }
  }

    clear(){
      this.setState({
        value:0
      });
    }

  numberPad(value) {
    this.setState({
      value: this.state.value + value
    });
  }
  
  store(operator) {
    this.temp = this.state.value
    this.operator = operator
    this.setState({
      value:0
    });
  }


  result() {
    if(this.operator ==='1'){
    this.setState ({
      value : parseInt(this.temp) + parseInt(this.state.value)
    });
  }

    else if (this.operator === '2'){
    this.setState ({
      value : parseInt(this.temp) - parseInt(this.state.value)
    });
  }
  else if (this.operator === '3'){
    this.setState ({
      value : parseInt(this.temp) * parseInt(this.state.value)
    });
  }
  else if (this.operator === '4'){
    this.setState ({
      value : parseInt(this.temp) / parseInt(this.state.value)
    });
  }
}


  render() {

    return (
      <div className="input-box">
        <input className="input" type="text" onChange={this.takequantity} value={this.state.value}/>
        <div className="box">
          <button onClick={(event) => this.numberPad('9')} className = "button">9</button>
          <button onClick={(event) => this.numberPad('8')} className = "button">8</button>
          <button onClick={(event) => this.numberPad('7')} className = "button">7</button><br />

          <button onClick={(event) => this.numberPad('6')} className = "button">6</button> 
          <button onClick={(event) => this.numberPad('5')} className = "button">5</button>
          <button onClick={(event) => this.numberPad('4')} className = "button">4</button>< br />
         

          <button onClick={(event) => this.numberPad('3')} className = "button">3</button>
          <button onClick={(event) => this.numberPad('2')} className = "button">2</button>
          <button onClick={(event) => this.numberPad('1')} className = "button">1</button><br />
         
          <button onClick={(event) => this.clear()} className = "button">C</button>
          <button onClick={(event) => this.numberPad('0')} className = "button">0</button>
          <button onClick={this.result} className = "button">=</button><br />

          <button onClick={(event) => this.store('1')} className = "button">+</button>
          <button onClick={(event) => this.store('2')} className = "button">-</button>
          <button onClick={(event) => this.store('3')} className = "button">*</button><br />
          <button onClick={(event) => this.store('4')} className = "button">/</button>
          
          


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


