import {Component} from 'react';
import React from 'react';
import Footer from'./Footer';
import RootNav from '../containers/RootNav';

export default class App extends Component {
    render() {
        return <div>
            <div className="nav-left">
                <RootNav/>
            </div>
            <div className="col-md-10 content" id="Content">
                {this.props.children}
            </div>
            <div className="footer-style">
                <Footer/>
            </div>
        </div>
    }
}
