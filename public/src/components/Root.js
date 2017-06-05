import {Component} from 'react';
import React from 'react';
import RootNav from '../containers/RootNav';
import Footer from '../components/Footer';

export default class Root extends Component {
    render() {
        return <div>
            <div className="nav-left">
                <RootNav/>
            </div>
            <div>
                {this.props.children}
            </div>
            <div className="footer-style">
                <Footer/>
            </div>
        </div>
    }
}
