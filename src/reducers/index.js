import { combineReducers } from 'redux';
// import { teamReducer } from './teamReducer';
import { appReducer } from './appReducer';

const reducers = combineReducers({
  appReducer,
  // teamReducer,
});

export default reducers;
