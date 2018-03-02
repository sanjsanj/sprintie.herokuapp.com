import { SELECT_TEAM, TOGGLE_TEAM_OPTIONS } from '../constants';

export const initialState = {
  selectedTeam: null,
  showTeamOptions: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TEAM:
      return {
        ...state,
        selectedTeam: action.selectedTeam,
        showTeamOptions: false,
      };

    case TOGGLE_TEAM_OPTIONS:
      return {
        ...state,
        showTeamOptions: !state.showTeamOptions,
      };

    default:
      return state;
  }
};
