import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const TeamOptions = ({ selectedTeam, showTeamOptions }) => {
  if (selectedTeam === null) {
    return null;
  }
  return (
    <div className="container options">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => { showTeamOptions(selectedTeam); }}
      >
        {selectedTeam} Options
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
  showTeamOptions: (selectedTeam) => {
    dispatch(actions.showTeamOptions(selectedTeam));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamOptions);
