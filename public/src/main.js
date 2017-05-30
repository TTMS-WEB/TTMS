import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import reducer from './reducers/index.js';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import ShowLoginRegister from './containers/ShowLoginRegister'

let store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" components={ShowLoginRegister}>
                <IndexRoute components={ShowLoginRegister}/>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
)
;

