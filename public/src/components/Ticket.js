import React,{Component} from 'react';

export default class Ticket extends Component{
    render(){
        return<div className="ticketBorder">
            <table className="table table-style">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>剧目</th>
                    <th>演出厅ID</th>
                    <th>收益</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                </tr>

                </tbody>
            </table>
        </div>
    }
}