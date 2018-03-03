import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const TeamSettings = ({ showTeamOptions, selectedTeam, updateTeamSettings }) => {
  if (showTeamOptions) {
    return (
      <div className="container options">
        <form>
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="teamName">Team Name</label>
              <input
                className="form-control"
                type="text"
                id="teamName"
                // placeholder={selectedTeam.name}
                placeholder="Enter Name..."
                onChange={(event) => {
                  updateTeamSettings({
                    oldName: selectedTeam.name,
                    newName: event.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="weeksPerSprint">Weeks per sprint</label>
              <input
                className="form-control"
                type="number"
                id="weeksPerSprint"
                placeholder={selectedTeam.weeksPerSprint}
                step="1"
                min="1"
                max="2"
                onChange={(event) => {
                  updateTeamSettings({
                    oldName: selectedTeam.name,
                    weeksPerSprint: event.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="pointsPerDevPerDay">Points per dev per day</label>
              <input
                className="form-control"
                type="number"
                id="pointsPerDevPerDay"
                placeholder={selectedTeam.ptsPerDevPerDay}
                step="0.5"
                min="0.5"
                max="2"
                onChange={(event) => {
                  updateTeamSettings({
                    oldName: selectedTeam.name,
                    ptsPerDevPerDay: event.target.value,
                  });
                }}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
  return null;
};

function getSelectedTeam(state) {
  const { selectedTeam } = state.appReducer;
  return state.appReducer.teams.filter(team => team.name === selectedTeam)[0];
}

function mapStateToProps(state) {
  return {
    showTeamOptions: state.appReducer.showTeamOptions,
    selectedTeam: getSelectedTeam(state),
  };
}

const mapDispatchToProps = dispatch => ({
  toggleTeamOptions() {
    dispatch(actions.toggleTeamOptions());
  },
  updateTeamSettings(options) {
    dispatch(actions.updateTeamSettings(options));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamSettings);
