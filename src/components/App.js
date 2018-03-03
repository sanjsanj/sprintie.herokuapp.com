import React from 'react';
import Header from './Header';
import Teams from './Teams';
import TeamSettingsToggle from './TeamSettingsToggle';
import TeamSettings from './TeamSettings';
import Members from './Members';

const App = () => (
  <div className="app">
    <Header />
    <Teams />
    <TeamSettingsToggle />
    <TeamSettings />
    <Members />
  </div>
);

export default App;
