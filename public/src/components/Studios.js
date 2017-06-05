import AddStudio from '../containers/AddStudios';
import React, {Component} from 'react';

export default class Studios extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if(!this.props.Login){
            this.props.router.push('/');
        }
        else if(this.props.Login === "root"){
            this.props.router.push('/schedule');
        }
        else if(this.props.Login === "root1"){
            this.props.router.push('/schedule');
        }
    }

    deleteStudio(id) {
        this.props.deleteStudio(id);
    }

    modifyModel(ele) {
        this.refs.studioId.value = ele.id;
        this.refs.studioName.value = ele.studioName;
        this.refs.studioInfo.value = ele.studioInfo;
        this.refs.col.value = ele.col;
        this.refs.row.value = ele.row;

        $('#modifyModal').modal('show');
    }

    modifyStudio() {
        const id = this.refs.studioId.value;
        const studioName = this.refs.studioName.value;
        const studioInfo = this.refs.studioInfo.value;
        const col = this.refs.col.value;
        const row = this.refs.row.value;
        if (studioName && studioInfo && col && row) {
            this.refs.tag.innerHTML = '修改成功';
            this.props.modifyStudio(id,studioName, studioInfo, col, row);
        }
        else {
            this.refs.tag.innerHTML = '请输入完整的信息';
        }
    }


    render() {
        const studio = this.props.GetStudios.map((ele, index)=> {
            const id = ele.id;
            const studioName = ele.studioName;
            const studioInfo = ele.studioInfo;
            return (
                <div className="studios" key={index}>
                    <table className="table table-bordered" width="200">
                        <tbody className="studioBody">
                        <tr>
                            <th>{id}</th>
                            <th>{studioName}</th>
                            <th>{studioInfo}</th>
                            <th>
                                <button className="btn btn-danger" onClick={this.deleteStudio.bind(this, id)}>删除
                                </button>
                                <button className="btn btn-warning" data-toggle="modal"
                                        onClick={this.modifyModel.bind(this, ele)}>编辑
                                </button>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </div>

            )
        });
        return (
            <div>
                <div className="modal fade bs-example-modal-lg" id="modifyModal" ref="modifyModal" role="dialog"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel">修改演出厅信息</h4>
                            </div>
                            <div className="input-group">
                                <input type="number" ref="studioId" readOnly="readOnly" className="form-control"/>
                                <input type="text" ref="studioName" className="form-control"/>
                                <input type="text" ref="studioInfo" className="form-control"/>
                                <input type="number" ref="col" className="form-control"/>
                                <input type="number" ref="row" className="form-control"/>
                            </div>
                            <div className="modal-footer">
                                <div className="tag" ref="tag"></div>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.modifyStudio.bind(this)}>提交</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Studio">
                    <AddStudio/>
                    {studio}
                    <ul>

                    </ul>
                </div>
            </div>
        );
    }
}


