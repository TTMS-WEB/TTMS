import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import  thunkMiddleware from 'redux-thunk';

import App from './components/App';

import ShowLoginRegister from './containers/ShowLoginRegister'
import AllEmployees from './containers/AllEmployees';
import Seat from './containers/Seat';

import reducer from './reducers/index.js';
import login from './middlewares/FindUsers';
import register from './middlewares/Register';
import allEmployees from './middlewares/GetAllEmployees';
import seat from './middlewares/Seat';

const Middleware = applyMiddleware(thunkMiddleware, createLogger(), login, register, allEmployees,seat);

let store = createStore(reducer, Middleware);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ShowLoginRegister}/>
                <Route path="/employees" component={AllEmployees}/>
                <Route path="/seat" component={Seat}/>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

