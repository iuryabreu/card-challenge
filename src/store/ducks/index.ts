import { combineReducers } from 'redux';
import userReducer from './user';
import animalReducer from './animal'

const rootReducer = combineReducers({
  user: userReducer,
  animal: animalReducer
});

export default rootReducer;