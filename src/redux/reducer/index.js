import { combineReducers } from 'redux';
import * as reducers from './allReducers';

const rootReducer = combineReducers({
  isLoading: reducers.loadingReducer,
  currentColors: reducers.currentColorsReducer,
  featuredProject: reducers.currentProjectReducer,
  allProjects: reducers.allProjectsReducer,
  hasErrored: reducers.errorReducer
});

export default rootReducer;
