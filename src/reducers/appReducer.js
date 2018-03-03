import { ADD_TEAM, SELECT_TEAM, TOGGLE_TEAM_OPTIONS, UPDATE_TEAM_SETTINGS } from '../constants';

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

    case UPDATE_TEAM_SETTINGS:
      return {
        ...state,
        teams: [
          ...state.teams.map((team) => {
            if (team.name === action.options.oldName) {
              return {
                name: action.options.newName || team.name,
                weeksPerSprint: action.options.weeksPerSprint || team.weeksPerSprint,
                ptsPerDevPerDay: action.options.ptsPerDevPerDay || team.ptsPerDevPerDay,
              };
            }
            return team;
          }),
        ],
        selectedTeam: action.options.newName || state.selectedTeam,
      };

    default:
      return state;
  }
};
