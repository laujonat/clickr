import { combineReducers} from 'redux';
import photoReducer from './photos_reducer';
import userReducer from './users_reducer';

const entitiesReducer = combineReducers({
  photos: photoReducer,
  users: userReducer,
});

export default entitiesReducer;
