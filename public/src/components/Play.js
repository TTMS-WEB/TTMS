import React, {Component} from "react";
import {Link} from 'react-router';

export default class Play extends Component {
    componentWillMount() {
        this.props.showPlay();
    }

    addPlay() {
        const playName = this.refs.playName.value;
        const playTime = this.refs.playTime.value+" minitues";
        const playActor = this.refs.playActor.value;
        const playPrice = this.refs.playPrice.value+" 元";
        const playType = this.refs.playType.value;
        this.props.addPlay({playName, playTime, playActor, playPrice, playType})
    }

    setTip(addResult) {
        if (addResult === true) {
            this.refs.tag.innerHTML = '添加成功';
        }
        else if (addResult === false) {
            this.refs.tag.innerHTML = '添加失败';
        }
    }

    search(){
        const searchPlayName = this.refs.search.value;
        this.props.searchPlay(searchPlayName);
    }

    deletePlay(deletePlayName){
      this.props.removePlay(deletePlayName);
    }
    render() {
        const play = this.props.play;
        const playlist = play.playInfo.map((val, index)=> {
            return <tr key={index}>
                <td>{index}</td>
                <td>{val.playName}</td>
                <td>{val.playTime}</td>
                <td>{val.playType}</td>
                <td>{val.playActor}</td>
                <td>{val.playPrice}</td>
                <td>
                    <button>修改</button>
                    <button onClick={this.deletePlay.bind(this,val.playName)}>删除</button>
                </td>
            </tr>
        });

        return <div>
            <div className="operate">
                <div>影片:<input className="input-medium search-query"  ref='search' type="text" placeholder="输入影片名称查询"/>
                    <button className="btn" onClick={this.search.bind(this)}>查询</button>
                    <button type="button" className="btn" data-toggle="modal" data-target="#myModal">
                        添加
                    </button>

                    <div className="modal fade bs-example-modal-lg" id="myModal" role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="myModalLabel">添加一个剧目</h4>
                                </div>
                                <div className="input-group">
                                    <input type="text" ref="playName" className="form-control" placeholder="影片名称"/>
                                    <input type="text" ref="playTime" className="form-control" placeholder="时长 xx minitues"/>
                                    <input type="text" ref="playActor" className="form-control" placeholder="主演用;分隔"/>
                                    <input type="text" ref="playPrice" className="form-control" placeholder="价格 xx 元"/>

                                    <select className="btn" ref="playType">
                                        <option value='' hidden>电影类型</option>
                                        <option value='爱情片'>爱情片</option>
                                        <option value='战争片'>战争片</option>
                                        <option value='历史片'>历史片</option>
                                        <option value='科幻片'>科幻片</option>
                                        <option value='动漫片'>动漫片</option>
                                        <option value='动作片'>动作片</option>
                                        <option value='喜剧片'>喜剧片</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <div className="tag" ref="tag"></div>
                                    <button type="button" className="btn btn-primary"
                                            onClick={this.addPlay.bind(this)}>
                                        提交
                                    </button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                                </div>
                            </div>
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
                        <th>时长</th>
                        <th>类型</th>
                        <th>主演</th>
                        <th>价格</th>
                        <th>操作</th>
                    </tr>
                    {playlist}
                    </tbody>
                </table>
            </div>
            {this.setTip(play.addResult)}
        </div>

    }
}