import React, {Component} from "react";
export default class PlayPlan extends Component {
    componentWillMount() {
        const page = this.props.playPlan.page;
        this.props.showPlan(page);
    }

    addPlan() {
        const play = this.refs.play.value;
        const studio = this.refs.studio.value;
        const date = this.refs.date.value;
        const time = this.refs.time.value;
    }

    render() {
        let d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day0 = d.getDate();
        const day1 = d.getDate() + 1;
        const day2 = d.getDate() + 2;
        const day3 = d.getDate() + 3;
        const day4 = d.getDate() + 4;

        const date0 = year + '.' + month + '.' + day0;
        const date1 = year + '.' + month + '.' + day1;
        const date2 = year + '.' + month + '.' + day2;
        const date3 = year + '.' + month + '.' + day3;
        const date4 = year + '.' + month + '.' + day4;

        let time = "";
        const playPlan = this.props.playPlan;
        const plays = playPlan.plays;
        const studios = playPlan.studios;

        const playList = plays.map((play, index)=> {
            return <option value={play} key={index}>{play.playName}</option>
        });

        const studioList = studios.map((studio, index)=> {
            return <option value={studio} key={index}>{studio.id}</option>
        });
        const planList = playPlan.planInfo.map((val, index)=> {
            switch (val.time) {
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
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.planName}</td>
                <td>{val.planStudio}</td>
                <td>日期</td>
                <td>{time}</td>
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
                <button>{date1}</button>
                <button>{date2}</button>
                <button>{date3}</button>
                <button>{date4}</button>
                <button type="button" className="btn" data-toggle="modal" data-target="#myModal">
                    添加演出计划
                </button>
            </div>
            <div className="modal fade bs-example-modal-lg" id="myModal" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">添加一个剧目</h4>
                        </div>
                        <div className="input-group">
                            <select name="play" id="play" ref='play'>
                                <option value="" hidden>请选择剧目</option>
                                {playList}
                            </select>

                            <select name="studio" id="studio" ref="studio">
                                <option value="" hidden>请选择在几号影厅放映</option>
                                {studioList}
                            </select>
                            <select name="Date" ref="date" id="date">
                                <option value="" hidden>放映日期</option>
                                <option value={date1}>{date1}</option>
                                <option value={date2}>{date2}</option>
                                <option value={date3}>{date3}</option>
                                <option value={date4}>{date4}</option>
                            </select>
                            <br/>
                            <select name="Time" ref="time" id="time">
                                <option value="" hidden>放映时间</option>
                                <option value='1'>第一场(8:00-10:00)</option>
                                <option value="2">第二场(10:00-12:00)</option>
                                <option value="3">第三场(12:00-14:00)</option>
                                <option value="4">第四场(14:00-16:00)</option>
                                <option value="5">第五场(16:00-18:00)</option>
                                <option value="6">第六场(18:00-20:00)</option>
                                <option value="7">第七场(20:00-22:00)</option>
                                <option value="8">第八场(22:00-24:00)</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <div className="tag" ref="tag1"></div>
                            <button type="button" className="btn btn-primary" onClick={this.addPlan.bind(this)}>
                                提交
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="planInfo">
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th>序号</th>
                        <th>影片名称</th>
                        <th>放映影厅</th>
                        <th>日期</th>
                        <th>场次</th>
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
