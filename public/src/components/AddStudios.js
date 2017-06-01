import React, {Component} from 'react';

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
        this.props.addStudio(id, studioName, studioInfo, row, col);
    }

    searchStudio() {
        const id = this.refs.searchStudio.value;
        this.props.searchStudio(id);
    }


    render() {
        return <div className="panel panel-default">
            <div className="panel-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-addon">演出厅名称</span>
                            <input type="text" className="form-control" name="studio" ref="studioName"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-addon">演出厅简介</span>
                            <input type="text" className="form-control" name="studio" ref="studioInfo"/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-addon">座位行数</span>
                            <input type="text" className="form-control" name="seat" ref="row"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-addon">座位列数</span>
                            <input type="text" className="form-control" name="seat" ref="col"/>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.addStudio.bind(this)}>添加</button>
                </div>
                <br/>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-addon">查询演出厅</span>
                            <input type="text" className="form-control" placeholder="请输入演出厅ID" ref="searchStudio"/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <button className="btn btn-warning" onClick={this.searchStudio.bind(this)}>查询</button><span>   </span>
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
