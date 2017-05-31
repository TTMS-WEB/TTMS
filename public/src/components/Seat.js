import React,{Component} from 'react';

export default class Seat extends Component{
    chooseStudioId(){
        const studioId = $("#studioId").val();
        this.props.onRowCol(studioId);
    }

    render(){
        console.log(this.props.Seat);

        return<div>
            <div className="col-lg-3">
                <div className="form-group">
                    <select id="studioId" className="selectpicker form-control" data-style="btn-info" onChange={this.chooseStudioId.bind(this)}>
                        <option>请选择演出厅...</option>
                        <option value="1">1号演出厅</option>
                        <option value="2">2号演出厅</option>
                        <option value="3">3号演出厅</option>
                        <option value="4">4号演出厅</option>
                        <option value="5">5号演出厅</option>
                        <option value="6">6号演出厅</option>
                        <option value="7">7号演出厅</option>
                        <option value="8">8号演出厅</option>
                    </select>
                </div>
            </div>
            <div className="col-lg-4">
                <button className="btn btn-info">
                    <span className="">查询</span>
                </button>
                <button className="btn btn-warning">
                    <span className="">删除</span>
                </button>
            </div>
        </div>
    }
}