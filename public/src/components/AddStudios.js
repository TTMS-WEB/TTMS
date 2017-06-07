import React, {Component} from "react";

export default class AddStudios extends Component {
    componentWillMount() {
        this.props.getStudios();
    }

    addStudio() {
        const studios = this.props.GetStudios;
        var id = studios.length + 1;
        let studioName = this.refs.studioName.value;
        let studioInfo = this.refs.studioInfo.value;
        let row = this.refs.row.value;
        let col = this.refs.col.value;
        if (id && studioName && studioInfo && row && col) {
            this.props.addStudio(id, studioName, studioInfo, row, col);
        }
        else {
            alert("请输入完整信息！");
        }
        this.refs.studioInfo.value = this.refs.studioName.value = this.refs.row.value = this.refs.col.value = '';
    }

    searchStudio() {
        const id = this.refs.searchStudio.value;
        if (!id) {
            this.props.getStudios();
        }
        else this.props.searchStudio(id);
        this.refs.searchStudio.value = '';
    }


    render() {
        return <div className="panel panel-default">
            <div className="panel-body">
                <div className="addStudio form-inline">
                    <div className=" input-group">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">名称</span>
                                <input type="text" name="studio" ref="studioName"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">行数</span>
                                <select className="selectpicker" data-style="btn-info" name="seat"
                                        ref="row">
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">列数</span>
                                <select className="selectpicker " data-style="btn-info" name="seat"
                                        ref="col">
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                </select>
                            </div>
                        </div>
                        <span className="input-group-addon">简介</span>
                        <div className="form-group">
                            <input type="text" name="studio" ref="studioInfo"/>

                        </div>
                        <div className="form-group">
                            <button className="btn btn-success " onClick={this.addStudio.bind(this)}>添加</button>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon">ID</span>
                            <input type="text" placeholder="演出厅ID" ref="searchStudio"/>
                            <button className="btn btn-warning " onClick={this.searchStudio.bind(this)}>查询</button>
                        </div>
                    </div>
                </div>
                <br/>
                <table className="table table-style">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>演出厅名称</th>
                        <th>演出厅简介</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>

    }
}
