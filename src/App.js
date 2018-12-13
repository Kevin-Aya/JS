import React, { Component } from 'react';
import WheatherLocation from './components/wheaterLocations'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WheatherLocation />
      </div>
    );
  }
}

export default App;
