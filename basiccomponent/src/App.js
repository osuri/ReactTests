import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      counter : 0,
      error: false,
    }
  }
  increment(){
    if(this.state.error){
      this.setState({error: false})
    }
    
    this.setState({counter: this.state.counter + 1})
  }
  decrement(){
    if(this.state.counter === 0)
    {
      this.setState({error: true})
    }
    else{
      this.setState({counter:this.state.counter-1})
    }
    
  }
  render(){
    const fontcolor = this.state.error ? '':'hidden'
    return (
      <div className="App" data-test='component-app'>
        
        <h1 data-test='counter-display'>The counter currently is : {this.state.counter}</h1>
        {this.state.error &&
        <h3 data-test='validation-error' className={`error ${fontcolor}`}>Counter should not be less than zero</h3>}
        <buuton data-test='button-increment' 
        onClick={this.increment}
        >Increment Counter</buuton>
        <buuton data-test='button-decrement' 
        onClick = {this.decrement}
        >Decrement Counter</buuton>
      </div>
    );
  }
}
  


export default App;
