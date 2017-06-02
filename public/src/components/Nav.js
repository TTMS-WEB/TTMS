import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component {
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <ul id="main-nav" className="nav nav-tabs nav-stacked">
                            <li className="">
                                <Link to="/studios">
                                    演出厅管理
                                </Link>
                            </li>
                            <li>
                                <Link to="/seat">
                                    座位管理
                                </Link>
                            </li>
                            <li>
                                <Link to="/ticket">
                                    票务管理
                                </Link>
                            </li>
                            <li>
                                <Link to="/employees">
                                    员工管理
                                </Link>
                            </li>
                            <li>
                                <Link to="/play">
                                    剧目管理
                                </Link>
                            </li>
                            <li>
                                <Link to="/playPlan">
                                    演出计划
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
}
