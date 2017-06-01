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
                        <Link to="/userCenter" className={username?'':'hidden'}>{username}</Link>
                        </span>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <ul id="main-nav" className="nav nav-tabs nav-stacked">
                            <li className="">
                                <a href="#">
                                    <span className="studiomanage"> </span>
                                    演出厅管理
                                </a>
                            </li>
                            <li>
                                <a href="#systemSetting" className="nav-header collapsed" data-toggle="collapse">
                                    座位管理
                                </a>
                                {/*<ul id="systemSetting" className="nav nav-list collapse secondmenu">*/}
                                {/*<li><a href="#"><i className="glyphicon glyphicon-user"></i>用户管理</a></li>*/}
                                {/*<li><a href="#"><i className="glyphicon glyphicon-th-list"></i>菜单管理</a></li>*/}
                                {/*<li><a href="#"><i className="glyphicon glyphicon-asterisk"></i>角色管理</a></li>*/}
                                {/*<li><a href="#"><i className="glyphicon glyphicon-edit"></i>修改密码</a></li>*/}
                                {/*<li><a href="#"><i className="glyphicon glyphicon-eye-open"></i>日志查看</a></li>*/}
                                {/*</ul>*/}
                            </li>
                            <li>
                                <a href="./plans.html">
                                    员工管理
                                </a>
                            </li>
                            <li>
                                <a href="./grid.html">
                                    剧目管理
                                </a>
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
