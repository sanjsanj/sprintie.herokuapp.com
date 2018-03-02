import { combineReducers } from 'redux';
import { teamReducer } from './teamReducer';

const reducers = combineReducers({
  teamReducer,
});

export default reducers;
