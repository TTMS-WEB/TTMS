import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import reducer from './reducers/index.js';
import FindAllUsers from './middlewares/FindUsers';
import register from './middlewares/Register';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import ShowLoginRegister from './containers/ShowLoginRegister'
import {createLogger} from 'redux-logger';
import  thunkMiddleware from 'redux-thunk';
import AllEmployees from './containers/AllEmployees';
import App from './components/App';
import GetAllEmployees from './middlewares/GetAllEmployees';
const Middleware = applyMiddleware(thunkMiddleware, createLogger(), FindAllUsers, register, GetAllEmployees);

let store = createStore(reducer, Middleware);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" components={App}>
                <IndexRoute components={ShowLoginRegister}/>
                <Route path="/employees" components={AllEmployees}/>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
)
;

