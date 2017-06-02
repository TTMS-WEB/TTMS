import React, {Component} from 'react';

export default class GenerateSeat extends Component {
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
        const studioId = this.props.SeatInfo.studioId;
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

        return <div>
            <div className="seatInfo">
                <label className="studioId">{studioId}号厅</label>
                <input type="checkbox" className="img-rounded" style={{backgroundColor: "rosybrown"}}/>可用
                <input type="checkbox" className="img-rounded" style={{backgroundColor: "forestgreen"}}/>不可用
            </div>
            {seatArray}
        </div>
    }
}
