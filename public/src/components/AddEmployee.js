import Employees from '../components/Employee';
import React,{Component} from 'react';

export default class AddEmployees extends Component{
    componentWillMount() {
        this.props.getAllEmployees();
    }

    render() {
        const Employee = this.props.ShowAllEmployees.map((ele, index)=> {
            const name = ele.username;
            const sex = ele.sex;
            const phone = ele.phone;
            const address = ele.address;
            return (
                <div className="studios">
                    <table className="table table-style" width="200">
                        <thead>
                        <tr>
                            <th className="th">{index}</th>
                            <th className="th">{name}</th>
                            <th className="th">{sex}</th>
                            <th className="th">{phone}</th>
                            <th className="th">{address}</th>
                            <th className="th">
                                <button className="btn btn-danger">删除</button>
                            </th>
                        </tr>
                        </thead>
                    </table>
                </div>

            )
        });
        return (
            <div className="Studio">
                <Employees/>
                {Employee}
            </div>
        )
    }
}
