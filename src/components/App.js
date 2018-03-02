import React from 'react';
import Header from './Header';
import Teams from './Teams';
import TeamSettingsToggle from './TeamSettingsToggle';
import TeamSettings from './TeamSettings';

const App = () => (
  <div className="app">
    <Header />
    <Teams />
    <TeamSettingsToggle />
    <TeamSettings />
  </div>
);

export default App;
