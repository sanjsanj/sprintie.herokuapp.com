import React, { Component } from 'react';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
