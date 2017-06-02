import React, {Component} from 'react';
import GenerateSeat from '../containers/GenerateSeat';

export default class Seat extends Component {
    componentWillMount() {
        this.props.getStudioInfo();
    }

    chooseStudioId() {
        const studioId = $("#studioId").val();
        const array = this.props.Seat;
        let seatArray = [];
        let row;
        let col;
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == studioId) {
                row = array[i].row;
                col = array[i].col;
            }
        }
        for (let i = 1; i <= row; i++) {
            for (let j = 1; j <= col; j++) {
                seatArray.push({status: 0});
            }
        }
        this.props.generateSeat(studioId, seatArray);
    }

    render() {
        let studioId = this.props.SeatInfo.studioId;
        return <div id="seatBorder">
            <div className="form-group">
                <select  id="studioId" className="selectpicker form-control"
                        data-style="btn-info" onChange={this.chooseStudioId.bind(this)}>
                    <option value='' hidden>请输入演出厅..</option>
                    {this.props.Seat.map((ele,index)=> {
                        return <option  key={index} value={`${ele.id}`}>{ele.id}号演出厅</option>
                    })}
                </select>
            </div>
            <br />
            <div className="seatInfo">
                <label className="studioId">{studioId}号厅</label>
                <input type="checkbox" className="img-rounded" style={{backgroundColor: "rosybrown"}}/>可用
                <input type="checkbox" className="img-rounded" style={{backgroundColor: "forestgreen"}}/>不可用
            </div>
            <div>
                <GenerateSeat />
            </div>
        </div>
    }
}