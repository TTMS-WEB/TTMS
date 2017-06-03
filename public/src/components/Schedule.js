import React,{Component} from 'react';

export default class Schedule extends Component{
    componentWillMount(){
        this.props.getPlayScheduleInfo();
    }
    render(){
        console.log(this.props.Schedule);
        return<div>
            123
        </div>
    }
}