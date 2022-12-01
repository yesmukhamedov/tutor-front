import { combineReducers } from 'redux';

import userInfo from './userInfo';
import directory from './directory';


const rootReducer = combineReducers({
    userInfo,
    directory
});

export default rootReducer;