import { combineReducers } from 'redux'
import FindUsers from './FindUsers'
import Login from './Login';
import ShowLogin from'./ShowLogin'

export default combineReducers({
    FindUsers,
    Login,
    ShowLogin
});