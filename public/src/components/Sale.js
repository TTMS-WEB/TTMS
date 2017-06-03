import React, {Component} from 'react';
import GenerateSeat from '../containers/GenerateSeat';

export default class Sale extends Component {
    componentWillMount() {
        let playPlanId = this.props.params._id;
        this.props.sale(playPlanId);
        this.props.getStudioInfo();
    }

    showSeatRowCol() {
        $(function () {
            $("[data-toggle='tooltip']").tooltip();
        });
    }


    onChecked(x, y) {
        let studioId = this.props.Sale.ScheduleStudio;
        const array = this.props.Seat;
        let row;
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == studioId) {
                row = array[i].row;
            }
        }

        let z = (x - 1) * row + y - 1;
        $("#seat" + z).css("background-color", "white");
        let location = x + '排' + y + '列';
        $("#chooseSeat").append(location);

        let number = $("#chooseSeat").text();
        let numberArray = number.split(/[\u4e00-\u9fa5]/);
        numberArray.pop();
        let length = (numberArray.length) / 2;
        let price = 30 * length;
        $("#price").text(price);
    }

    BuyTicket() {
        let location = $("#chooseSeat").text();
        let a = location.split(/[\u4e00-\u9fa5]/);
        a.pop();

        let ScheduleId = this.props.Sale._id;
        let studioId = this.props.Sale.ScheduleStudio;
        const array = this.props.Seat;
        let row;
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == studioId) {
                row = array[i].row;
            }
        }

        let x, y, z = [];
        for (let i = 0; i < a.length; i++) {
            x = Number(a[i]);
            y = Number(a[i + 1]);
            z.push((x - 1) * row + y - 1);
            i++;
            console.log(z);
        }
        this.props.buyTicket(ScheduleId, z);
    }

    render() {
        let studioId = this.props.Sale.ScheduleStudio;
        let seat = this.props.Sale.TicketArray;
        console.log(seat);
        const array = this.props.Seat;
        let row;
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == studioId) {
                row = array[i].row;
            }
        }

        let seatArray = [];
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
                                      onClick={this.onChecked.bind(this, x, y)}
                                      onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
            if (seat[i].status == 1) {
                seatArray.push(<input key={i} type='checkbox' id={`seat${i}`} className='img-rounded'
                                      style={{backgroundColor: "dodgerblue"}}
                                      title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                      onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
            if (seat[i].status == -1) {
                seatArray.push(<input key={i} type='checkbox' id={`seat${i}`} className='img-rounded'
                                      style={{backgroundColor: "forestgreen"}}
                                      title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                      onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
        }

        return <div className="sale">
            <div className="col-md-8" id="saleLeft">
                <GenerateSeat />
                <div className="seatInfo">
                    <label className="studioId">{studioId}号厅</label>
                    <input type="checkbox" className="img-rounded" style={{backgroundColor: "rosybrown"}}/>可选
                    <input type="checkbox" className="img-rounded" style={{backgroundColor: "forestgreen"}}/>已坏
                    <input type="checkbox" className="img-rounded" style={{backgroundColor: "dodgerblue"}}/>已购
                    <input type="checkbox" className="img-rounded" style={{backgroundColor: "white"}}/>选中
                </div>
                {seatArray}
            </div>
            <div className="col-md-4" id="saleRight">
                <div><span className="label">影厅：</span><span>{studioId}号厅</span></div>
                <div><span className="label">剧目：</span><span>{this.props.Sale.ScheduleName}</span></div>
                <div><span className="label">场次：</span><span>{this.props.Sale.ScheduleDate}</span></div>
                <div><span className="label">主演：</span><span>{this.props.Sale.ScheduleActor}</span></div>
                <div><span className="label">时长：</span><span>{this.props.Sale.ScheduleTime}</span></div>
                <div><span className="label">座位：</span><span id="chooseSeat"></span></div>
                <div><span className="label">总计：</span><span id="price"></span></div>
                <button className="btn btn-info col-md-4" onClick={this.BuyTicket.bind(this)}>购票</button>
            </div>
        </div>
    }
}