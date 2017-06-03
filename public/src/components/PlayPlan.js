import React, {Component} from "react";
export default class PlayPlan extends Component {
    componentWillMount() {
        const page = this.props.playPlan.page;
        this.props.showPlan(page);
    }

    GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);
        var y = dd.getFullYear();
        var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);
        var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();
        return y+"-"+m+"-"+d;
    }

    addPlan(page) {
        const planName = this.refs.play.value;
        const planStudio = this.refs.studio.value;
        const date = this.refs.date.value;
        const time = this.refs.time.value;
        this.props.onAddPlan({planName, planStudio, date, time, page});
    }

    setTip(addResult) {
        if (addResult === true) {
            this.refs.tag1.innerHTML = '添加成功';
        }
        else if (addResult === false) {
            this.refs.tag1.innerHTML = '添加失败';
        }
    }

    deletePlan(id,page){
        this.props.onDeletePlan({id,page});
    }
    render() {

        const playPlan = this.props.playPlan;
        const plays = playPlan.plays;
        const studios = playPlan.studios;
        const page = playPlan.page;
        const addResult = playPlan.addResult;
        let date = [];

        for(let i = 0;i<5;i++){
           date[i] = this.GetDateStr(i);
        }

        const playList = plays.map((play, index)=> {
            return <option value={play.playName} key={index}>{play.playName}</option>
        });

        const studioList = studios.map((studio, index)=> {
            return <option value={studio.id} key={index}>{studio.id}</option>
        });
        const planList = playPlan.planInfo.map((val, index)=> {
            let time;
            let date;
            date = val.date.replace("T00:00:00.000Z", "");
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
                <td>{date}</td>
                <td>{time}</td>
                <td>{val.planPrice}</td>
                <td>{val.planLong}</td>
                <td>
                    <button>修改</button>
                    <button onClick={this.deletePlan.bind(this,val.planId,page)}>删除</button>
                </td>
            </tr>
        });

        return <div className="playPlan">
            <div className="time">
                <button>今天</button>
                <button>{date[1]}</button>
                <button>{date[2]}</button>
                <button>{date[3]}</button>
                <button>{date[4]}</button>
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
                                <option value={date[1]}>{date[1]}</option>
                                <option value={date[2]}>{date[2]}</option>
                                <option value={date[3]}>{date[3]}</option>
                                <option value={date[4]}>{date[4]}</option>
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
                            <button type="button" className="btn btn-primary" onClick={this.addPlan.bind(this, page)}>
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
            {this.setTip(addResult)}
        </div>
    }
}
