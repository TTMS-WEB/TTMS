import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Login from './containers/Login';
import reducer from './reducers/index.js';

let store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <Login/>
    </Provider>
    , document.getElementById('root')
);

