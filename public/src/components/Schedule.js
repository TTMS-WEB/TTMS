import React, {Component} from 'react';

export default class Schedule extends Component {
    componentWillMount() {
        this.props.getPlayScheduleInfo();
    }
    linkToSale(id){
        this.props.router.push('/sale/:id');
    }
    render() {
        let Schedule = this.props.Schedule.map((data, index)=> {
            return <tr key={index} className="ScheduleTableBody">
                <td>{data.ScheduleName}</td>
                <td>{data.ScheduleStudio}</td>
                <td>{data.ScheduleDate}</td>
                <td>{data.ScheduleTime}</td>
                <td>{data.ScheduleActor}</td>
                <td>{data.SchedulePrice}</td>
                <td><button className="btn btn-info" onClick={this.linkToSale.bind(this,data._id)}>去购票</button></td>
            </tr>
        });
        return <div className="Schedule">
            <table className="table table-style">
                <thead>
                <tr>
                    <th>影片</th>
                    <th>影厅</th>
                    <th>影片场次</th>
                    <th>时长</th>
                    <th>主演</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {Schedule}
                </tbody>
            </table>
        </div>
    }
}