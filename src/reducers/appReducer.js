import { SELECT_TEAM } from '../constants';

export const initialState = {
  selectedTeam: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TEAM:
      return {
        ...state,
        selectedTeam: action.selectedTeam,
      };

    default:
      return state;
  }
};
