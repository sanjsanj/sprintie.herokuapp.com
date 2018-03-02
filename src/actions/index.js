import { ADD_TEAM, SELECT_TEAM, TOGGLE_TEAM_OPTIONS } from '../constants';

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

  toggleTeamOptions(selectedTeam) {
    return {
      type: TOGGLE_TEAM_OPTIONS,
      selectedTeam,
    };
  },
};

export default actions;
