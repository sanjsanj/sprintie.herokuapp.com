import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { getSelectedTeam, getPoints } from '../helpers';

const TeamSettingsToggle = ({
  selectedTeam, toggleTeamOptions, addMember, resetSprint, calculatePoints,
}) => {
  if (selectedTeam === null) {
    return null;
  }
  return (
    <div className="container options row">
      <button
        type="button"
        className="btn btn-light col"
        onClick={() => { toggleTeamOptions(); }}
      >
        {selectedTeam.name} Settings
      </button>

      <div className="col" />

      <button
        className="btn btn-light"
        onClick={() => { addMember(); }}
      >
        Add Member
      </button>

      <div className="col" />

      <button
        className="btn btn-light"
        // eslint-disable-next-line no-alert, no-restricted-globals, no-undef
        onClick={() => { if (confirm(`Reset ${selectedTeam.name} Sprint?`)) { resetSprint(); } }}
      >
        Reset This Sprint
      </button>

      <div className="col" />

      <button
        type="button"
        className="btn btn-info col"
        onClick={() => { calculatePoints(selectedTeam); }}
      >
        Calculate {selectedTeam.name} Sprint Points
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedTeam: getSelectedTeam(state),
  };
}

const mapDispatchToProps = dispatch => ({
  toggleTeamOptions() {
    dispatch(actions.toggleTeamOptions());
  },
  addMember() {
    dispatch(actions.addMember());
  },
  resetSprint() {
    dispatch(actions.resetSprint());
  },
  calculatePoints(selectedTeam) {
    getPoints(selectedTeam);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamSettingsToggle);
