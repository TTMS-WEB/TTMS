import React, {Component} from "react";

export default class PlayPlan extends Component {
    componentWillMount() {
        const page = this.props.playPlan.page;
        this.props.showPlan(page);
    }

    render() {
        let d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day1 = d.getDate() + 3;
        const day2 = d.getDate() + 4;
        const day3 = d.getDate() + 5;
        const date1 = year + '.' + month + '.' + day1;
        const date2 = year + '.' + month + '.' + day2;
        const date3 = year + '.' + month + '.' + day3;

        const playPlan = this.props.playPlan.planInfo;
        const planList = playPlan.map((val, index)=> {
            let startTime = val.planTimeStart.replace('T','日').replace('.000Z','');
            let endTime = val.planTimeEnd.replace('T','日').replace('.000Z','');

            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.planName}</td>
                <td>{val.planStudio}</td>
                <td>{startTime}</td>
                <td>{endTime}</td>
                <td>{val.planPrice}</td>
                <td>{val.planLong}</td>
                <td>
                    <button>修改</button>
                    <button>删除</button>
                </td>
            </tr>
        });


        return <div className="playPlan">
            <div className="time">
                <button>今天</button>
                <button>明天</button>
                <button>后天</button>
                <button>{date1}</button>
                <button>{date2}</button>
                <button>{date3}</button>
                <button>增加演出计划</button>
            </div>
            <div className="planInfo">
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th>序号</th>
                        <th>影片名称</th>
                        <th>放映影厅</th>
                        <th>开始时间</th>
                        <th>结束时间</th>
                        <th>价格(元)</th>
                        <th>时长(minites)</th>
                        <th>操作</th>
                    </tr>
                    {planList}
                    </tbody>
                </table>
            </div>
        </div>
    }
}