import { combineReducers } from 'redux'
import FindUsers from './FindUsers'
import Login from './Login';
import ShowLogin from'./ShowLogin';
import ShowAllEmployees from './ShowAllEmployees';

export default combineReducers({
    FindUsers,
    Login,
    ShowLogin,
    ShowAllEmployees
});