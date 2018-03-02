import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const Teams = ({
  teams, selectedTeam, selectTeam, addTeam,
}) => {
  const teamTabs = teams.map(team => (
    <li key={team} className="nav-item">
      <button onClick={() => { selectTeam(team); }} className={`nav-link ${team === selectedTeam ? 'active' : ''}`}>
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
    selectedTeam: state.appReducer.selectedTeam,
  };
}

const mapDispatchToProps = dispatch => ({
  addTeam: () => {
    dispatch(actions.addTeam());
  },

  selectTeam: (selectedTeam) => {
    dispatch(actions.selectTeam(selectedTeam));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
