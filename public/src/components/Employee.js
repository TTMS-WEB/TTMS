import React, {Component} from 'react';

class Employee extends Component {
    searchEmployee() {
        let employeeName = this.refs.searchEmployee.value;
        this.props.searchEmployee(employeeName);
    }

    render () {
        return <div className="panel panel-default">
            <div className="panel-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-addon">员工查询</span>
                            <input type="text" className="form-control" placeholder="请输入员工姓名" ref="searchEmployee"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <button className="btn btn-warning" onClick={this.searchEmployee.bind(this)}>查询</button><span> </span>
                    </div>
                </div>
                <br/>
                <table className="table table-style">
                    <thead>
                    <tr>
                        <th className="th">员工序号</th>
                        <th className="th">员工姓名</th>
                        <th className="th">邮箱</th>
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