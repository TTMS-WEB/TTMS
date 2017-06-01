import {Component} from 'react';
import React from 'react';
import Footer from'./Footer';
import Nav from '../containers/Nav';

export default class App extends Component {
    render() {
        return <div>
            <div>
                <Nav/>
            </div>
            <div className="col-md-10 content">
            {this.props.children}
            </div>
            <div className="footer-style">
                <Footer/>
            </div>
        </div>
    }
}
