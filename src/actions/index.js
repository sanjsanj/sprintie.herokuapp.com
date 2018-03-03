import { ADD_TEAM, SELECT_TEAM, TOGGLE_TEAM_OPTIONS, UPDATE_TEAM_SETTINGS } from '../constants';

const actions = {
  addTeam() {
    return {
      type: ADD_TEAM,
    };
  },

  selectTeam(selectedTeam) {
    return {
      type: SELECT_TEAM,
      selectedTeam,
    };
  },

  toggleTeamOptions() {
    return {
      type: TOGGLE_TEAM_OPTIONS,
    };
  },

  updateTeamSettings(options) {
    return {
      type: UPDATE_TEAM_SETTINGS,
      options,
    };
  },
};

export default actions;
