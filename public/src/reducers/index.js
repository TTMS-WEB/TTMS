import { combineReducers } from 'redux'
import FindUsers from './FindUsers'
import Login from './Login';
import ShowLogin from'./ShowLogin';
import ShowAllEmployees from './ShowAllEmployees';
import ShowPlay from './showPlay';
import Seat from './Seat';
import GetStudios from './GetStudios';
import Nav from './Nav';
import SeatInfo from './SeatInfo';
import Register from './Register';
import GetRegisterId from './GetRegisterId';
import Sale from './Sale';
import playPlan from './playPlan'

export default combineReducers({
    FindUsers,
    Login,
    ShowLogin,
    ShowAllEmployees,
    ShowPlay,
    Seat,
    GetStudios,
    SeatInfo,
    Register,
    GetRegisterId,
    Nav,
    Sale,
    playPlan
});