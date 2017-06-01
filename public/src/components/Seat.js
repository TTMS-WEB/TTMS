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
        for(let i = 0;i<array.length;i++){
            if(array[i].id == studioId){
                row = array[i].row;
                col = array[i].col;
            }
        }
        for (let i = 1; i <= row; i++) {
            for (let j = 1; j <= col; j++) {
                seatArray.push({key:<input type='checkbox'/>,status:0});
            }
        }
        this.props.generateSeat(studioId,seatArray);
    }

    seatStatus(i, j) {
        let n = '' + i + j;
        $("#seat" + n).css("background-color", "forestgreen");
        this.props.changeSeatStatus(i, j);
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
        let col;
        for(let i = 0;i<array.length;i++){
            if(array[i].id == studioId){
                row = array[i].row;
                col = array[i].col;
            }

        }
        let seatArray = [];
        seatArray.push(<br/>);
        for (let i = 1; i <= row; i++) {
            seatArray.push(<br/>);
            for (let j = 1; j <= col; j++) {
                seatArray.push(
                    <input type='checkbox' id={`seat${i}${j}`} className='img-rounded'
                           title={`${i}排${j}列`} data-toggle='tooltip' data-placement='right'
                           onClick={this.seatStatus.bind(this, i, j)}
                           onMouseOver={this.showSeatRowCol.bind(this)}/>);
            }
        }
        return <div>
            <div className="col-lg-3">
                <div className="form-group">
                    <select id="studioId" className="selectpicker form-control" data-style="btn-info"
                            onChange={this.chooseStudioId.bind(this)}>
                        <option>请选择演出厅...</option>
                        {this.props.Seat.map((ele)=> {
                            return<option value={`${ele.id}`}>{ele.id}号演出厅</option>
                        })}
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
            <label className="studioId">{this.props.Seat.id}</label>
            <div id="seatBorder">
                {seatArray}
            </div>
        </div>
    }
}