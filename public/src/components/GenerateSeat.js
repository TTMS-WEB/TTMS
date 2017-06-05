import React, {Component} from 'react';

export default class GenerateSeat extends Component {
    componentWillMount(){
        this.props.getStudioInfo();
    }
    seatStatus(studioId, index) {
        let i = '' + index;
        this.props.changeSeatStatus(studioId, i);
    }

    showSeatRowCol() {
        $(function () {
            $("[data-toggle='tooltip']").tooltip();
        });
    }

    render() {
        const id  = this.props.Seat.map((ele)=>ele.id);
        const studioId = id[0];
        console.log(studioId);
        const array = this.props.Seat;
        console.log(array);
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
            if (seat[i].status == 0||seat[i].status ==1) {
                seatArray.push(<img src="../../images/goodSeat.png" key={i} type="checkbox" id={`seat${i}`} className='img-rounded'
                                      title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                      onClick={this.seatStatus.bind(this, studioId, i)}
                                      onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
            if (seat[i].status == -1) {
                seatArray.push(<img src="../../images/badSeat.png" key={i} type='checkbox' id={`seat${i}`} className='img-rounded'
                                      title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                      onClick={this.seatStatus.bind(this, studioId, i)}
                                      onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
        }

        return <div>
            {seatArray}
        </div>
    }
}
