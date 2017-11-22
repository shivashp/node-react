import { combineReducers } from 'redux';
import userReducer from './userReducer';
import ActiveUserReducer from './active-user-reducer';

export default combineReducers({
    users: userReducer,
    activeUser: ActiveUserReducer
});

