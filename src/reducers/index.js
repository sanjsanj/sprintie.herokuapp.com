import { combineReducers } from 'redux';
import { teamReducer } from './teamReducer';
import { appReducer } from './appReducer';
import { teamOptionsReducer } from './teamOptionsReducer';

const reducers = combineReducers({
  appReducer,
  teamReducer,
  teamOptionsReducer,
});

export default reducers;
