import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import photosReducer from './photos_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  photos: photosReducer,
});

export default rootReducer;
