import React, {Component} from 'react';
import {Link} from 'react-router';

export default class RootNav extends Component {
    componentWillMount() {
        this.props.loadUsername();
    }

    render() {
        const username = this.props.Nav;
        return <div>
            <div className="navbar navbar-duomi navbar-static-top" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">剧院管理系统
                        </a>

                    </div>
                    <span className="token">
                        <Link to="/userCenter" className={username ? '' : 'hidden'}>{username}</Link>
                        </span>
                </div>
            </div>
        </div>
    }
}