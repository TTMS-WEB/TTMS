import React,{Component} from 'react';
import GenerateSeat from '../containers/GenerateSeat';

export default class Sale extends Component{
    componentWillMount(){
        let studioId = 1;
        this.props.sale(studioId);
        this.props.getStudioInfo();
    }
    seatStatus(){

    }
    render(){
        let seatArray = [];
        let studioId = this.props.Sale.studioId;
        let seat = this.props.Sale.seatArray;
        const array = this.props.Seat;
        let row;
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == studioId) {
                row = array[i].row;
            }
        }
        for (let i = 0; i < seat.length; i++) {
            let y = i % row + 1;
            let x = parseInt(i / row) + 1;
            if (i % row == 0) {
                seatArray.push(<br />);
            }
            if (seat[i].status == 0) {
                seatArray.push(<input key={i} type="checkbox" id={`seat${i}`} className='img-rounded'
                                      style={{backgroundColor: "rosybrown"}}
                                      title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                      onClick={this.seatStatus.bind(this, studioId, i)}
                                      onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
            if (seat[i].status == -1) {
                seatArray.push(<input key={i} type='checkbox' id={`seat${i}`} className='img-rounded'
                                      style={{backgroundColor: "forestgreen"}}
                                      title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                      onClick={this.seatStatus.bind(this, studioId, i)}
                                      onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
        }
        return<div className="sale">
            <div className="col-md-8" id="saleLeft">
                <GenerateSeat />
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