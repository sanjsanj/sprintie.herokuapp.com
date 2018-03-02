import { ADD_TEAM, SELECT_TEAM, SHOW_TEAM_OPTIONS } from '../constants';

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

  showTeamOptions(selectedTeam) {
    return {
      type: SHOW_TEAM_OPTIONS,
      selectedTeam,
    };
  },
};

export default actions;
