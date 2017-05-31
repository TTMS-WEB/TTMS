import React, {Component} from "react";

export default class Play extends Component {
    // componentWillMount(){
    //    this.props.showPlay();
    // }
    render() {
        const playInfo = this.props.playInfo;
        const playlist = playInfo.map((val,index)=>{
            return <tr key={index}>
                <td>{index}</td>
                <td>{val.playName}</td>
                <td>{val.playTime}</td>
                <td>{val.playType}</td>
                <td>{val.playActor}</td>
                <td>{val.playPrice}</td>
                <td><button>修改</button><button>删除</button></td>
            </tr>
        })
        return <div>
            <div className="operate">
                <div>影片:<input type="text"/>
                    <button>查询</button>
                    <button>增加</button>
                </div>
            </div>
            <div className="playInfo">
                <table>
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
        </div>
    }
}