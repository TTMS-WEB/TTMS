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
                                    <span className="studiomanage"> </span>
                                    演出厅管理
                                </Link>
                            </li>
                            <li>
                                <Link to="/seat" className="nav-header collapsed" data-toggle="collapse">
                                    座位管理
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="nav-header collapsed" data-toggle="collapse">
                                    票务管理
                                </a>
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
                                <a href="./charts.html">
                                    公告管理
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    退出系统
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
}
