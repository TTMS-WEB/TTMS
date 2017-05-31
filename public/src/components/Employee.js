import React,{Component} from 'react';

class Employee extends Component {
    componentWillMount(){
        this.props.getAllEmployees();
    }

    render() {
       let employees = this.props.ShowAllEmployees;
        console.log(employees);
    }
}

export default Employee;