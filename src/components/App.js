import React, { Component } from 'react';
import Header from './Header';
import Teams from './Teams';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Teams />
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
