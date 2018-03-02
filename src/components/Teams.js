import React from 'react';
import { connect } from 'react-redux';

const Teams = ({ teams }) => {
  const teamTabs = teams.map((team, index) => (
    <li key={index} className="nav-item">
      <button className={`nav-link ${index === 0 ? 'active' : ''}`}>{team}</button>
    </li>
  ));

  return (
    <ul className="container nav nav-tabs">
      {teamTabs}
      <li className="nav-item">
        <button className="nav-link">+</button>
      </li>
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    teams: state.teamReducer.teams,
  };
}

export default connect(mapStateToProps)(Teams);
