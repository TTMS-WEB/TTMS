import React, {Component} from "react";

export default class PlayPlan extends Component {


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
       const planList = playPlan.map((val,index)=>{
           return <tr key={index}>
               <td>{val.planName}</td>
               <td>{val.planStudio}</td>
               <td>{val.planTime}</td>
               <td>{val.planPrice}</td>
               <td>{val.planActor}</td>
               <td>{val.planType}</td>
               <td>{val.planLong}</td>
           </tr>
       })


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
                        <th>影片名称</th>
                        <th>放映影厅</th>
                        <th>放映时间</th>
                        <th>价格</th>
                        <th>主演</th>
                        <th>类型</th>
                        <th>时长</th>
                    </tr>
                    {planList}
                    </tbody>

                </table>
            </div>
        </div>
    }
}