import Employees from '../containers/SearchEmployee';
import React,{Component} from 'react';

export default class AddEmployees extends Component{
    componentWillMount() {
        this.props.getAllEmployees();
        if(!this.props.Login){
            this.props.router.push('/');
        }
        else if(this.props.Login === "root"){
            this.props.router.push('/schedule');
        }

        else if(this.props.Login === "root1"){
            this.props.router.push('/schedule');
        }
    }

    deleteEmployee(name) {
        this.props.deleteEmployee(name);
    }

    render() {
        const Employee = this.props.ShowAllEmployees.map((ele, index)=> {
            const name = ele.username;
            const email = ele.email;
            const phone = ele.phone;
            const address = ele.address;
            return (
                <div className="studios" key={index}>
                    <table className="table table-hover" width="200">
                        <thead>
                        <tr>
                            <th className="th">{index}</th>
                            <th className="th">{name}</th>
                            <th className="th">{email}</th>
                            <th className="th">{phone}</th>
                            <th className="th">{address}</th>
                            <th className="th">
                                <button className="btn btn-danger" onClick={this.deleteEmployee.bind(this,name)}>删除</button>
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
