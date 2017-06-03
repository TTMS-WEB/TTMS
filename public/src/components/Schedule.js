import React, {Component} from 'react';

export default class PlayPlan extends Component{
    componentWillMount(){
       this.props.getPlayScheduleInfo();
    }
    render(){
        return (
            <div>
                123111111111111111111
            </div>
        )
    }
}

