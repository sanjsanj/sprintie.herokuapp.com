import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const TeamSettings = ({ showTeamOptions }) => {
  if (showTeamOptions) {
    return (
      <div className="container options">
        <form>
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="weeksPerSprint">Weeks per sprint</label>
              <input className="form-control" type="number" id="weeksPerSprint" placeholder="1" step="1" min="1" max="2" />
            </div>
            <div className="form-group col">
              <label htmlFor="pointsPerDevPerDay">Points per dev per day</label>
              <input className="form-control" type="number" id="pointsPerDevPerDay" placeholder="1" step="0.5" min="0.5" max="2" />
            </div>
          </div>
        </form>
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
