import React, {Component} from 'react';
import Register from '../containers/Register';
import Login from '../containers/FindUsers';

export default class LoginRegisterStyle extends Component {
    componentWillMount(){
        this.props.onLogin();
    }
    login() {
        this.props.onLogin();
    }

    register() {
        this.props.onRegister()
    }

    render() {
        return <div>
            <div id="carousel1" className="col-md-offset-7">
                <ul id="ul">
                    <li className="li" id="li1"><a onClick={this.login.bind(this)}>登陆</a></li>

                    <li className="li" id="li2"><a onClick={this.register.bind(this)}>注册</a></li>
                </ul>
                <div className={this.props.ShowLogin === "login" ? "" : 'hidden'}>
                    <Login/>
                </div>
                <div className={this.props.ShowLogin === "register" ? "" : 'hidden'}>
                    <Register/>
                </div>
            </div>
        </div>
    }
}