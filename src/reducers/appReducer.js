import { v4 } from 'uuid';

import {
  ADD_MEMBER,
  ADD_TEAM,
  DELETE_TEAM,
  SELECT_TEAM,
  TOGGLE_TEAM_OPTIONS,
  UPDATE_MEMBER_SETTINGS,
  UPDATE_TEAM_SETTINGS,
  DELETE_MEMBER,
} from '../constants';

export const initialState = {
  selectedTeam: null,
  showTeamOptions: false,
  teams: [],
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
            members: [],
          },
        ],
      };

    case DELETE_TEAM:
      return {
        ...state,
        teams: state.teams.filter(team => (team.name !== state.selectedTeam)),
        showTeamOptions: false,
        selectedTeam: null,
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
                ...team,
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

    case ADD_MEMBER:
      return {
        ...state,
        teams: [
          ...state.teams.map((team) => {
            if (team.name === state.selectedTeam) {
              // return existing team if unnamed member exists
              // if (team.members.map(member => (member.name === 'Enter Name')).includes(true)) {
              //   return team;
              // }
              // return team with new unnamed member
              return {
                ...team,
                members: [
                  ...team.members,
                  {
                    name: 'Enter Name',
                    memberId: v4(),
                    dayOffEverySprint: 0,
                    daysOffThisSprint: 0,
                  },
                ],
              };
            }
            // return teams that aren't selected
            return team;
          }),
        ],
      };

    case UPDATE_MEMBER_SETTINGS:
      return {
        ...state,
        teams: [
          ...state.teams.map((team) => {
            // get the selected team
            if (team.name === state.selectedTeam) {
              return {
                ...team,
                members: team.members.map((member) => {
                  // get the right member
                  if (member.memberId === action.options.memberId) {
                    return {
                      ...member,
                      name: action.options.name || member.name,
                      dayOffEverySprint: action.options.dayOffEverySprint || member.dayOffEverySprint,
                      daysOffThisSprint: action.options.daysOffThisSprint || member.daysOffThisSprint,
                    };
                  }
                  return member;
                }),
                // update their settings or default
              };
            }
            return team;
          }),
        ],
      };

    case DELETE_MEMBER:
      return {
        ...state,
        teams: [
          ...state.teams.map((team) => {
          // get the selected team
            if (team.name === state.selectedTeam) {
              return {
                ...team,
                members: team.members.filter(member => (member.memberId !== action.memberId)),
              // update their settings or default
              };
            }
            return team;
          }),
        ],
      };

    default:
      return state;
  }
};
