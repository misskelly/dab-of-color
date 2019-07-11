import { combineReducers } from 'redux';
import * as reducers from './allReducers';

const rootReducer = combineReducers({
  isLoading: reducers.loadingReducer,
  currentColors: reducers.currentColorsReducer,
  currentProject: reducers.currentProjectReducer,
  allProjects: reducers.allProjectsReducer
})

export default rootReducer;