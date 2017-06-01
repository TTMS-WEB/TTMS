import { combineReducers } from 'redux'
import FindUsers from './FindUsers'
import Login from './Login';
import ShowLogin from'./ShowLogin';
import ShowAllEmployees from './ShowAllEmployees';
import ShowPlay from './showPlay';
import Seat from './Seat';
import GetStudios from './GetStudios';
import SeatInfo from './SeatInfo';
import SeatStatus from './SeatStatus';

export default combineReducers({
    FindUsers,
    Login,
    ShowLogin,
    ShowAllEmployees,
    ShowPlay,
    Seat,
    GetStudios,
    SeatInfo,
    SeatStatus
});