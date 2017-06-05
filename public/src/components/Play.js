import React, {Component} from "react";
export default class Play extends Component {
    componentWillMount() {
        const page = this.props.play.page;
        this.props.showPlay(page);
            if(!this.props.Login){
                this.props.router.push('/');
            }
            else if(this.props.Login === "root"){
                this.props.router.push('/ticket');
            }
    }

    addPlay() {
        const page = this.props.play.page;
        const playName = this.refs.playName.value;
        const playTime = this.refs.playTime.value;
        const playActor = this.refs.playActor.value;
        const playPrice = this.refs.playPrice.value;
        const playType = this.refs.playType.value;
        if (playName && playTime && playActor && playPrice && playType) {
            this.props.addPlay({playName, playTime, playActor, playPrice, playType, page})
        }
        else {
            this.refs.tag1.innerHTML = '请输入完整的信息';
        }
    }

    setTip(addResult) {
        if (addResult === true) {
            this.refs.tag1.innerHTML = '添加成功';
        }
        else if (addResult === false) {
            this.refs.tag1.innerHTML = '添加失败';
        }
    }

    search(page) {
        const searchPlayName = this.refs.search.value;
        this.props.searchPlay({searchPlayName, page});
    }

    deletePlay(deletePlayName, page) {
        this.props.removePlay({deletePlayName, page});
    }

    modifyModel(val) {
        this.refs.mdplayName.value = val.playName;
        this.refs.mdplayTime.value = val.playTime;
        this.refs.mdplayActor.value = val.playActor;
        this.refs.mdplayPrice.value = val.playPrice;
        this.refs.mdplayType.value = val.playType;

        $('#modifyModal').modal('show');
    }

    modifyPlay(page) {
        const newPlayName = this.refs.mdplayName.value;
        const newPlayTime = this.refs.mdplayTime.value;
        const newPlayActor = this.refs.mdplayActor.value;
        const newPlayPrice = this.refs.mdplayPrice.value;
        const newPlayType = this.refs.mdplayType.value;
        if (newPlayName && newPlayTime && newPlayActor && newPlayPrice && newPlayType) {
            this.refs.tag.innerHTML = '修改成功';
            this.props.modifyPlay({newPlayName, newPlayTime, newPlayActor, newPlayPrice, newPlayType, page})
        }
        else {
            this.refs.tag.innerHTML = '请输入完整的信息';
        }
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
        const play = this.props.play;
        const page = play.page;
        const maxsize = play.maxsize;
        const size = play.size;
        const playlist = play.playInfo.map((val, index)=> {
            return <tr key={index}>
                <td>{(page - 1) * size + index + 1}</td>
                <td>{val.playName}</td>
                <td>{val.playTime}</td>
                <td>{val.playType}</td>
                <td>{val.playActor}</td>
                <td>{val.playPrice}</td>
                <td>
                    <img src="../../images/modify.png" className="btn" data-toggle="modal"
                         onClick={this.modifyModel.bind(this, val)}></img>
                    <img src="../../images/delete.png" className="btn"
                         onClick={this.deletePlay.bind(this, val.playName, page)}></img>
                </td>
            </tr>
        });

        return <div className="play">
            <div className="operate">
                <div><input className="btn" ref='search' type="text" placeholder="输入影片名称查询"/>
                    <button className="btn" onClick={this.search.bind(this, page)}>查询</button>
                    <button type="button" className="btn" data-toggle="modal" data-target="#myModal">
                        添加
                    </button>
                </div>
            </div>
            <div className="modal fade bs-example-modal-lg" id="myModal" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">添加一个剧目</h4>
                        </div>
                        <div className="input-group">
                            <input type="text" ref="playName" className="form-control" placeholder="电影名称"/>
                            <input type="number" ref="playTime" className="form-control"
                                   placeholder="时长 xx minitues"/>
                            <input type="text" ref="playActor" className="form-control" placeholder="主演用;分隔"/>
                            <input type="number" ref="playPrice" className="form-control" placeholder="价格 xx 元"/>

                            <select className="btn" ref="playType">
                                <option value='' hidden>电影类型</option>
                                <option value='爱情片'>爱情片</option>
                                <option value='战争片'>战争片</option>
                                <option value='历史片'>历史片</option>
                                <option value='科幻片'>科幻片</option>
                                <option value='动漫片'>动画片</option>
                                <option value='动作片'>动作片</option>
                                <option value='情感片'>情感片</option>
                                <option value='生活片'>生活片</option>
                                <option value='校园片'>校园片</option>
                                <option value='青春片'>青春片</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <div className="tag" ref="tag1"></div>
                            <button type="button" className="btn btn-primary"
                                    onClick={this.addPlay.bind(this)}>
                                提交
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade bs-example-modal-lg" id="modifyModal" ref="modifyModal" role="dialog"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">添加一个剧目</h4>
                        </div>
                        <div className="input-group">
                            <input type="text" ref="mdplayName" readOnly="readOnly" className="form-control"/>
                            <input type="number" ref="mdplayTime" className="form-control"/>
                            <input type="text" ref="mdplayActor" className="form-control"/>
                            <input type="number" ref="mdplayPrice" className="form-control"/>

                            <select className="btn" ref="mdplayType">
                                <option value='爱情片'>爱情片</option>
                                <option value='战争片'>战争片</option>
                                <option value='历史片'>历史片</option>
                                <option value='科幻片'>科幻片</option>
                                <option value='动漫片'>动画片</option>
                                <option value='动作片'>动作片</option>
                                <option value='情感片'>情感片</option>
                                <option value='生活片'>生活片</option>
                                <option value='校园片'>校园片</option>
                                <option value='青春片'>青春片</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <div className="tag" ref="tag"></div>
                            <button type="button" className="btn btn-primary"
                                    onClick={this.modifyPlay.bind(this, page)}>
                                提交
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="playInfo">
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th>序号</th>
                        <th>影片名称</th>
                        <th>时长(minitues)</th>
                        <th>类型</th>
                        <th>主演</th>
                        <th>价格(元)</th>
                        <th>操作</th>
                    </tr>
                    {playlist}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td></td>
                        <td>
                            <button value='add' onClick={this.paging.bind(this, page,maxsize,size, "first")}>首页</button>
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
            {this.setTip(play.addResult)}
        </div>

    }
}