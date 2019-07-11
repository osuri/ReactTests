import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
  }
  render(){
    return (
      <div className="App" data-test='component-app'>
        <h1 data-test='counter-display'>The counter currently is : {this.state.counter}</h1>
        <buuton data-test='button-increment' 
        onClick={()=>this.setState({counter: this.state.counter + 1})}
        >Increment Counter</buuton>
        <buuton data-test='button-decrement' 
        onClick = {()=>this.setState({counter:this.state.counter-1})}
        >Decrement Counter</buuton>
      </div>
    );
  }
}
  


export default App;
