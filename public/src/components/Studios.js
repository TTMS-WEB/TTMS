import AddStudio from '../containers/AddStudios';
import React,{Component} from 'react';

export default class Studios extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.getStudios();
    }

    deleteStudio(id) {
        this.props.deleteStudio(id);
    }



    render() {
        const studio = this.props.GetStudios.map((ele, index)=> {
            const id = ele.id;
            const studioName = ele.studioName;
            const studioInfo = ele.studioInfo;
            return (
                <div className="studios">
                    <table className="table table-style" width="200">
                        <thead>
                        <tr>
                            <th>{id}</th>
                            <th>{studioName}</th>
                            <th>{studioInfo}</th>
                            <th>
                                <button className="btn btn-danger" onClick={this.deleteStudio.bind(this,id)}>删除</button>
                            </th>
                        </tr>
                        </thead>
                    </table>
                </div>

            )
        });
        return (
            <div className="Studio">
                <AddStudio/>
                {studio}
            </div>
        )
    }
}


