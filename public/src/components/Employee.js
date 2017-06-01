import React, {Component} from 'react';

class Employee extends Component {
    render () {
        return <div className="panel panel-default">
            <div className="panel-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-addon">员工查询</span>
                            <input type="text" className="form-control" placeholder="请输入员工序号" ref="searchStudio"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <button className="btn btn-warning" onClick={this.search}>查询</button><span> </span>
                    </div>
                </div>
                <br/>
                <table className="table table-style">
                    <thead>
                    <tr>
                        <th className="th">员工序号</th>
                        <th className="th">员工姓名</th>
                        <th className="th">性别</th>
                        <th className="th">电话</th>
                        <th className="th">地址</th>
                        <th className="th">操作</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    }
}


export default Employee;