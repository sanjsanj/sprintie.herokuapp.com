import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const TeamSettingsToggle = ({ selectedTeam, toggleTeamOptions }) => {
  if (selectedTeam === null) {
    return null;
  }
  return (
    <div className="container options row">
      <button
        type="button"
        className="btn btn-info col"
        onClick={() => { toggleTeamOptions(); }}
      >
        {selectedTeam} Settings
      </button>

      <div className="col" />

      <button
        type="button"
        className="btn btn-success col"
        onClick={() => { }}
      >
        Calculate {selectedTeam} Points
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedTeam: state.appReducer.selectedTeam,
  };
}

const mapDispatchToProps = dispatch => ({
  toggleTeamOptions: () => {
    dispatch(actions.toggleTeamOptions());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamSettingsToggle);
