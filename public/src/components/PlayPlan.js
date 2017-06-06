import React, {Component} from "react";
export default class PlayPlan extends Component {
    componentWillMount() {
        const page = this.props.playPlan.page;
        this.props.showPlan(page);
        if (!this.props.Login) {
            this.props.router.push('/');
        }
        else if (this.props.Login === "root") {
            this.props.router.push('/schedule');
        }
        else if (this.props.Login === "root1") {
            this.props.router.push('/schedule');
        }

    }

    GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount);
        var y = dd.getFullYear();
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
    }

    addPlan(page) {
        const planName = this.refs.play.value;
        const planStudio = this.refs.studio.value;
        const date = this.refs.date.value;
        const time = this.refs.time.value;
        if (planName && planName && date && time) {
            this.props.onAddPlan({planName, planStudio, date, time, page});
        } else {
            this.refs.tag1.innerHTML = "请选择完整信息";
        }
    }

    setTip(addResult, modifyResult) {
        if (addResult === true) {
            this.refs.playPlantag1.innerHTML = '添加成功';
        }
        if (addResult === false) {
            this.refs.playPlantag1.innerHTML = '添加失败';
        }
        if (modifyResult === true) {
            this.refs.playplantag2.innerHTML = '修改成功';
        }
        if (modifyResult === false) {
            this.refs.playplantag2.innerHTML = '修改失败';
        }
    }

    deletePlan(id, page) {
        this.props.onDeletePlan({id, page});
    }

    turnDay(date, page) {
        let day;
        switch (date) {
            case 'date0':
                day = this.refs.date0.value;
                break;
            case 'date1':
                day = this.refs.date1.value;
                break;
            case 'date2':
                day = this.refs.date2.value;
                break;
            case 'date3':
                day = this.refs.date3.value;
                break;
            case 'date4':
                day = this.refs.date4.value;
                break;
            default:
                day = this.refs.date0.value;
                break;
        }

        this.props.onFindPlan({day, page});
    }

    addModal() {
        this.refs.playPlantag1.innerHTML = '';
        $('#myModal').modal('show')
    }

    modifyModal(val) {
        if (val.date.replace("T00:00:00.000Z", "") > this.GetDateStr(0)) {
            this.refs.playplantag2.innerHTML = '';
            this.refs.mdplay.value = val.planName;
            this.refs.mdstudio.value = val.planStudio;
            this.refs.mddate.value = val.date.replace("T00:00:00.000Z", "");
            this.refs.mdtime.value = val.time;
            this.refs.modal.value = val.planId;
            $("#modal").modal('show');
        }
        else {
            alert('不能修改当天及过期演出计划');
        }
    }

    modify(page) {
        const planId = this.refs.modal.value
        const mdPlay = this.refs.mdplay.value;
        const mdStudio = parseInt(this.refs.mdstudio.value);
        const mddate = this.refs.mddate.value;
        const mdtime = parseInt(this.refs.mdtime.value);

        this.props.onModify({planId, mdPlay, mdStudio, mddate, mdtime, page})
    }

    paging(page, maxsize, size, value) {
        switch (value) {
            case 'first':
                page = 1;
                break;
            case 'last':
                page = Math.ceil(maxsize / size);
                break;
            case 'reduce':
                page = page - 1;
                break;
            case 'add':
                page = page + 1;
                break;
            case 'searchPage':
                page = this.refs.searchPage.value;
                break;
            default:
                page = page;
        }
        if (0 < page && (page - 1) * size < maxsize) {
            this.props.changePage(page);
        }

    }

    render() {
        const playPlan = this.props.playPlan;
        console.log(playPlan.planInfo);
        const plays = playPlan.plays;
        const studios = playPlan.studios;
        const page = playPlan.page;
        const addResult = playPlan.addResult;
        const modifyResult = playPlan.modifyResult;
        const maxsize = playPlan.maxsize;
        const size = playPlan.size;
        let date = [];
        for (let i = 0; i < 5; i++) {
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
                <td>{(page - 1) * size + index + 1}</td>
                <td>{val.planName}</td>
                <td>{val.planStudio}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{val.planPrice}</td>
                <td>{val.planLong}</td>
                <td>
                    <img src="../../images/modify.png" onClick={this.modifyModal.bind(this, val)}></img>
                    <img src="../../images/delete.png" onClick={this.deletePlan.bind(this, val.planId, page)}></img>
                </td>
            </tr>
        });

        return <div className="playPlan">
            <div className="time">
                <button ref='date0' className="btn" value={date[0]} onClick={this.turnDay.bind(this, 'date0', page)}>
                    今天
                </button>
                <button ref='date1' className="btn" value={date[1]}
                        onClick={this.turnDay.bind(this, 'date1', page)}>{date[1]}</button>
                <button ref='date2' className="btn" value={date[2]}
                        onClick={this.turnDay.bind(this, 'date2', page)}>{date[2]}</button>
                <button ref='date3' className="btn" value={date[3]}
                        onClick={this.turnDay.bind(this, 'date3', page)}>{date[3]}</button>
                <button ref='date4' className="btn" value={date[4]}
                        onClick={this.turnDay.bind(this, 'date4', page)}>{date[4]}</button>
                <button type="button" className="btn" data-toggle="modal" onClick={this.addModal.bind(this)}>
                    添加演出计划
                </button>
            </div>
            <div className="modal fade bs-example-modal-lg" id="myModal" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">添加一个演出计划</h4>
                        </div>
                        <div className="input-group">
                            <select name="play" className="btn" id="play" ref='play'>
                                <option value="" hidden>请选择剧目</option>
                                {playList}
                            </select>

                            <select name="studio" className="btn" id="studio" ref="studio">
                                <option value="" hidden>请选择在几号影厅放映</option>
                                {studioList}
                            </select>
                            <select name="Date" className="btn" ref="date" id="date">
                                <option value="" hidden>放映日期</option>
                                <option value={date[1]}>{date[1]}</option>
                                <option value={date[2]}>{date[2]}</option>
                                <option value={date[3]}>{date[3]}</option>
                                <option value={date[4]}>{date[4]}</option>
                            </select>
                            <br/>
                            <select name="Time" className="btn" ref="time" id="time">
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
                            <div className="tag" ref="playPlantag1"></div>
                            <button type="button" className="btn btn-primary" onClick={this.addPlan.bind(this, page)}>
                                提交
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade bs-example-modal-lg" id="modal" ref='modal' role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">修改演出计划</h4>
                        </div>
                        <div className="input-group">
                            <select name="play" className="btn" id="mdplay" ref='mdplay'>
                                <option value="" hidden>请选择剧目</option>
                                {playList}
                            </select>

                            <select name="studio" className="btn" id="mdstudio" ref="mdstudio">
                                <option value="" hidden>请选择在几号影厅放映</option>
                                {studioList}
                            </select>
                            <select name="Date" className="btn" ref="mddate" id="mddate">
                                <option value="" hidden>放映日期</option>
                                <option value={date[1]}>{date[1]}</option>
                                <option value={date[2]}>{date[2]}</option>
                                <option value={date[3]}>{date[3]}</option>
                                <option value={date[4]}>{date[4]}</option>
                            </select>
                            <br/>
                            <select name="Time" className="btn" ref="mdtime" id="mdtime">
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
                            <div className="tag" ref="playplantag2"></div>
                            <button type="button" className="btn btn-primary" onClick={this.modify.bind(this, page)}>
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
                        <th colSpan="2">操作</th>
                    </tr>
                    {planList}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td></td>
                        <td>
                            <button value='add' onClick={this.paging.bind(this, page, maxsize, size, "first")}>首页
                            </button>
                        </td>
                        <td>
                            <button onClick={this.paging.bind(this, page, maxsize, size, "reduce")}>上一页</button>
                            第{page}页 共{Math.ceil(maxsize / size)}页

                        </td>
                        <td><input ref="searchPage" type="text" placeholder="输入想前往的页码"/></td>
                        <td>
                            <button onClick={this.paging.bind(this, page, maxsize, size, "searchPage")}>查询</button>
                        </td>
                        <td>
                            <button onClick={this.paging.bind(this, page, maxsize, size, "add")}>下一页</button>
                        </td>
                        <td>
                            <button onClick={this.paging.bind(this, page, maxsize, size, "last")}>末页</button>
                        </td>
                    </tr>

                    </tfoot>

                </table>
            </div>
            {this.setTip(addResult, modifyResult)}
        </div>
    }
}
