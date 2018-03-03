import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const Teams = ({
  teams, selectedTeam, selectTeam, addTeam,
}) => {
  const TeamTabs = () => (
    teams.map(team => (
      <li key={team.name} className="nav-item">
        <button
          onClick={() => { selectTeam(team.name); }}
          className={`nav-link ${team.name === selectedTeam ? 'active' : ''}`}
        >
          {team.name}
        </button>
      </li>
    )));

  const AddTeamButton = () => (
    <li className="nav-item">
      <button
        className="nav-link"
        onClick={() => { addTeam(); }}
      >
        +
      </button>
    </li>
  );

  return (
    <ul className="container nav nav-tabs">
      <TeamTabs />
      <AddTeamButton />
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    teams: state.appReducer.teams,
    selectedTeam: state.appReducer.selectedTeam,
  };
}

const mapDispatchToProps = dispatch => ({
  addTeam() {
    dispatch(actions.addTeam());
    dispatch(actions.selectTeam('New Team'));
  },

  selectTeam(selectedTeam) {
    dispatch(actions.selectTeam(selectedTeam));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
