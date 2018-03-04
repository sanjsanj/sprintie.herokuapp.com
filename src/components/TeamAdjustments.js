import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const TeamAdjustments = ({ selectedTeam, updateTeamSettings }) => (
  <div className="container teamAdjustmentsContainer">
    <div className="teamAdjustments">
      <label htmlFor="adjustmentPts">Meeting days this sprint</label>
      <input
        className="form-control"
        type="number"
        id="adjustmentPts"
        placeholder={selectedTeam.adjustmentPts}
        step="0.5"
        min="0.5"
        max="50"
        onChange={(event) => {
          updateTeamSettings({
            oldName: selectedTeam.name,
            adjustmentPts: event.target.value,
          });
        }}
      />
    </div>
  </div>
);

function mapStateToProps(state) {
  const { selectedTeam } = state.appReducer;
  return {
    selectedTeam: state.appReducer.teams.filter(team => team.name === selectedTeam)[0] || {
      members: [],
    },
  };
}

const mapDispatchToProps = dispatch => ({
  updateTeamSettings(options) {
    dispatch(actions.updateTeamSettings(options));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamAdjustments);
