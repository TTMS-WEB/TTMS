import React, {Component} from 'react';

export default class Schedule extends Component {
    componentWillMount() {
        this.props.getPlayScheduleInfo();
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

    linkToSale(id) {
        this.props.router.push(`/sale` + ":" + id);
    }

    render() {
        let Schedule = this.props.Schedule.map((data, index)=> {
            let time = data.ScheduleTime;
            switch (time) {
                case 1:
                    time = '第一场(8:00-10:00)';
                    break;
                case 2:
                    time = '第二场(10:00-12:00)';
                    break;
                case 3:
                    time = '第三场(12:00-14:00)';
                    break;
                case 4:
                    time = '第四场(14:00-16:00)';
                    break;
                case 5:
                    time = '第五场(16:00-18:00)';
                    break;
                case 6:
                    time = '第六场(18:00-20:00)';
                    break;
                case 7:
                    time = '第七场(20:00-22:00)';
                    break;
                case 8:
                    time = '第八场(22:00-24:00)';
                    break;
                default:
                    time = '';
            }
            return <tr key={index} className="ScheduleTableBody">
                <td>{data.ScheduleName}</td>
                <td>{data.ScheduleStudio}</td>
                <td>{data.ScheduleDate.replace("T00:00:00.000Z", "")}</td>
                <td>{time}</td>
                <td>{data.ScheduleActor}</td>
                <td>{data.SchedulePrice}/元</td>
                <td>
                    <button className="btn btn-info" onClick={this.linkToSale.bind(this, data._id)}>去购票</button>
                </td>
            </tr>
        });
        return <div>

            <div className="root">
                <div className="Schedule">
                    <table className="table table-style">
                        <thead>
                        <tr>
                            <th>影片</th>
                            <th>影厅</th>
                            <th>日期</th>
                            <th>场次</th>
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
            </div>
        </div>
    }
}