import { combineReducers } from 'redux'
import FindUsers from './FindUsers'
import Login from './Login';
import ShowLogin from'./ShowLogin';
import ShowAllEmployees from './ShowAllEmployees';
import showPlay from './showPlay';

export default combineReducers({
    FindUsers,
    Login,
    ShowLogin,
    ShowAllEmployees,
    showPlay
});