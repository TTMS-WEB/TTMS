import React, {Component} from 'react';
import GenerateSeat from '../containers/GenerateSeat';

export default class Sale extends Component {
    componentWillMount() {
        let playPlanId = this.props.params.id;
        let id = playPlanId.split(':');
        this.props.sale(id[1]);
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
        let imgSrc = document.getElementById(`seat${z}`).src;
        if (imgSrc == "http://localhost:3000/images/goodSeat.png") {
            document.getElementById(`seat${z}`).src = "http://localhost:3000/images/chooseSeat.png"
            let location = x + '排' + y + '列';
            $("#chooseSeat").append(location);
        }
        else {
            document.getElementById(`seat${z}`).src = "http://localhost:3000/images/goodSeat.png";
            let location = x + '排' + y + '列';
            $('#chooseSeat').each(function () {
                let text = $(this).text();
                $(this).text(text.replace(location, ''));
            });
        }
        let number = $("#chooseSeat").text();
        let numberArray = number.split(/[\u4e00-\u9fa5]/);
        numberArray.pop();
        let length = (numberArray.length) / 2;
        let price = 30 * length;
        $("#price").html(price);
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
        }
        this.props.buyTicket(ScheduleId, z);
        $("#price").text(0);
        $("#chooseSeat").text('');
        alert("购票成功");
    }

    render() {
        let studioId = this.props.Sale.ScheduleStudio;
        let seat = this.props.Sale.TicketArray;
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
                seatArray.push(<img src="../../images/goodSeat.png" key={i} id={`seat${i}`} className='img-rounded'
                                    title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                    onClick={this.onChecked.bind(this, x, y)}
                                    onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
            if (seat[i].status == 1) {
                seatArray.push(<img src="../../images/choosed.png" key={i} id={`seat${i}`} className='img-rounded'
                                    title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                    onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
            if (seat[i].status == -1) {
                seatArray.push(<img src="../../images/badSeat.png" key={i} id={`seat${i}`} className='img-rounded'
                                    title={`${x}排${y}列`} data-toggle='tooltip' data-placement='right'
                                    onMouseOver={this.showSeatRowCol.bind(this)}/>);

            }
        }
        let time = this.props.Sale.ScheduleTime;
        switch (time) {
            case 1:
                time = '第一场(8:00-10:00)';
                break;
            case 2:
                time = '第二场(10:00-12:00)';
                break;
            case 3:
                time = '第三场(12:00-14:00)';
                break;
            case 4:
                time = '第四场(14:00-16:00)';
                break;
            case 5:
                time = '第五场(16:00-18:00)';
                break;
            case 6:
                time = '第六场(18:00-20:00)';
                break;
            case 7:
                time = '第七场(20:00-22:00)';
                break;
            case 8:
                time = '第八场(22:00-24:00)';
                break;
            default:
                time = '';
        }


        return <div className="sale">
            <div className="col-md-8" id="saleLeft">
                <GenerateSeat />
                <div className="seatInfo">
                    <label className="studioId">{studioId}号厅</label>
                    <img src="../../images/goodSeat.png"/>可用
                    <img src="../../images/badSeat.png"/>已坏
                    <img src="../../images/chooseSeat.png"/>选中
                    <img src="../../images/choosed.png"/>已购
                </div>
                {seatArray}
            </div>
            <div className="col-md-4" id="saleRight">
                <div><span className="label">影厅：</span><span>{studioId}号厅</span></div>
                <div><span className="label">剧目：</span><span>{this.props.Sale.ScheduleName}</span></div>
                <div><span className="label">主演：</span><span>{this.props.Sale.ScheduleActor}</span></div>
                <div><span
                    className="label">场次：</span><span>{this.props.Sale.ScheduleDate.replace("T00:00:00.000Z", "")}</span>
                </div>
                <div><span className="label">时长：</span><span>{time}</span></div>
                <div><span className="label">座位：</span><span id="chooseSeat"></span></div>
                <div><span className="label">总计：</span><span id="price" ref="price"></span></div>
                <button className="btn btn-info col-md-4" onClick={this.BuyTicket.bind(this)}>购票</button>
            </div>
        </div>

    }
}