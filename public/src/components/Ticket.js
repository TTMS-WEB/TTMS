import React,{Component} from 'react';

export default class Ticket extends Component{
    render(){
        return<div>
            <table className="table table-style">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>演出厅名称</th>
                    <th>售票</th>
                    <th>收益</th>
                </tr>
                </thead>
            </table>
        </div>
    }
}