import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const Teams = ({ teams, addTeam }) => {
  const teamTabs = teams.map((team, index) => (
    <li key={index} className="nav-item">
      <button className={`nav-link ${index === 0 ? 'active' : ''}`}>
        {team}
      </button>
    </li>
  ));

  return (
    <ul className="container nav nav-tabs">
      {teamTabs}
      <li className="nav-item">
        <button className="nav-link" onClick={() => { addTeam(); }}>+</button>
      </li>
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    teams: state.teamReducer.teams,
  };
}

const mapDispatchToProps = dispatch => ({
  addTeam: () => {
    dispatch(actions.addTeam());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
