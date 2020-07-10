import {combineReducers} from 'redux';
import incrementReducer from './incrementReducer';
import userDataReducer from './userDataReducer';

const allReducer = combineReducers({
  incrementReducer,
  userDataReducer,
});

export default allReducer;
