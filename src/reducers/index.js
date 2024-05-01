import { combineReducers } from 'redux';
import jobReducer from './jobsReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  jobs: jobReducer,
  filters: filterReducer
});
