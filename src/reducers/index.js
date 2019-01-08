import { combineReducers } from 'redux';
import { isLoading, hasErrored, houseReducer } from './houseReducer';

const rootReducer = combineReducers({
  houses: houseReducer,
  error: hasErrored
  isLoading,
})

export default rootReducer;