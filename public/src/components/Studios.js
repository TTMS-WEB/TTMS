import React,{Component} from 'react';

export default class Studios extends Component {
    componentWillMount() {
        this.props.getStudios();
    }

    render() {
        const studios = this.props.GetStudios;
        console.log(studios);
        return <div>
            123
        </div>
    }
}
