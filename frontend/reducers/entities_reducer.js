import { combineReducers} from 'redux';
import photoReducer from './photos_reducer';
import userReducer from './users_reducer';
import commentReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  photos: photoReducer,
  users: userReducer,
  comments: commentReducer,
});

export default entitiesReducer;
