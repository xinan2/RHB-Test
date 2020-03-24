import { combineReducers } from 'redux';
import repoListReducer from './RepoReducer';

export default combineReducers({
  repoList: repoListReducer,
});