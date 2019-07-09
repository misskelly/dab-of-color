import { combineReducers } from 'redux';
import * as reducers from './allReducers';

const rootReducer = combineReducers({
  isLoading: reducers.loadingReducer
})

export default rootReducer;