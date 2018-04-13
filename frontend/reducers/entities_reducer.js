import { combineReducers} from 'redux';
import photoReducer from './photos_reducer';
import userReducer from './users_reducer';
import commentReducer from './comments_reducer';
import albumReducer from './albums_reducer';
import tagReducer from './tags_reducer';

const entitiesReducer = combineReducers({
  photos: photoReducer,
  users: userReducer,
  comments: commentReducer,
  albums: albumReducer,
  tags: tagReducer
});

export default entitiesReducer;
