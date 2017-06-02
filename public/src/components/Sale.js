import React,{Component} from 'react';
import GenerateSeat from '../containers/GenerateSeat';

export default class Sale extends Component{

    render(){
        return<div className="sale">
            <div className="col-md-8" id="saleLeft">
                <div className="seatInfo">
                    <label className="studioId">号厅</label>
                    <input type="checkbox" className="img-rounded" style={{backgroundColor: "rosybrown"}}/>可用
                    <input type="checkbox" className="img-rounded" style={{backgroundColor: "forestgreen"}}/>不可用
                    <input type="checkbox" className="img-rounded" style={{backgroundColor: "dodgerblue"}}/>选中
                </div>
            </div>
            <div className="col-md-4" id="saleRight">
                <div>影厅：<span>1号厅</span></div>
                <div>剧目：<span>白鹿原</span></div>
                <div>场次：<span>today</span></div>
                <div>座位：<span></span></div>
                <div>总计：<span>30</span></div>
                <button className="btn btn-info col-md-4">购票</button>
            </div>
        </div>
    }
}