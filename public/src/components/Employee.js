import React,{Component} from 'react';

class Employee extends Component {
    componentWillMount(){
        this.props.getAllEmployees();
    }

    render() {
       console.log(this.props.ShowAllEmployees);
        return <div>
            123
        </div>
    }
}

export default Employee;