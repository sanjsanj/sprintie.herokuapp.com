import { v4 } from 'uuid';

import {
  ADD_MEMBER,
  ADD_TEAM,
  DELETE_TEAM,
  SELECT_TEAM,
  UPDATE_MEMBER_SETTINGS,
  UPDATE_TEAM_SETTINGS,
  DELETE_MEMBER,
  RESET_SPRINT,
} from '../constants';

export const initialState = {
  selectedTeam: null,
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
            adjustmentPts: 0,
          },
        ],
      };

    case DELETE_TEAM:
      return {
        ...state,
        teams: state.teams.filter(team => (team.name !== state.selectedTeam)),
        selectedTeam: null,
      };

    case SELECT_TEAM:
      return {
        ...state,
        selectedTeam: action.selectedTeam,
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
                adjustmentPts: action.options.adjustmentPts || team.adjustmentPts,
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
              return {
                ...team,
                members: [
                  ...team.members,
                  {
                    name: 'Enter Name',
                    memberId: v4(),
                    daysOffEverySprint: 0,
                    daysOffThisSprint: 0,
                  },
                ],
              };
            }
            return team;
          }),
        ],
      };

    case UPDATE_MEMBER_SETTINGS:
      return {
        ...state,
        teams: [
          ...state.teams.map((team) => {
            if (team.name === state.selectedTeam) {
              return {
                ...team,
                members: team.members.map((member) => {
                  if (member.memberId === action.options.memberId) {
                    return {
                      ...member,
                      name: action.options.name || member.name,
                      daysOffEverySprint: action.options.daysOffEverySprint || member.daysOffEverySprint,
                      daysOffThisSprint: action.options.daysOffThisSprint || member.daysOffThisSprint,
                      stackContribution: action.options.stackContribution === 0
                        ? 0
                        : action.options.stackContribution || member.stackContribution || 50,
                    };
                  }
                  return member;
                }),
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
            if (team.name === state.selectedTeam) {
              return {
                ...team,
                members: team.members.filter(member => (member.memberId !== action.memberId)),
              };
            }
            return team;
          }),
        ],
      };

    case RESET_SPRINT:
      return {
        ...state,
        teams: [
          ...state.teams.map((team) => {
            if (team.name === state.selectedTeam) {
              return {
                ...team,
                members: team.members.map(member => ({
                  ...member,
                  daysOffThisSprint: 0,
                })),
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
