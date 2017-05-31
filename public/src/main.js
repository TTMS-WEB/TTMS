import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import  thunkMiddleware from 'redux-thunk';

import reducer from './reducers/index.js';

import FindAllUsers from './middlewares/FindUsers';
import register from './middlewares/Register';
import GetAllEmployees from './middlewares/GetAllEmployees';

import App from './components/App';

import ShowLoginRegister from './containers/ShowLoginRegister'
import AllEmployees from './containers/AllEmployees';
import Play from './containers/Play'

const Middleware = applyMiddleware(thunkMiddleware, createLogger(), FindAllUsers, register, GetAllEmployees);

let store = createStore(reducer, Middleware);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ShowLoginRegister}/>
                <Route path="/employees" component={AllEmployees}/>
                <Route path="play" component={Play}/>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

