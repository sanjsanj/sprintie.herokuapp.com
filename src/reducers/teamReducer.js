import { GET_TEAMS } from '../constants';

export const initialState = {
  teams: ['Sparkles', 'Core'],
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS:
      return state;

    default:
      return state;
  }
};
