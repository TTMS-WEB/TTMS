import {Component} from 'react';
import React from 'react';

export default class App extends Component {
    render() {
        return <div>
            {this.props.Children}
        </div>
    }
}
