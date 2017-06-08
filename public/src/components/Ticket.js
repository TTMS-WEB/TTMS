import React, {Component} from 'react';

export default class Ticket extends Component {
    componentWillMount() {
        this.props.getTicketInfo();
            if(!this.props.Login){
                this.props.router.push('/');
            }
    }

    render() {
        let info = this.props.Schedule.map((ele, index)=> {
            let sellTicket = ele.TicketArray.filter((ele)=>ele.status == 1);
            let notSellTicket = ele.TicketArray.filter((ele)=>ele.status == 0);
            let profit = sellTicket.length * ele.SchedulePrice;
            return <tr key={index} className="TicketTableBody">
                <td>{ele.ScheduleName}</td>
                <td>{ele.ScheduleStudio}</td>
                <td>{sellTicket.length}张 | {notSellTicket.length}张</td>
                <td>{profit}元</td>
            </tr>
        });

        return <div className="ticketBorder">
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>剧目</th>
                    <th>演出厅ID</th>
                    <th>已售 | 未售</th>
                    <th>收益</th>
                </tr>
                </thead>
                <tbody>
                {info}
                </tbody>
            </table>
        </div>
    }
}