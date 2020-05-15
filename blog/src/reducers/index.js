import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';
import userReducer from './UserReducer';

export default combineReducers({
    posts: postsReducer,
    users: userReducer,
});