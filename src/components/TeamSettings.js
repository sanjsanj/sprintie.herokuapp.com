import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const TeamSettings = ({ showTeamOptions }) => {
  if (showTeamOptions) {
    return (
      <div className="container options">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => { }}
        >
          Team Settings
        </button>
      </div>
    );
  }
  return null;
};

function mapStateToProps(state) {
  return {
    showTeamOptions: state.appReducer.showTeamOptions,
  };
}

const mapDispatchToProps = dispatch => ({
  toggleTeamOptions: () => {
    dispatch(actions.toggleTeamOptions());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamSettings);
