// reducer to keep track of error messages
import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';
import tagErrorsReducer from './tag_errors_reducer';

export default combineReducers({
  login: sessionErrorsReducer,
  comment: commentErrorsReducer,
  tag: tagErrorsReducer
});
