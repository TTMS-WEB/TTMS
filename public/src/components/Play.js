import React, {Component} from "react";

export default class Play extends Component {
    render() {
        return <div>
            <div className="operate">
                <div>影片:<input type="text"/>
                    <button>查询</button>
                    <button>增加</button>
                </div>
            </div>
            <div className="playInfo">
                <table>
                    <th>id</th>
                    <th>影片名称</th>
                    <th>时长</th>
                    <th>类型</th>
                    <th>主演</th>
                    <th>价格</th>
                    <th>操作</th>
                </table>
            </div>
        </div>
    }
}