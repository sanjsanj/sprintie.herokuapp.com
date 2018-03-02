import React from 'react';
import Header from './Header';
import Teams from './Teams';
import TeamOptions from './TeamOptions';

const App = () => (
  <div className="app">
    <Header />
    <Teams />
    <TeamOptions />
    <p className="app-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
