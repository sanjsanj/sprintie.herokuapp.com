import { ADD_TEAM, SELECT_TEAM, TOGGLE_TEAM_OPTIONS } from '../constants';

export const initialState = {
  selectedTeam: null,
  showTeamOptions: false,
  teams: [
    {
      name: 'Sparkles',
      weeksPerSprint: 2,
      ptsPerDevPerDay: 1,
    },
    {
      name: 'Core',
      weeksPerSprint: 1,
      ptsPerDevPerDay: 1,
    },
  ],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM:
      if (state.teams.map(team => team.name === 'New Team').includes(true)) {
        return state;
      }
      return {
        ...state,
        teams: [
          ...state.teams,
          {
            name: 'New Team',
            weeksPerSprint: 1,
            ptsPerDevPerDay: 1,
          },
        ],
      };

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
