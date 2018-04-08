import { combineReducers} from 'redux';
import photoReducer from './photos_reducer';

const entitiesReducer = combineReducers({
  photos: photoReducer,
});

export default entitiesReducer;
