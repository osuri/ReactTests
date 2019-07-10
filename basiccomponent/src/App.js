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
        <h1 data-test='counter-display'>The counter currently is</h1>
        <buuton data-test='button-increment'>Increment Counter</buuton>
      </div>
    );
  }
}
  


export default App;
