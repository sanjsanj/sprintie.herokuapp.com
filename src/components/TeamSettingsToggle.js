import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { getSelectedTeam, getPoints } from '../helpers';

const TeamSettingsToggle = ({
  selectedTeam, addMember, resetSprint, calculatePoints,
}) => {
  if (selectedTeam === null) {
    return null;
  }
  return (
    <div className="container options row">
      <button
        className="btn btn-light"
        id="btn-add-member"
        onClick={() => { addMember(); }}
      >
        Add Member
      </button>

      <div className="col" />

      <button
        className="btn btn-light"
        id="btn-reset-sprint"
        // eslint-disable-next-line
        onClick={() => { if (confirm(`Reset ${selectedTeam.name} Sprint?`)) { resetSprint(); } }}
      >
        Reset This Sprint
      </button>

      <div className="col" />

      <button
        type="button"
        className="btn btn-info col"
        id="btn-calculate-points"
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
