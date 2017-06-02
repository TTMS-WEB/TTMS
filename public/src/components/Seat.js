import React, {Component} from 'react';

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

    seatStatus(studioId, index) {
        let i = '' + index;
        this.props.changeSeatStatus(studioId, i);
       /* let backgroundColor = document.getElementById(`seat${i}`).style.backgroundColor;
        if (backgroundColor == "rosybrown") {
            $("#seat" + i).css("background-color", "forestgreen");
        }
        else {
            $("#seat" + i).css("background-color", "rosybrown");
        }*/
    }

    showSeatRowCol() {
        $(function () {
            $("[data-toggle='tooltip']").tooltip();
        });
    }

    render() {
        const studioId = $("#studioId").val()||1;
        const array = this.props.Seat;
        let row;
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == studioId) {
                row = array[i].row;
            }
        }

        let seatArray = [];
        let seat = this.props.SeatInfo.seatArray;
        for (let i = 0; i < seat.length; i++) {
            let y = i % row + 1;
            let x = parseInt(i / row) + 1;
            if (i % row == 0) {
                seatArray.push(<br />);
            }
            if (seat[i].status == 0) {
                seatArray.push(<input type="checkbox" id={`seat${i}`} className='img-rounded'
                                      style={{backgroundColor: "rosybrown"}}
                                      title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                      onClick={this.seatStatus.bind(this, studioId, i)}
                                      onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
            if (seat[i].status == -1) {
                seatArray.push(<input type='checkbox' id={`seat${i}`} className='img-rounded'
                                      style={{backgroundColor: "forestgreen"}}
                                      title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                      onClick={this.seatStatus.bind(this, studioId, i)}
                                      onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
        }

        return <div id="seatBorder">
            <div className="form-group">
                <select id="studioId" className="selectpicker form-control"
                        data-style="btn-info" onChange={this.chooseStudioId.bind(this)}>
                    <option value='' hidden>请输入演出厅..</option>
                    {this.props.Seat.map((ele)=> {
                        return <option value={`${ele.id}`}>{ele.id}号演出厅</option>
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
                {seatArray}
            </div>
        </div>
    }
}