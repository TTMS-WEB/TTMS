import React, {Component} from 'react';
import GenerateSeat from '../containers/GenerateSeat';

export default class Seat extends Component {
    componentWillMount() {
        this.props.getStudioInfo();
            if(!this.props.Login){
                this.props.router.push('/');
            }
            else if(this.props.Login === "root"){
                this.props.router.push('/schedule');
            }

            else if(this.props.Login === "root"){
                this.props.router.push('/schedule');
            }
    }

    chooseStudioId() {
        const studioId = $("#studioId").val();
        this.props.generateSeat(studioId);
    }

    render() {
        let id = this.props.SeatInfo.studioId;
        console.log();
        let studioId = $("#studioId").val()||id;
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
                <img src="../../images/goodSeat.png" />可用
                <img src="../../images/badSeat.png" />不可用
            </div>
            <div>
                <GenerateSeat />
            </div>
        </div>
    }
}