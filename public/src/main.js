import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import  thunkMiddleware from 'redux-thunk';

import App from './components/App';
import Root from './components/Root';

import ShowLoginRegister from './containers/ShowLoginRegister';
import AllEmployees from './containers/AllEmployees';
import Play from './containers/Play';
import Seat from './containers/Seat';
import GetStudios from './containers/Studios';
import Ticket from './containers/Ticket';
import Sale from './containers/Sale';
import PlayPlan from './containers/PlayPlan';
import Schedule from './containers/Schedule';


import reducer from './reducers/index.js';

import login from './middlewares/FindUsers';
import register from './middlewares/Register';
import allEmployees from './middlewares/GetAllEmployees';
import seat from './middlewares/Seat';
import getStudios from './middlewares/GetStudios';
import showPlay from './middlewares/showPlay';
import nav from './middlewares/Nav';
import ticket from './middlewares/Ticket';
import sale from './middlewares/Sale';
import schedule from './middlewares/Schedule';
import playPlan from './middlewares/PlayPlan'

const Middleware = applyMiddleware(thunkMiddleware, createLogger(),
    login, register, allEmployees, seat, getStudios, showPlay, nav, ticket,
    sale,schedule,playPlan);


let store = createStore(reducer, Middleware);

ReactDom.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/app" component={App}>
                <Route path="/employees" component={AllEmployees}/>
                <Route path="/studios" component={GetStudios}/>
                <Route path="/play" component={Play}/>
                <Route path="/seat" component={Seat}/>
                <Route path="/ticket" component={Ticket}/>
                <Route path='/playPlan' component={PlayPlan}/>
            </Route>
            <Route path="/root" component={Root}>
                <Route path='/schedule' component={Schedule}/>
                <Route path="/sale/:_id" component={Sale}/>
            </Route>
            <Route path="/" component={ShowLoginRegister}/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

